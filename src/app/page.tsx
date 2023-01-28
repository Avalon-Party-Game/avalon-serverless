"use client";
import React, { useEffect } from "react";
import { Form, Input, Layout, Button, Typography } from "antd";
import { Header } from "@/components/layout/header";
import { GameLayout } from "@/components/layout/layout";
import { Footer } from "@/components/layout/footer";
import { useRouter } from "next/navigation";
import { usePlayers, useSessionPlayerName, useStage } from "@/state/context";
import { Stage } from "@/lib/stage";

const { Title } = Typography;

interface IFormValue {
    name: string;
    room: string;
}

export default function Welcome() {
    const [form] = Form.useForm<IFormValue>();
    const router = useRouter();
    const stage = useStage();
    const players = usePlayers();

    const handleSubmit = async (value: IFormValue) => {
        sessionStorage.setItem("playerName", value.name);

        await fetch("/api/join", {
            method: "POST",
            body: JSON.stringify({ playerName: value.name }),
        });
    };

    const sessionPlayerName = useSessionPlayerName();

    useEffect(() => {
        if (
            stage === Stage.WAITING &&
            players.some(({ playerName }) => playerName === sessionPlayerName)
        ) {
            router.push("/waiting");
        }
    }, [stage, players]);

    return (
        <GameLayout>
            <Header showLeave={false} enablePlayerList>
                <div>阿瓦隆</div>
            </Header>
            <Layout.Content style={{ position: "relative" }}>
                <Form
                    form={form}
                    initialValues={{ name: sessionPlayerName }}
                    style={{ padding: "30px" }}
                    onFinish={handleSubmit}
                >
                    <Form.Item name="name" label="你的名字" required>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="room"
                        label="Room"
                        initialValue="testRoom"
                        hidden
                    >
                        <Input />
                    </Form.Item>
                </Form>
                <section
                    style={{
                        position: "absolute",
                        width: "100%",
                        textAlign: "center",
                        overflow: "hidden",
                        left: 0,
                        top: "calc(50% - 30px)",
                    }}
                >
                    <Title
                        style={{
                            fontWeight: 100,
                            color: "#b9b9b9",
                            letterSpacing: "20px",
                            marginRight: "-20px",
                            transform: "scaleY(0.8)",
                        }}
                    >
                        AVALON
                    </Title>
                </section>
            </Layout.Content>
            <Footer>
                <Button
                    block
                    ghost
                    size="large"
                    type="primary"
                    onClick={form.submit}
                >
                    加入游戏
                </Button>
            </Footer>
        </GameLayout>
    );
}
