
import type { Character } from "./base";
import { VirtualRoom } from "./utils";

export class Oberon implements Character {
    type = "OBERON" as const;
    side = "VILLAIN" as const;
    name = "奥伯伦";

    constructor(private room: VirtualRoom, public playerName: string) {}

    get visible() {
        return [];
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
