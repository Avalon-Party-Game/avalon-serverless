import { graphql } from "../gql-generated";

export const subscribePlayers = graphql(`
    subscription SubscribePlayers {
        avalon_players {
            connected
            playerName
            role
            side
        }
    }
`);

export const getPlayers = graphql(`
    query GetPlayers {
        avalon_players {
            connected
            playerName
            role
            side
        }
    }
`);

export const insertPlayer = graphql(`
    mutation InsertPlayer($playerName: String, $connected: Boolean) {
        insert_avalon_players_one(
            object: { playerName: $playerName, connected: $connected }
            on_conflict: { update_columns: connected, constraint: players_pkey }
        ) {
            playerName
            connected
            role
            side
        }
    }
`);

export const deleteAllPlayers = graphql(`
    mutation DeleteAllPlayers($where: avalon_players_bool_exp = {}) {
        delete_avalon_players(where: $where) {
            affected_rows
        }
    }
`);

export const updatePlayers = graphql(`
    mutation UpdatePlayers(
        $updates: [avalon_players_updates!] = [
            { where: { playerName: { _eq: "" } }, _set: { role: "" } }
        ]
    ) {
        update_avalon_players_many(updates: $updates) {
            affected_rows
            returning {
                connected
                playerName
                role
                side
            }
        }
    }
`);
