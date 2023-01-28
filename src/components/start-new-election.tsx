"use client";
import React from "react";
import { Checkbox, Col, Form, message, Modal, Row } from "antd";
import { usePlayers, useRoom } from "@/state/context";
// import { observer } from "mobx-react";
// import { roomStore } from "../store/room";
// import { useSocketClient } from "../lib/socket";

interface IProps {
    visible: boolean;
    onClose: () => void;
}

export const StartNewElection = (props: IProps) => {
    const [form] = Form.useForm<{ players: string[] }>();
    const room = useRoom();
    // const socketClinet = useSocketClient();

    // const handleSubmit = React.useCallback(async () => {
    //     const { players } = await form.validateFields();
    //     if (players.length) {
    //         socketClinet.socket.emit("startNewElection", players);
    //         props.onClose();
    //         form.resetFields(["players"]);
    //     } else {
    //         message.error("选择为空");
    //     }
    // }, [form, props, socketClinet.socket]);

    const handleSubmit = async () => {
        const { players } = await form.validateFields();
        if (players.length) {
            fetch("/api/task/create", {
                method: "POST",
                body: JSON.stringify({ playerNames: players }),
            });
            props.onClose();
        }
    };

    return (
        <Modal
            title="选择执行任务的人"
            open={props.visible}
            onCancel={props.onClose}
            onOk={handleSubmit}
        >
            <Form form={form}>
                <Form.Item name="players">
                    <Checkbox.Group style={{ width: "100%" }}>
                        <Row>
                            {room.players.map(({ playerName: name }) => (
                                <Col key={name} span={12}>
                                    <Checkbox value={name}>{name}</Checkbox>
                                </Col>
                            ))}
                        </Row>
                    </Checkbox.Group>
                </Form.Item>
            </Form>
        </Modal>
    );
};
