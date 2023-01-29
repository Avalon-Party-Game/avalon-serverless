"use client";
import React from "react";
import { Button, Card, Col, message, Row, Space } from "antd";
import { Stage } from "@/lib/stage";
import { useCurrentTask, useMe, useRoom, useStage } from "@/state/context";
import { useTranslation } from "react-i18next";

export const Election = () => {
    const { t } = useTranslation();
    const stage = useStage();

    const showElection = stage === Stage.ELECTION;

    const me = useMe();
    const room = useRoom();
    const currentTask = useCurrentTask();

    const votedFromMe = currentTask?.electionVotes?.some(
        ({ playerName: player }) => player === me?.playerName
    );

    const pending = room.players.length !== currentTask?.electionVotes?.length;

    const pendingOthers = pending && votedFromMe;

    const handleVote = (vote: boolean) => {
        const payload = {
            playerName: me?.playerName,
            vote,
            id: currentTask?.id,
            updated_at: currentTask?.updated_at,
        };

        fetch("/api/task/elect", {
            method: "POST",
            body: JSON.stringify(payload),
        });
    };

    // React.useEffect(
    //     () =>
    //         reaction(
    //             () => taskStore.taskPoll?.currentElectionStage.type,
    //             (curr, prev) => {
    //                 if (prev === "PENDING" && curr === "DONE") {
    //                     message.info(
    //                         `投票结果: ${
    //                             taskStore.taskPoll?.currentElectionStage.result
    //                                 ? "成功"
    //                                 : "失败"
    //                         }`
    //                     );
    //                 }
    //             }
    //         ),
    //     []
    // );

    return showElection ? (
        <Card title={t("vote.agreeSelectionTitle")} size="small">
            {pendingOthers ? (
                <div>{t("vote.waiting")}</div>
            ) : (
                <>
                    <Space>
                        {currentTask?.electionCandidates.map((player) => (
                            <div key={player}>{player}</div>
                        ))}
                    </Space>
                    <Row gutter={12} style={{ padding: "10px 0" }}>
                        <Col span={12}>
                            <Button
                                block
                                size="large"
                                danger
                                onClick={() => handleVote(false)}
                            >
                                {t("disagree")}
                            </Button>
                        </Col>
                        <Col span={12}>
                            <Button
                                block
                                size="large"
                                type="primary"
                                ghost
                                onClick={() => handleVote(true)}
                            >
                                {t("agree")}
                            </Button>
                        </Col>
                    </Row>
                </>
            )}
        </Card>
    ) : null;
};
