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

    const canStartGame =
        process.env.NODE_ENV === "development"
            ? true
            : players.length >= 6 && players.length <= 10;
    // players.length >= 6 && players.length <= 10;

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
                    <Col span={12}>
                        <Button
                            danger
                            ghost
                            size="large"
                            block
                            onClick={() => {
                                fetch("/api/end", {
                                    method: "POST",
                                });
                                router.push("/");
                            }}
                        >
                            重置
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Button
                            ghost
                            block
                            size="large"
                            // disabled={!roomStore.canStartGame}
                            disabled={!(inGame && canStartGame)}
                            type="primary"
                            onClick={handleStart}
                        >
                            {!canStartGame
                                ? "人数不正确"
                                : inGame
                                ? "开始游戏"
                                : "您还未加入"}
                        </Button>
                    </Col>
                </Row>
            </Footer>
        </GameLayout>
    );
}
