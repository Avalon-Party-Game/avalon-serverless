"use client";
import React from "react";
import { Button, Card, Col, message, Row } from "antd";
import { Stage } from "@/lib/stage";
import { useCurrentTask, useMe, useStage } from "@/state/context";
import { useTranslation } from "react-i18next";

export const Polling = () => {
    const { t } = useTranslation();
    const stage = useStage();
    const me = useMe();
    const currentTask = useCurrentTask();

    const showPolling = stage === Stage.POLLING;

    const currentRoundIncludesMe = currentTask?.electionCandidates.includes(
        me?.playerName ?? ""
    );

    const pending =
        currentTask?.pollVotes?.length !==
        currentTask?.electionCandidates.length;

    const playerHasPlaced = !!currentTask?.pollVotes?.find(
        ({ playerName }) => playerName === me?.playerName
    );

    const myPollingHasBeenPlaced =
        currentRoundIncludesMe && pending && playerHasPlaced;

    const pendingOthers = currentRoundIncludesMe
        ? myPollingHasBeenPlaced
        : true;

    const handleVote = (vote: boolean) => {
        const payload = {
            playerName: me?.playerName,
            vote,
            id: currentTask?.id,
            updated_at: currentTask?.updated_at,
        };

        fetch("/api/task/poll", {
            method: "POST",
            body: JSON.stringify(payload),
        });
    };

    // React.useEffect(
    //     () =>
    //         reaction(
    //             () => taskStore.taskPoll?.currentPollingStage.type,
    //             (curr, prev) => {
    //                 if (prev === "PENDING" && curr === "DONE") {
    //                     message.info(
    //                         `投票结果: ${
    //                             taskStore.taskPoll?.currentPollingStage.result
    //                                 ? "成功"
    //                                 : "失败"
    //                         }`
    //                     );
    //                 }
    //             }
    //         ),
    //     []
    // );

    return showPolling ? (
        <Card title={t("vote.questTitle")} size="small">
            {pendingOthers ? (
                <div>{t("vote.waiting")}</div>
            ) : (
                <>
                    <Row gutter={12} style={{ padding: "10px 0" }}>
                        {me?.side === "VILLAIN" && (
                            <Col span={12}>
                                <Button
                                    block
                                    size="large"
                                    danger
                                    onClick={() => handleVote(false)}
                                >
                                    {t("failed")}
                                </Button>
                            </Col>
                        )}
                        <Col span={me?.side === "VILLAIN" ? 12 : 24}>
                            <Button
                                block
                                size="large"
                                type="primary"
                                ghost
                                onClick={() => handleVote(true)}
                            >
                                {t("success")}
                            </Button>
                        </Col>
                    </Row>
                </>
            )}
        </Card>
    ) : null;
};
