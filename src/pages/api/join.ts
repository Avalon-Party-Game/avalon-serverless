import { client } from "@/graphql/admin-client";
import { insertPlayer } from "@/graphql/queries/players";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const query: { playerName: string } = JSON.parse(req.body);
    const mutation = await client.mutate({
        mutation: insertPlayer,
        variables: { playerName: query.playerName, connected: true },
    });
    return res.status(200).json(mutation);
}
