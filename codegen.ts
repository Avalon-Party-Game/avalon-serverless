import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

const url = `https://${process.env.uri}`;

const config: CodegenConfig = {
    schema: {
        [url]: {
            headers: {
                "content-type": "application/json",
                "x-hasura-admin-secret": process.env.hasura_admin_secret!,
            },
        },
    },
    documents: ["src/**/*.{ts,tsx}"],
    overwrite: true,
    generates: {
        "./src/graphql/gql-generated/": {
            overwrite: true,
            preset: "client",
            plugins: [],
        },
    },
};

export default config;
