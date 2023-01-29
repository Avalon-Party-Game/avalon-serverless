"use client";
import { useObservable } from "react-use";
import { Layout, Modal, Button, Row, Col, Select } from "antd";
import React from "react";
import { PlayerList } from "../player-list";
import { $wsStateSubject } from "@/graphql/client";
import { useRouter } from "next/navigation";
import i18n from "@/lib/i18n";
import Cookie from "js-cookie";
import { useTranslation } from "react-i18next";

export const Header: React.FC<
    React.PropsWithChildren<{
        showLeave?: boolean;
        enablePlayerList?: boolean;
        showLanguage?: boolean;
    }>
> = ({
    children,
    showLeave = true,
    enablePlayerList = false,
    showLanguage = false,
}) => {
    const online = useObservable($wsStateSubject);
    const [showPlayerList, setShowPlayerList] = React.useState(false);

    const { t } = useTranslation();
    const router = useRouter();

    const handleLeave = () => {
        Modal.confirm({
            content: t("confirm"),
            onOk: () => {
                fetch("/api/exit", {
                    method: "POST",
                    body: JSON.stringify({
                        playerName: sessionStorage.getItem("playerName"),
                    }),
                });
                router.push("/");
            },
        });
    };

    const handleChangeLanguage = (value: string) => {
        Cookie.set("lang", value);
        i18n.changeLanguage(value);
    };

    return (
        <>
            <Layout.Header
                style={{ padding: "0 20px", background: "rgba(0,0,0,0.5)" }}
            >
                <Row style={{ width: "100%" }}>
                    <Col
                        span={6}
                        style={{ textAlign: "left" }}
                        onClick={
                            enablePlayerList
                                ? () => setShowPlayerList(true)
                                : undefined
                        }
                    >
                        {t("status")}
                        {t("colon")}
                        {online ? t("online") : t("offline")}
                    </Col>
                    <Col span={12} style={{ textAlign: "center" }}>
                        {children}
                    </Col>
                    <Col span={6} style={{ textAlign: "right" }}>
                        {showLeave && (
                            <Button size="small" onClick={handleLeave}>
                                {t("exit")}
                            </Button>
                        )}
                        {showLanguage && (
                            <Select
                                value={i18n.language}
                                onChange={handleChangeLanguage}
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                <Select.Option key="en">
                                    {t("en")}
                                </Select.Option>
                                <Select.Option key="zh">
                                    {t("zh")}
                                </Select.Option>
                            </Select>
                        )}
                    </Col>
                </Row>
            </Layout.Header>
            <Modal
                open={showPlayerList}
                title={t("playerList")}
                footer={null}
                onCancel={() => setShowPlayerList(false)}
            >
                <PlayerList />
            </Modal>
        </>
    );
};
