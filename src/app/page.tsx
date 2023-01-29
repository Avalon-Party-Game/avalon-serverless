"use client";
import React, { useEffect } from "react";
import { Form, Input, Layout, Button, Typography } from "antd";
import { Header } from "@/components/layout/header";
import { GameLayout } from "@/components/layout/layout";
import { Footer } from "@/components/layout/footer";
import { useRouter } from "next/navigation";
import { usePlayers, useSessionPlayerName, useStage } from "@/state/context";
import { Stage } from "@/lib/stage";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

interface IFormValue {
    name: string;
    room: string;
}

const Warpper = styled.section<{ title: string }>`
    position: absolute;
    width: 100%;
    text-align: center;
    overflow: hidden;
    left: 0;
    top: calc(50% - 30px);

    .title {
        font-weight: 100;
        color: white;
        letter-spacing: 20px;
        margin-right: -20px;
        transform: scaleY(0.8);

        &::after {
            content: "${(props) => props.title}";
            color: white;
            display: block;
            filter: blur(2px) brightness(2);
            transform: rotatex(180deg) translateY(10px);
            mask-image: repeating-linear-gradient(
                    transparent,
                    transparent 3px,
                    white 3px,
                    white 4px
                ),
                linear-gradient(transparent 50%, white 90%);
        }
    }
`;

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

    const { t } = useTranslation("translation");

    return (
        <GameLayout>
            <Header showLeave={false} enablePlayerList showLanguage>
                <div>{t("avalon")}</div>
            </Header>
            <Layout.Content style={{ position: "relative" }}>
                <Form
                    form={form}
                    initialValues={{ name: sessionPlayerName }}
                    style={{ padding: "30px" }}
                    onFinish={handleSubmit}
                >
                    <Form.Item name="name" label={t("yourName")} required>
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
                <Warpper title={t("avalon")}>
                    <Title className="title">{t("avalon")}</Title>
                </Warpper>
            </Layout.Content>
            <Footer>
                <Button
                    block
                    ghost
                    size="large"
                    type="primary"
                    onClick={form.submit}
                >
                    {t("join")}
                </Button>
            </Footer>
        </GameLayout>
    );
}
