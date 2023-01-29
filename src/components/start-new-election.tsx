"use client";
import React from "react";
import { Checkbox, Col, Form, message, Modal, Row } from "antd";
import { useRoom } from "@/state/context";
import { useTranslation } from "react-i18next";

interface IProps {
    visible: boolean;
    onClose: () => void;
}

export const StartNewElection = (props: IProps) => {
    const {t} = useTranslation()
    const [form] = Form.useForm<{ players: string[] }>();
    const room = useRoom();

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
            title={t('vote.buildTeam')}
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
