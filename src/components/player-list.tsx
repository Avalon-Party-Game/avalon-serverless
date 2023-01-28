"use client";
import DisconnectOutlined from "@ant-design/icons/DisconnectOutlined";
import React from "react";
import UserDeleteOutlined from "@ant-design/icons/UserDeleteOutlined";
import WifiOutlined from "@ant-design/icons/WifiOutlined";
import { Button, List } from "antd";
import { usePlayers } from "@/state/context";

interface IProps {
    onKickPlayer?: (name: string) => void;
}

export const PlayerList: React.FC<IProps> = ({ onKickPlayer }) => {
    const players = usePlayers();
    return (
        <List
            bordered
            dataSource={players ?? []}
            renderItem={(player) => (
                <List.Item
                    extra={
                        onKickPlayer ? (
                            <Button
                                icon={
                                    <UserDeleteOutlined
                                        onClick={() =>
                                            onKickPlayer(player.playerName)
                                        }
                                    />
                                }
                            />
                        ) : undefined
                    }
                >
                    <span>
                        {player.connected ? (
                            <WifiOutlined />
                        ) : (
                            <DisconnectOutlined />
                        )}{" "}
                        {player.playerName}
                    </span>
                </List.Item>
            )}
        />
    );
};
