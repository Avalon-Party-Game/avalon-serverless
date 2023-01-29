"use client";
import React from "react";
import { Button, Card, Col, Collapse, Layout, Row, Space } from "antd";
import { Election } from "@/components/election";
import { Polling } from "@/components/polling";
import { StartNewElection } from "@/components/start-new-election";
import { TaskHistory } from "@/components/history";
import { Header } from "@/components/layout/header";
import { GameLayout } from "@/components/layout/layout";
import { Footer } from "@/components/layout/footer";
import { Stage } from "@/lib/stage";
import { useRouter } from "next/navigation";
import { useMe, useStage } from "@/state/context";
import { updateActivePanel, useActivePanel } from "@/state/panel";
import { useTranslation } from "react-i18next";

export default function InGame() {
    const { t } = useTranslation();
    const router = useRouter();
    const [showElection, setShowElection] = React.useState(false);
    const stage = useStage();
    const me = useMe();

    const handleEndGame = () => {
        fetch("/api/end", {
            method: "POST",
            body: JSON.stringify({ stage: Stage.WAITING }),
        });
    };

    React.useEffect(() => {
        if (stage === Stage.WAITING) {
            router.push("/");
        }
    }, [stage]);

    return (
        <>
            <StartNewElection
                visible={showElection}
                onClose={() => setShowElection(false)}
            />
            <GameLayout>
                <Header enablePlayerList showLeave={false}>
                    <div>
                        <span>{t("avalon")} - </span>
                        {(() => {
                            switch (stage) {
                                case Stage.STARTED:
                                    return t("ingame.STARTED");
                                case Stage.ONGOING:
                                    return t("ingame.ONGOING");
                                case Stage.ELECTION:
                                    return t("ingame.ELECTION");
                                case Stage.POLLING:
                                    return t("ingame.POLLING");
                            }
                        })()}
                    </div>
                </Header>
                <Layout.Content
                    style={{ overflow: "auto", paddingBottom: "40px" }}
                >
                    <Collapse
                        activeKey={useActivePanel()}
                        onChange={updateActivePanel}
                        ghost
                    >
                        <Collapse.Panel header={t("ingame.playerInfo")} key="1">
                            <Card
                                size="small"
                                title={
                                    me
                                        ? `${me.playerName} - ${t(
                                              "ingame.yourRole"
                                          )}${t("colon")}${t(
                                              `ingame.${me.type}`
                                          )}`
                                        : "--"
                                }
                            >
                                <div>{t("ingame.visible")}</div>
                                <Space>
                                    {me?.visible.map((player) => (
                                        <div
                                            key={player.playerName}
                                            style={{ paddingTop: "5px" }}
                                        >
                                            <div>{player.playerName}</div>
                                            <div>
                                                {player.type
                                                    ? t(`ingame.${player.type}`)
                                                    : player.side
                                                    ? t(`ingame.${player.side}`)
                                                    : t("ingame.UNKNOWN")}
                                            </div>
                                        </div>
                                    ))}
                                </Space>
                            </Card>
                        </Collapse.Panel>
                        <Collapse.Panel header={t("vote.aera")} key="2">
                            {(() => {
                                switch (stage) {
                                    case Stage.ELECTION:
                                        return <Election />;
                                    case Stage.POLLING:
                                        return <Polling />;
                                    default:
                                        return (
                                            <Card size="small">
                                                {t("vote.empty")}
                                            </Card>
                                        );
                                }
                            })()}
                        </Collapse.Panel>
                        <Collapse.Panel header={t("vote.history")} key="3">
                            <TaskHistory />
                        </Collapse.Panel>
                    </Collapse>
                </Layout.Content>
                <Footer>
                    <Row gutter={12}>
                        <Col span={12}>
                            <Button
                                block
                                ghost
                                size="large"
                                type="primary"
                                disabled={
                                    stage === Stage.ELECTION ||
                                    stage === Stage.POLLING
                                }
                                onClick={() => setShowElection(true)}
                            >
                                {t("vote.select")}
                            </Button>
                        </Col>
                        <Col span={12}>
                            <Button
                                block
                                ghost
                                size="large"
                                danger
                                onClick={handleEndGame}
                            >
                                {t("vote.end")}
                            </Button>
                        </Col>
                    </Row>
                </Footer>
            </GameLayout>
        </>
    );
}
