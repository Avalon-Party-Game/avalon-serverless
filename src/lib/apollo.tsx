"use client";

import { createGraphqlClient } from "@/graphql/client";
import { ApolloProvider } from "@apollo/client";
import { FC, PropsWithChildren } from "react";

export const ClientProvider: FC<PropsWithChildren<{ config?: string }>> = ({
    config,
    children,
}) => {
    return (
        <ApolloProvider
            client={createGraphqlClient(
                { "x-hasura-role": "player" },
                config ?? ""
            )}
        >
            {children}
        </ApolloProvider>
    );
};
