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

export default function InGame() {
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
                        <span>阿瓦隆 - </span>
                        {(() => {
                            switch (stage) {
                                case Stage.STARTED:
                                    return "游戏开始";
                                case Stage.ONGOING:
                                    return "游戏继续";
                                case Stage.ELECTION:
                                    return "投票车队";
                                case Stage.POLLING:
                                    return "投票任务";
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
                        <Collapse.Panel header="展示/隐藏 玩家信息" key="1">
                            <Card
                                size="small"
                                title={`${me?.playerName} - 你扮演的角色：${me?.name}`}
                            >
                                <div>你视野中的人</div>
                                <Space>
                                    {me?.visible.map((player) => (
                                        <div
                                            key={player.playerName}
                                            style={{ paddingTop: "5px" }}
                                        >
                                            <div>{player.playerName}</div>
                                            <div>
                                                {player.roleName ?? "未知"}
                                            </div>
                                        </div>
                                    ))}
                                </Space>
                            </Card>
                        </Collapse.Panel>
                        <Collapse.Panel header="投票区" key="2">
                            {(() => {
                                switch (stage) {
                                    case Stage.ELECTION:
                                        return <Election />;
                                    case Stage.POLLING:
                                        return <Polling />;
                                    default:
                                        return (
                                            <Card size="small">
                                                没有投票项目
                                            </Card>
                                        );
                                }
                            })()}
                        </Collapse.Panel>
                        <Collapse.Panel header="历史记录" key="3">
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
                                选择人员
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
                                结束游戏
                            </Button>
                        </Col>
                    </Row>
                </Footer>
            </GameLayout>
        </>
    );
}
