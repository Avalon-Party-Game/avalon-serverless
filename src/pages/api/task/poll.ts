import { client } from "@/graphql/admin-client";
import { UpdatePollVotesMutationVariables } from "@/graphql/gql-generated/graphql";
import { updateStage } from "@/graphql/queries/stage";
import {
    getTaskById,
    RealTask,
    updatePollVotes,
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

    const playerVoted = current?.pollVotes?.some(
        ({ playerName: existing }) => existing === playerName
    );

    if (!current || playerVoted) {
        return res.status(400).end();
    } else {
        const isLastPlayerVote =
            current.pollVotes?.length === current.electionCandidates.length - 1;

        const variables: UpdatePollVotesMutationVariables = {
            pollVotes1: { playerName, vote },
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
                (current.pollVotes?.filter(({ vote }) => vote).length ?? 0) +
                playerIsPositive;
            const pollResult =
                positiveCount > current.electionCandidates.length / 2;

            variables.pollResult = pollResult;

            stage = Stage.ONGOING;
        }

        const mutation = await client.mutate({
            mutation: updatePollVotes,
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
