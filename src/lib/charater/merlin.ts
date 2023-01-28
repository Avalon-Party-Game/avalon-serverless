
import type { Character } from "./base";
import { VirtualRoom } from "./utils";

export class Merlin implements Character {
    type = "MERLIN" as const;
    side = "JUSTICE" as const;
    name = "梅林";

    constructor(private room: VirtualRoom, public playerName: string) {}

    get visible() {
        return this.room.players
            .filter(({ type, side }) => side === "VILLAIN" && type !== "MODRED")
            .map(({ playerName }) => ({ playerName, roleName: "反派" }));
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
