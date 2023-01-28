import { client } from "@/graphql/admin-client";
import { updateStage } from "@/graphql/queries/stage";
import { insertTask } from "@/graphql/queries/tasks";
import { Stage } from "@/lib/stage";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { playerNames }: { playerNames: string[] } = JSON.parse(req.body);
    const mutation = await client.mutate({
        mutation: insertTask,
        variables: { electionCandidates: playerNames },
    });
    await client.mutate({
        mutation: updateStage,
        variables: { stage: Stage.ELECTION },
    });
    return res.status(200).json(mutation);
}
