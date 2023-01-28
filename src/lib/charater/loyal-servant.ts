import type { Character } from "./base";
import { VirtualRoom } from "./utils";

export class LoyalServant implements Character {
    type = "LOYAL_SERVANT" as const;
    side = "JUSTICE" as const;
    name = "忠臣";

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
