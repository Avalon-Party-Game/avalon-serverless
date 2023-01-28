import { useObservable } from "react-use";
import { BehaviorSubject } from "rxjs";

const $panelSubject = new BehaviorSubject<string | string[]>(["1", "2", "3"]);

export const updateActivePanel = (value: string | string[]) => {
    $panelSubject.next(value);
};

export const useActivePanel = () => {
    return useObservable($panelSubject);
};
