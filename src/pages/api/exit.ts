import { client } from "@/graphql/admin-client";
import { deleteAllPlayers } from "@/graphql/queries/players";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const query: { playerName: string } = JSON.parse(req.body);
    const mutation = await client.mutate({
        mutation: deleteAllPlayers,
        variables: { where: { playerName: { _eq: query.playerName } } },
    });
    return res.status(200).json(mutation);
}
