export enum Vote {
    POSITIVE,
    NEGATIVE,
}

export interface IVote {
    player: string;
    vote: Vote;
}

export interface ITask {
    // select players to execute task
    elections: {
        players: string[];
        votes: IVote[];
        result?: boolean;
    };

    // players who can execute task vote for task
    poll: {
        votes: IVote[];
    };
}
