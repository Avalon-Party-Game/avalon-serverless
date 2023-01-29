"use client";
import React from "react";
import styled from "styled-components";
import { Card, List } from "antd";
import { Stage } from "@/lib/stage";
import { usePlayers, useRoom, useStage, useTasks } from "@/state/context";
import { RealTask } from "@/graphql/queries/tasks";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();
    const stage = useStage();
    const pending = stage === Stage.ELECTION && index === 0;
    const players = usePlayers();

    const positiveCount =
        task.electionVotes?.filter(({ vote }) => vote).length ?? 0;

    const result = positiveCount > players.length / 2;

    return pending ? (
        <RecordStyle>{t("history.waitingElection")}</RecordStyle>
    ) : (
        <>
            <RecordStyle>
                <span>{t("history.team")}</span>
                {task.electionCandidates.map((player) => (
                    <span className="player" key={player}>
                        {player}
                    </span>
                ))}
                <span>
                    (
                    {result
                        ? t("history.electionSuccess")
                        : t("history.electionFailed")}
                    )
                </span>
            </RecordStyle>
            <RecordStyle>
                <span>{t("history.agreeElection")}</span>
                {task.electionVotes
                    ?.filter(({ vote }) => vote)
                    .map(({ playerName }) => (
                        <span className="player" key={playerName}>
                            {playerName}
                        </span>
                    ))}
            </RecordStyle>
            <RecordStyle>
                <span>{t("history.disagreeElection")}</span>
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
    const { t } = useTranslation();

    const waiting =
        (stage === Stage.POLLING || stage === Stage.ELECTION) && index === 0;

    const electionPositiveCount =
        task.electionVotes?.filter(({ vote }) => vote).length ?? 0;

    const electionResult = electionPositiveCount > room.players.length / 2;

    const taskPositiveCount =
        task.pollVotes?.filter(({ vote }) => vote).length ?? 0;

    const taskResult = taskPositiveCount > (task.pollVotes?.length ?? 0) / 2;

    return waiting ? (
        <div>{t("history.waitingQuest")}</div>
    ) : electionResult && task.pollVotes?.length ? (
        <RecordStyle>
            <span>
                {t("history.questResult")}
                {taskResult ? t("success") : t("failed")} ---{" "}
            </span>
            <span>
                {t("history.numFails", {
                    num: task.pollVotes?.filter(({ vote }) => !vote).length,
                })}
            </span>
        </RecordStyle>
    ) : null;
};

export const TaskHistory = () => {
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
