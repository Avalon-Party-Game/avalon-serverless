"use client";

import React, { useEffect, useMemo } from "react";
import { Button, Col, Layout, Row } from "antd";
import { Header } from "@/components/layout/header";
import { GameLayout } from "@/components/layout/layout";
import { Footer } from "@/components/layout/footer";
import { PlayerList } from "@/components/player-list";
import { useRouter } from "next/navigation";
import { Stage } from "@/lib/stage";
import { usePlayers, useSessionPlayerName, useStage } from "@/state/context";

export default function WaitingRoom() {
    const stage = useStage();
    const router = useRouter();
    const players = usePlayers();

    const handleStart = () => {
        fetch("/api/start", {
            method: "POST",
        });
    };

    const handleKickPlayer = (playerName: string) => {
        fetch("/api/exit", {
            method: "POST",
            body: JSON.stringify({ playerName }),
        });
    };

    useEffect(() => {
        if (
            stage === Stage.STARTED ||
            stage === Stage.ONGOING ||
            stage === Stage.ELECTION ||
            stage === Stage.POLLING
        ) {
            router.push("/in-game");
        }
    }, [stage]);

    const sessionPlayerName = useSessionPlayerName();

    const inGame = useMemo(
        () =>
            players.some(({ playerName }) => playerName === sessionPlayerName),
        [players]
    );

    return (
        <GameLayout>
            <Header>
                <div>阿瓦隆 - 等待玩家</div>
            </Header>
            <Layout.Content style={{ padding: "30px" }}>
                <PlayerList onKickPlayer={handleKickPlayer} />
            </Layout.Content>
            <Footer>
                <Row gutter={12}>
                    {/* <Col span={12}>
                        <Button
                            ghost
                            danger
                            size="large"
                            block
                            // onClick={handleKickOffline}
                        >
                            清除不在线玩家
                        </Button>
                    </Col> */}
                    <Col span={24}>
                        <Button
                            ghost
                            size="large"
                            // disabled={!roomStore.canStartGame}
                            disabled={!inGame}
                            type="primary"
                            style={{ width: "100%" }}
                            onClick={handleStart}
                        >
                            {inGame ? "开始游戏" : "您还未加入"}
                        </Button>
                    </Col>
                </Row>
            </Footer>
        </GameLayout>
    );
}
