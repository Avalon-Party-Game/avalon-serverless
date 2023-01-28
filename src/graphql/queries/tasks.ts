import { graphql } from "../gql-generated";
import { SubscribeTaskSubscription } from "../gql-generated/graphql";

export const getTaskById = graphql(`
    query GetTaskById($id: uuid) {
        avalon_tasks(where: { id: { _eq: $id } }) {
            created_at
            electionCandidates
            electionResult
            electionVotes
            id
            pollResult
            pollVotes
            updated_at
        }
    }
`);

export const insertTask = graphql(`
    mutation InsertTask($electionCandidates: jsonb = [""]) {
        insert_avalon_tasks(
            objects: { electionCandidates: $electionCandidates }
        ) {
            affected_rows
        }
    }
`);

export const deleteAllTasks = graphql(`
    mutation DeleteAllTasks($where: avalon_tasks_bool_exp = {}) {
        delete_avalon_tasks(where: $where) {
            affected_rows
        }
    }
`);

export const updateElectionVotes = graphql(`
    mutation UpdateElectionVotes(
        $electionVotes1: jsonb = ""
        $electionResult: Boolean
        $where: avalon_tasks_bool_exp = {
            _and: { id: { _eq: "" }, updated_at: { _eq: "" } }
        }
    ) {
        update_avalon_tasks(
            _append: { electionVotes: $electionVotes1 }
            _set: { electionResult: $electionResult }
            where: $where
        ) {
            affected_rows
            returning {
                created_at
                electionCandidates
                electionResult
                electionVotes
                id
                pollResult
                pollVotes
                updated_at
            }
        }
    }
`);

export const updatePollVotes = graphql(`
    mutation UpdatePollVotes(
        $pollVotes1: jsonb = ""
        $pollResult: Boolean
        $where: avalon_tasks_bool_exp = {
            _and: { id: { _eq: "" }, updated_at: { _eq: "" } }
        }
    ) {
        update_avalon_tasks(
            _append: { pollVotes: $pollVotes1 }
            _set: { pollResult: $pollResult }
            where: $where
        ) {
            affected_rows
            returning {
                created_at
                electionCandidates
                electionResult
                electionVotes
                id
                pollResult
                pollVotes
                updated_at
            }
        }
    }
`);

export const subscribeTasks = graphql(`
    subscription SubscribeTask {
        avalon_tasks(order_by: { updated_at: desc }) {
            updated_at
            pollVotes
            pollResult
            id
            electionVotes
            electionResult
            created_at
            electionCandidates
        }
    }
`);

export type RealTask = Omit<
    SubscribeTaskSubscription["avalon_tasks"][0],
    "electionCandidates" | "electionVotes" | "pollVotes"
> & {
    electionCandidates: string[];
    electionVotes?: Array<{
        playerName: string;
        vote: boolean;
    }>;
    pollVotes?: Array<{ playerName: string; vote: boolean }>;
};
