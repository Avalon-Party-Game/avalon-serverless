import { client } from "@/graphql/admin-client";
import { GetPlayersQuery } from "@/graphql/gql-generated/graphql";
import { getPlayers, updatePlayers } from "@/graphql/queries/players";
import { updateStage } from "@/graphql/queries/stage";
import { RolePicker, roleSideMap } from "@/lib/charater/utils";
import { Stage } from "@/lib/stage";
import { NextApiRequest, NextApiResponse } from "next";

const assignRole = (players: GetPlayersQuery["avalon_players"]) => {
    const rolePicker = new RolePicker(players.length);

    return players.map((player) => {
        const role = rolePicker.pick()!;
        const side = roleSideMap[role];
        return {
            where: { playerName: { _eq: player.playerName } },
            _set: { role, side },
        };
    });
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const players = (
        await client.query({
            query: getPlayers,
        })
    ).data.avalon_players;

    const canStart =
        process.env.NODE_ENV === "development"
            ? true
            : players.length >= 6 && players.length <= 10;

    if (canStart) {
        const updates = assignRole(players);

        await client.mutate({
            mutation: updatePlayers,
            variables: { updates },
        });

        const mutation = await client.mutate({
            mutation: updateStage,
            variables: { stage: Stage.STARTED },
        });
        return res.status(200).json(mutation);
    } else {
        return res.status(400).end();
    }
}
