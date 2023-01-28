import { graphql } from "../gql-generated";

export const updateStage = graphql(`
    mutation UpdateStage($stage: String) {
        update_avalon_stage(
            where: { id: { _eq: "stage" } }
            _set: { stage: $stage }
        ) {
            affected_rows
            returning {
                id
                stage
            }
        }
    }
`);

export const subscribeStage = graphql(`
    subscription SubscribeStage {
        avalon_stage_by_pk(id: "stage") {
            id
            stage
        }
    }
`);
