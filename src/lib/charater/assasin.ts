import type { Character } from "./base";
import type { VirtualRoom } from "./utils";

export class Assasin implements Character {
    type = "ASSASIN" as const;
    side = "VILLAIN" as const;
    name = "刺客";

    constructor(private room: VirtualRoom, public playerName: string) {}

    get visible() {
        return this.room.players
            .filter(
                ({ type, side }) =>
                    side === "VILLAIN" &&
                    type !== "OBERON" &&
                    type !== "ASSASIN"
            )
            .map(({ playerName, name: roleName, type }) => ({
                roleName,
                playerName,
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
