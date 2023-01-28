import { createGraphqlClient } from "./client";

export const client = createGraphqlClient(
    {
        "x-hasura-admin-secret": process.env.hasura_admin_secret!,
    },
    process.env.uri
);
