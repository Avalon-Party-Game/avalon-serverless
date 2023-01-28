import { client } from "@/graphql/admin-client";
import { deleteAllPlayers } from "@/graphql/queries/players";
import { updateStage } from "@/graphql/queries/stage";
import { deleteAllTasks } from "@/graphql/queries/tasks";
import { Stage } from "@/lib/stage";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await client.mutate({
        mutation: deleteAllPlayers,
    });

    await client.mutate({
        mutation: deleteAllTasks,
    });

    const mutation = await client.mutate({
        mutation: updateStage,
        variables: { stage: Stage.WAITING },
    });

    return res.status(200).json(mutation);
}
