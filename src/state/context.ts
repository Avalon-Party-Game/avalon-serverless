import { useSubscription } from "@apollo/client";
import { subscribeStage } from "@/graphql/queries/stage";
import { subscribePlayers } from "@/graphql/queries/players";
import { useMemo } from "react";
import { VirtualRoom } from "@/lib/charater/utils";
import { RealTask, subscribeTasks } from "@/graphql/queries/tasks";

export const useSessionPlayerName = () => {
    const name =
        typeof window === "undefined"
            ? null
            : window.sessionStorage.getItem("playerName");
    return name;
};

export const useStage = () => {
    return useSubscription(subscribeStage).data?.avalon_stage_by_pk?.stage;
};

export const usePlayers = () => {
    return useSubscription(subscribePlayers).data?.avalon_players ?? [];
};

export const useTasks = () => {
    return useSubscription(subscribeTasks).data?.avalon_tasks ?? [];
};

export const useCurrentTask = () => {
    const tasks = useTasks();
    return tasks[0] as RealTask | undefined;
};

export const useRoom = () => {
    const players = usePlayers();
    const room = useMemo(() => new VirtualRoom(players), [players]);
    return room;
};

export const useMe = () => {
    const myName = useSessionPlayerName();
    const room = useRoom();
    const me = room.players.find(({ playerName }) => playerName === myName);
    return me;
};
