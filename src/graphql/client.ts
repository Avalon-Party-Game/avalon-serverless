import { ApolloClient, InMemoryCache, split } from "@apollo/client";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { WebSocket } from "ws";
import { BehaviorSubject } from "rxjs";

export const $wsStateSubject = new BehaviorSubject(false);

export const createGraphqlClient = (
    headers: Record<string, string>,
    uri = ""
) => {
    const httpLink = new BatchHttpLink({
        uri: `https://${uri}`,
        headers,
        batchMax: 5,
        batchInterval: 20,
    });

    const wsLink = new GraphQLWsLink(
        createClient({
            url: `wss://${uri}`,
            webSocketImpl:
                typeof window === "undefined" ? WebSocket : window.WebSocket,
            connectionParams: { headers },
            on: {
                connected() {
                    $wsStateSubject.next(true);
                },
                closed() {
                    $wsStateSubject.next(false);
                },
            },
        })
    );

    const splitLink = split(
        ({ query }) => {
            const definition = getMainDefinition(query);
            return (
                definition.kind === "OperationDefinition" &&
                definition.operation === "subscription"
            );
        },
        wsLink,
        httpLink
    );

    const client = new ApolloClient({
        link: typeof window === "undefined" ? httpLink : splitLink,
        cache: new InMemoryCache(),
        ssrMode: true,
    });

    return client;
};
