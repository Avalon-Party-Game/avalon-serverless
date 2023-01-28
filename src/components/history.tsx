"use client";
import React from "react";
import styled from "styled-components";
import { Card, List } from "antd";
import { Stage } from "@/lib/stage";
import { ITask, Vote } from "@/lib/task";
import { usePlayers, useRoom, useStage, useTasks } from "@/state/context";
import { RealTask } from "@/graphql/queries/tasks";

const RecordStyle = styled.p`
    margin-bottom: 0;
    &:not(:last-child) {
        margin-bottom: 0.5em;
    }
    > span.player {
        margin-right: 10px;
    }
`;

const ElectionRecord = ({ task, index }: { task: RealTask; index: number }) => {
    const stage = useStage();
    const pending = stage === Stage.ELECTION && index === 0;
    const players = usePlayers();

    const positiveCount =
        task.electionVotes?.filter(({ vote }) => vote).length ?? 0;

    const result = positiveCount > players.length / 2;

    return pending ? (
        <RecordStyle>等待投票任务队伍结果...</RecordStyle>
    ) : (
        <>
            <RecordStyle>
                <span>做任务队伍：</span>
                {task.electionCandidates.map((player) => (
                    <span className="player" key={player}>
                        {player}
                    </span>
                ))}
                <span>（{result ? "成功发车" : "发车失败"}）</span>
            </RecordStyle>
            <RecordStyle>
                <span>同意该队伍：</span>
                {task.electionVotes
                    ?.filter(({ vote }) => vote)
                    .map(({ playerName }) => (
                        <span className="player" key={playerName}>
                            {playerName}
                        </span>
                    ))}
            </RecordStyle>
            <RecordStyle>
                <span>反对该队伍：</span>
                {task.electionVotes
                    ?.filter(({ vote }) => !vote)
                    .map(({ playerName }) => (
                        <span className="player" key={playerName}>
                            {playerName}
                        </span>
                    ))}
            </RecordStyle>
        </>
    );
};

const TaskRecord = ({ task, index }: { task: RealTask; index: number }) => {
    const stage = useStage();
    const room = useRoom();

    const waiting =
        (stage === Stage.POLLING || stage === Stage.ELECTION) && index === 0;

    const electionPositiveCount =
        task.electionVotes?.filter(({ vote }) => vote).length ?? 0;

    const electionResult = electionPositiveCount > room.players.length / 2;

    const taskPositiveCount =
        task.pollVotes?.filter(({ vote }) => vote).length ?? 0;

    const taskResult = taskPositiveCount > (task.pollVotes?.length ?? 0) / 2;

    return waiting ? (
        <div>等待任务结果...</div>
    ) : electionResult && task.pollVotes?.length ? (
        <RecordStyle>
            <span>任务结果：{taskResult ? "成功" : "失败"}，</span>
            <span>
                有{task.pollVotes?.filter(({ vote }) => !vote).length}
                人破坏
            </span>
        </RecordStyle>
    ) : null;
};

export const TaskHistory = () => {
    // const history = Array.from(
    //     toJS(taskStore.taskPoll)?.history.reverse() ?? []
    // );
    const tasks = useTasks();
    return (
        <Card size="small">
            <List
                dataSource={tasks}
                renderItem={(task, index) => (
                    <List.Item
                        style={{
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <div>#{tasks.length - index}</div>
                        <ElectionRecord task={task} index={index} />
                        <TaskRecord task={task} index={index} />
                    </List.Item>
                )}
            ></List>
        </Card>
    );
};
