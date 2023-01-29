import type { Character } from "./base";
import { VirtualRoom } from "./utils";

export class Modred implements Character {
    type = "MODRED" as const;
    side = "VILLAIN" as const;
    name = "莫德雷德";

    constructor(private room: VirtualRoom, public playerName: string) {}

    get visible() {
        return this.room.players
            .filter(
                ({ type, side }) =>
                    side === "VILLAIN" && type !== "OBERON" && type !== "MODRED"
            )
            .map(({ name: roleName, playerName, type }) => ({
                playerName,
                roleName,
                type,
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
