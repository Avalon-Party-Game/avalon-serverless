
import type { Character } from "./base";
import { VirtualRoom } from "./utils";

export class Morgana implements Character {
    type = "MORGANA" as const;
    side = "VILLAIN" as const;
    name = "莫甘娜";

    constructor(private room: VirtualRoom, public playerName: string) {}

    get visible() {
        return this.room.players
            .filter(
                ({ type, side }) =>
                    side === "VILLAIN" &&
                    type !== "OBERON" &&
                    type !== "MORGANA"
            )
            .map(({ name: roleName, playerName }) => ({
                playerName,
                roleName,
            }));
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
