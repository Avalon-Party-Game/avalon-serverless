"use client";
import { useObservable } from "react-use";
import { Layout, Modal, Button, Row, Col } from "antd";
import React from "react";
import { PlayerList } from "../player-list";
import { $wsStateSubject } from "@/graphql/client";
import { useRouter } from "next/navigation";

export const Header: React.FC<
    React.PropsWithChildren<{
        showLeave?: boolean;
        enablePlayerList?: boolean;
    }>
> = ({ children, showLeave = true, enablePlayerList = false }) => {
    const online = useObservable($wsStateSubject);
    const [showPlayerList, setShowPlayerList] = React.useState(false);

    const router = useRouter();

    const handleLeave = () => {
        Modal.confirm({
            content: "确定吗？",
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
                        状态：{online ? "在线" : "离线"}
                    </Col>
                    <Col span={12} style={{ textAlign: "center" }}>
                        {children}
                    </Col>
                    <Col span={6} style={{ textAlign: "right" }}>
                        {showLeave && (
                            <Button size="small" onClick={handleLeave}>
                                退出
                            </Button>
                        )}
                    </Col>
                </Row>
            </Layout.Header>
            <Modal
                open={showPlayerList}
                title="玩家列表"
                footer={null}
                onCancel={() => setShowPlayerList(false)}
            >
                <PlayerList />
            </Modal>
        </>
    );
};
