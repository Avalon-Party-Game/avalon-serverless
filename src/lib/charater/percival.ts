
import type { Character } from "./base";
import { VirtualRoom } from "./utils";

export class Percival implements Character {
    type = "PERCIVAL" as const;
    side = "JUSTICE" as const;
    name = "派西维尔";

    constructor(private room: VirtualRoom, public playerName: string) {}

    get visible() {
        return this.room.players
            .filter(({ type }) => type === "MERLIN" || type === "MORGANA")
            .map(({ playerName }) => ({ playerName }));
    }

    toJSON = () => {
        return {
            type: this.type,
            name: this.name,
            side: this.side,
            visible: this.visible,
        };
    };
}
