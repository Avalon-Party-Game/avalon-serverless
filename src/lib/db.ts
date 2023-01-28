import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "./firebase";

const db = getDatabase(app);

export const test = () => {
    onValue(ref(db, "room"), (snapshot) => {
        console.log(snapshot.val());
    });
};
