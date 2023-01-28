/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n    subscription SubscribePlayers {\n        avalon_players {\n            connected\n            playerName\n            role\n            side\n        }\n    }\n": types.SubscribePlayersDocument,
    "\n    query GetPlayers {\n        avalon_players {\n            connected\n            playerName\n            role\n            side\n        }\n    }\n": types.GetPlayersDocument,
    "\n    mutation InsertPlayer($playerName: String, $connected: Boolean) {\n        insert_avalon_players_one(\n            object: { playerName: $playerName, connected: $connected }\n            on_conflict: { update_columns: connected, constraint: players_pkey }\n        ) {\n            playerName\n            connected\n            role\n            side\n        }\n    }\n": types.InsertPlayerDocument,
    "\n    mutation DeleteAllPlayers($where: avalon_players_bool_exp = {}) {\n        delete_avalon_players(where: $where) {\n            affected_rows\n        }\n    }\n": types.DeleteAllPlayersDocument,
    "\n    mutation UpdatePlayers(\n        $updates: [avalon_players_updates!] = [\n            { where: { playerName: { _eq: \"\" } }, _set: { role: \"\" } }\n        ]\n    ) {\n        update_avalon_players_many(updates: $updates) {\n            affected_rows\n            returning {\n                connected\n                playerName\n                role\n                side\n            }\n        }\n    }\n": types.UpdatePlayersDocument,
    "\n    mutation UpdateStage($stage: String) {\n        update_avalon_stage(\n            where: { id: { _eq: \"stage\" } }\n            _set: { stage: $stage }\n        ) {\n            affected_rows\n            returning {\n                id\n                stage\n            }\n        }\n    }\n": types.UpdateStageDocument,
    "\n    subscription SubscribeStage {\n        avalon_stage_by_pk(id: \"stage\") {\n            id\n            stage\n        }\n    }\n": types.SubscribeStageDocument,
    "\n    query GetTaskById($id: uuid) {\n        avalon_tasks(where: { id: { _eq: $id } }) {\n            created_at\n            electionCandidates\n            electionResult\n            electionVotes\n            id\n            pollResult\n            pollVotes\n            updated_at\n        }\n    }\n": types.GetTaskByIdDocument,
    "\n    mutation InsertTask($electionCandidates: jsonb = [\"\"]) {\n        insert_avalon_tasks(\n            objects: { electionCandidates: $electionCandidates }\n        ) {\n            affected_rows\n        }\n    }\n": types.InsertTaskDocument,
    "\n    mutation DeleteAllTasks($where: avalon_tasks_bool_exp = {}) {\n        delete_avalon_tasks(where: $where) {\n            affected_rows\n        }\n    }\n": types.DeleteAllTasksDocument,
    "\n    mutation UpdateElectionVotes(\n        $electionVotes1: jsonb = \"\"\n        $electionResult: Boolean\n        $where: avalon_tasks_bool_exp = {\n            _and: { id: { _eq: \"\" }, updated_at: { _eq: \"\" } }\n        }\n    ) {\n        update_avalon_tasks(\n            _append: { electionVotes: $electionVotes1 }\n            _set: { electionResult: $electionResult }\n            where: $where\n        ) {\n            affected_rows\n            returning {\n                created_at\n                electionCandidates\n                electionResult\n                electionVotes\n                id\n                pollResult\n                pollVotes\n                updated_at\n            }\n        }\n    }\n": types.UpdateElectionVotesDocument,
    "\n    mutation UpdatePollVotes(\n        $pollVotes1: jsonb = \"\"\n        $pollResult: Boolean\n        $where: avalon_tasks_bool_exp = {\n            _and: { id: { _eq: \"\" }, updated_at: { _eq: \"\" } }\n        }\n    ) {\n        update_avalon_tasks(\n            _append: { pollVotes: $pollVotes1 }\n            _set: { pollResult: $pollResult }\n            where: $where\n        ) {\n            affected_rows\n            returning {\n                created_at\n                electionCandidates\n                electionResult\n                electionVotes\n                id\n                pollResult\n                pollVotes\n                updated_at\n            }\n        }\n    }\n": types.UpdatePollVotesDocument,
    "\n    subscription SubscribeTask {\n        avalon_tasks(order_by: { updated_at: desc }) {\n            updated_at\n            pollVotes\n            pollResult\n            id\n            electionVotes\n            electionResult\n            created_at\n            electionCandidates\n        }\n    }\n": types.SubscribeTaskDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    subscription SubscribePlayers {\n        avalon_players {\n            connected\n            playerName\n            role\n            side\n        }\n    }\n"): (typeof documents)["\n    subscription SubscribePlayers {\n        avalon_players {\n            connected\n            playerName\n            role\n            side\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPlayers {\n        avalon_players {\n            connected\n            playerName\n            role\n            side\n        }\n    }\n"): (typeof documents)["\n    query GetPlayers {\n        avalon_players {\n            connected\n            playerName\n            role\n            side\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation InsertPlayer($playerName: String, $connected: Boolean) {\n        insert_avalon_players_one(\n            object: { playerName: $playerName, connected: $connected }\n            on_conflict: { update_columns: connected, constraint: players_pkey }\n        ) {\n            playerName\n            connected\n            role\n            side\n        }\n    }\n"): (typeof documents)["\n    mutation InsertPlayer($playerName: String, $connected: Boolean) {\n        insert_avalon_players_one(\n            object: { playerName: $playerName, connected: $connected }\n            on_conflict: { update_columns: connected, constraint: players_pkey }\n        ) {\n            playerName\n            connected\n            role\n            side\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteAllPlayers($where: avalon_players_bool_exp = {}) {\n        delete_avalon_players(where: $where) {\n            affected_rows\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteAllPlayers($where: avalon_players_bool_exp = {}) {\n        delete_avalon_players(where: $where) {\n            affected_rows\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdatePlayers(\n        $updates: [avalon_players_updates!] = [\n            { where: { playerName: { _eq: \"\" } }, _set: { role: \"\" } }\n        ]\n    ) {\n        update_avalon_players_many(updates: $updates) {\n            affected_rows\n            returning {\n                connected\n                playerName\n                role\n                side\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation UpdatePlayers(\n        $updates: [avalon_players_updates!] = [\n            { where: { playerName: { _eq: \"\" } }, _set: { role: \"\" } }\n        ]\n    ) {\n        update_avalon_players_many(updates: $updates) {\n            affected_rows\n            returning {\n                connected\n                playerName\n                role\n                side\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateStage($stage: String) {\n        update_avalon_stage(\n            where: { id: { _eq: \"stage\" } }\n            _set: { stage: $stage }\n        ) {\n            affected_rows\n            returning {\n                id\n                stage\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateStage($stage: String) {\n        update_avalon_stage(\n            where: { id: { _eq: \"stage\" } }\n            _set: { stage: $stage }\n        ) {\n            affected_rows\n            returning {\n                id\n                stage\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    subscription SubscribeStage {\n        avalon_stage_by_pk(id: \"stage\") {\n            id\n            stage\n        }\n    }\n"): (typeof documents)["\n    subscription SubscribeStage {\n        avalon_stage_by_pk(id: \"stage\") {\n            id\n            stage\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetTaskById($id: uuid) {\n        avalon_tasks(where: { id: { _eq: $id } }) {\n            created_at\n            electionCandidates\n            electionResult\n            electionVotes\n            id\n            pollResult\n            pollVotes\n            updated_at\n        }\n    }\n"): (typeof documents)["\n    query GetTaskById($id: uuid) {\n        avalon_tasks(where: { id: { _eq: $id } }) {\n            created_at\n            electionCandidates\n            electionResult\n            electionVotes\n            id\n            pollResult\n            pollVotes\n            updated_at\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation InsertTask($electionCandidates: jsonb = [\"\"]) {\n        insert_avalon_tasks(\n            objects: { electionCandidates: $electionCandidates }\n        ) {\n            affected_rows\n        }\n    }\n"): (typeof documents)["\n    mutation InsertTask($electionCandidates: jsonb = [\"\"]) {\n        insert_avalon_tasks(\n            objects: { electionCandidates: $electionCandidates }\n        ) {\n            affected_rows\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteAllTasks($where: avalon_tasks_bool_exp = {}) {\n        delete_avalon_tasks(where: $where) {\n            affected_rows\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteAllTasks($where: avalon_tasks_bool_exp = {}) {\n        delete_avalon_tasks(where: $where) {\n            affected_rows\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateElectionVotes(\n        $electionVotes1: jsonb = \"\"\n        $electionResult: Boolean\n        $where: avalon_tasks_bool_exp = {\n            _and: { id: { _eq: \"\" }, updated_at: { _eq: \"\" } }\n        }\n    ) {\n        update_avalon_tasks(\n            _append: { electionVotes: $electionVotes1 }\n            _set: { electionResult: $electionResult }\n            where: $where\n        ) {\n            affected_rows\n            returning {\n                created_at\n                electionCandidates\n                electionResult\n                electionVotes\n                id\n                pollResult\n                pollVotes\n                updated_at\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateElectionVotes(\n        $electionVotes1: jsonb = \"\"\n        $electionResult: Boolean\n        $where: avalon_tasks_bool_exp = {\n            _and: { id: { _eq: \"\" }, updated_at: { _eq: \"\" } }\n        }\n    ) {\n        update_avalon_tasks(\n            _append: { electionVotes: $electionVotes1 }\n            _set: { electionResult: $electionResult }\n            where: $where\n        ) {\n            affected_rows\n            returning {\n                created_at\n                electionCandidates\n                electionResult\n                electionVotes\n                id\n                pollResult\n                pollVotes\n                updated_at\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdatePollVotes(\n        $pollVotes1: jsonb = \"\"\n        $pollResult: Boolean\n        $where: avalon_tasks_bool_exp = {\n            _and: { id: { _eq: \"\" }, updated_at: { _eq: \"\" } }\n        }\n    ) {\n        update_avalon_tasks(\n            _append: { pollVotes: $pollVotes1 }\n            _set: { pollResult: $pollResult }\n            where: $where\n        ) {\n            affected_rows\n            returning {\n                created_at\n                electionCandidates\n                electionResult\n                electionVotes\n                id\n                pollResult\n                pollVotes\n                updated_at\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation UpdatePollVotes(\n        $pollVotes1: jsonb = \"\"\n        $pollResult: Boolean\n        $where: avalon_tasks_bool_exp = {\n            _and: { id: { _eq: \"\" }, updated_at: { _eq: \"\" } }\n        }\n    ) {\n        update_avalon_tasks(\n            _append: { pollVotes: $pollVotes1 }\n            _set: { pollResult: $pollResult }\n            where: $where\n        ) {\n            affected_rows\n            returning {\n                created_at\n                electionCandidates\n                electionResult\n                electionVotes\n                id\n                pollResult\n                pollVotes\n                updated_at\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    subscription SubscribeTask {\n        avalon_tasks(order_by: { updated_at: desc }) {\n            updated_at\n            pollVotes\n            pollResult\n            id\n            electionVotes\n            electionResult\n            created_at\n            electionCandidates\n        }\n    }\n"): (typeof documents)["\n    subscription SubscribeTask {\n        avalon_tasks(order_by: { updated_at: desc }) {\n            updated_at\n            pollVotes\n            pollResult\n            id\n            electionVotes\n            electionResult\n            created_at\n            electionCandidates\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;