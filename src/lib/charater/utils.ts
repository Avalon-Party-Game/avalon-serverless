import { Assasin } from "./assasin";
import { LoyalServant } from "./loyal-servant";
import { Merlin } from "./merlin";
import { Modred } from "./modred";
import { Morgana } from "./morgana";
import { Oberon } from "./oberon";
import { Percival } from "./percival";
import type { Character } from "./base";
import { SubscribePlayersSubscription } from "@/graphql/gql-generated/graphql";
import { Minions } from "./minions";

const shuffleArray = <T>(inputArray: Array<T>) => {
    const array = Array.from(inputArray);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

export class VirtualRoom {
    public players: Character[] = [];

    constructor(originPlayers: SubscribePlayersSubscription["avalon_players"]) {
        const converted = originPlayers
            .map((originPlayer) => {
                switch (originPlayer.role as Character["type"]) {
                    case "ASSASIN":
                        return new Assasin(this, originPlayer.playerName);
                    case "LOYAL_SERVANT":
                        return new LoyalServant(this, originPlayer.playerName);
                    case "MERLIN":
                        return new Merlin(this, originPlayer.playerName);
                    case "MINIONS":
                        return new Minions(this, originPlayer.playerName);
                    case "MODRED":
                        return new Modred(this, originPlayer.playerName);
                    case "MORGANA":
                        return new Morgana(this, originPlayer.playerName);
                    case "OBERON":
                        return new Oberon(this, originPlayer.playerName);
                    case "PERCIVAL":
                        return new Percival(this, originPlayer.playerName);
                }
            })
            .filter((converted) => !!converted);
        this.players = converted;
    }
}

export const roleSideMap: { [x in Character["type"]]: Character["side"] } = {
    MERLIN: "JUSTICE",
    PERCIVAL: "JUSTICE",
    MORGANA: "VILLAIN",
    ASSASIN: "VILLAIN",
    LOYAL_SERVANT: "JUSTICE",
    OBERON: "VILLAIN",
    MODRED: "VILLAIN",
    MINIONS: "VILLAIN",
};

export const arrangementTable: { [x: number]: Character["type"][] } = {
    1: ["MERLIN"], // used for debugging
    2: ["MERLIN", "MINIONS"], // used for debugging
    6: [
        "MERLIN",
        "PERCIVAL",
        "MORGANA",
        "ASSASIN",
        "LOYAL_SERVANT",
        "LOYAL_SERVANT",
    ],
    7: [
        "MERLIN",
        "PERCIVAL",
        "MORGANA",
        "ASSASIN",
        "LOYAL_SERVANT",
        "LOYAL_SERVANT",
        "OBERON",
    ],
    8: [
        "MERLIN",
        "PERCIVAL",
        "MORGANA",
        "ASSASIN",
        "LOYAL_SERVANT",
        "LOYAL_SERVANT",
        "LOYAL_SERVANT",
        "MINIONS",
    ],
    9: [
        "MERLIN",
        "PERCIVAL",
        "MORGANA",
        "ASSASIN",
        "LOYAL_SERVANT",
        "LOYAL_SERVANT",
        "LOYAL_SERVANT",
        "LOYAL_SERVANT",
        "MODRED",
    ],
    10: [
        "MERLIN",
        "PERCIVAL",
        "MORGANA",
        "ASSASIN",
        "LOYAL_SERVANT",
        "LOYAL_SERVANT",
        "LOYAL_SERVANT",
        "LOYAL_SERVANT",
        "OBERON",
        "MODRED",
    ],
};

export class RolePicker {
    role: Character["type"][] = [];

    constructor(count: number) {
        this.role = shuffleArray(arrangementTable[count] ?? []);
    }

    pick = () => {
        return this.role.pop();
    };
}
