import { client } from "@/graphql/admin-client";
import { updateStage } from "@/graphql/queries/stage";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { stage }: { stage: string } = JSON.parse(req.body);
    const mutation = await client.mutate({
        mutation: updateStage,
        variables: { stage },
    });
    return res.status(200).json(mutation);
}
