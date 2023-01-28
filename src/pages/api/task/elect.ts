import { client } from "@/graphql/admin-client";
import { UpdateElectionVotesMutationVariables } from "@/graphql/gql-generated/graphql";
import { getPlayers } from "@/graphql/queries/players";
import { updateStage } from "@/graphql/queries/stage";
import {
    getTaskById,
    RealTask,
    updateElectionVotes,
} from "@/graphql/queries/tasks";
import { Stage } from "@/lib/stage";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {
        playerName,
        vote,
        id,
        updated_at,
    }: { playerName: string; vote: boolean; id: string; updated_at: any } =
        JSON.parse(req.body);

    const current = (
        await client.query({ query: getTaskById, variables: { id } })
    ).data.avalon_tasks.at(0) as RealTask | undefined;

    const playerVoted = current?.electionVotes?.some(
        ({ playerName: existing }) => existing === playerName
    );

    const players = await client.query({
        query: getPlayers,
    });

    if (!current || playerVoted) {
        return res.status(400).end();
    } else {
        const isLastPlayerVote =
            current.electionVotes?.length ===
            players.data.avalon_players.length - 1;

        const variables: UpdateElectionVotesMutationVariables = {
            electionVotes1: { playerName, vote },
            where: {
                _and: [
                    {
                        id: { _eq: id },
                        updated_at: { _eq: updated_at },
                    },
                ],
            },
        };

        let stage: Stage | null = null;

        if (isLastPlayerVote) {
            const playerIsPositive = vote ? 1 : 0;
            const positiveCount =
                (current.electionVotes?.filter(({ vote }) => vote).length ??
                    0) + playerIsPositive;
            const electionResult =
                positiveCount > players.data.avalon_players.length / 2;

            variables.electionResult = electionResult;

            if (electionResult) {
                stage = Stage.POLLING;
            } else {
                stage = Stage.ONGOING;
            }
        }

        const mutation = await client.mutate({
            mutation: updateElectionVotes,
            variables,
        });

        if (isLastPlayerVote) {
            await client.mutate({
                mutation: updateStage,
                variables: { stage },
            });
        }

        return res.status(200).json(mutation);
    }
}
