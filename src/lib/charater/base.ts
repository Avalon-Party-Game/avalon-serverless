// import type { PlayerDTO } from "../room/player";

export interface ISerializable {
    toJSON(): unknown;
}

export interface Visible {
    playerName: string;
    roleName?: string;
    type?: Character["type"];
    side?: Character["side"];
}

export interface Character {
    playerName: string;
    side: "JUSTICE" | "VILLAIN";
    type:
        | "MERLIN"
        | "PERCIVAL"
        | "MORGANA"
        | "ASSASIN"
        | "LOYAL_SERVANT"
        | "OBERON"
        | "MODRED"
        | "MINIONS";
    name: string;
    visible: Visible[];
    toJSON(): {
        type: Character["type"];
        side: Character["side"];
        name: string;
        visible: Character["visible"];
    };
}
