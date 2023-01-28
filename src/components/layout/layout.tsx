// import merlin from "../../../assets/merlin.jpg";
// import percival from "../../../assets/percival.jpg";
// import modred from "../../../assets/modred.jpeg";
// "use client";
import React from "react";
import { ConfigProvider, Layout, theme } from "antd";
import styled from "styled-components";

const imgArr = ["/images/bg.jpg", "/images/avalon.jpg"];

const WrappedLayout = styled(Layout)<{ url: string }>`
    && {
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.75);
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: darken;
        background-image: url(${({ url }) => url});
    }
`;

// const pic = imgArr[Math.floor(Math.random() * imgArr.length)];
export const GameLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
            <WrappedLayout url={imgArr[0]}>{children}</WrappedLayout>
        </ConfigProvider>
    );
};
