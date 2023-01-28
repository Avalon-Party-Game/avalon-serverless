
import type { Character } from "./base";
import { VirtualRoom } from "./utils";

export class Minions implements Character {
    type = "MINIONS" as const;
    side = "VILLAIN" as const;
    name = "爪牙";

    constructor(private room: VirtualRoom, public playerName: string) {}

    get visible() {
        return this.room.players
            .filter(
                ({ side, type }) =>
                    side === "VILLAIN" &&
                    type !== "OBERON" &&
                    type !== "MINIONS"
            )
            .map(({ playerName, name: roleName }) => ({
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
