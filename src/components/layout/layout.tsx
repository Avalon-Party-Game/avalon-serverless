// import merlin from "../../../assets/merlin.jpg";
// import percival from "../../../assets/percival.jpg";
// import modred from "../../../assets/modred.jpeg";
// "use client";
import React from "react";
import { ConfigProvider, Layout, theme } from "antd";

const imgArr = ["/images/bg.jpg", "/images/avalon.jpg"];

export const GameLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    const pic = React.useMemo(
        // () => imgArr[Math.floor(Math.random() * imgArr.length)],
        () => imgArr[0],
        []
    );
    return (
        <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
            <Layout
                style={{
                    height: "100vh",
                    backgroundColor: "rgba(0,0,0,0.75)",
                    backgroundImage: `url(${pic})`,
                    backgroundPosition: "center bottom",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundBlendMode: "darken",
                }}
            >
                {children}
            </Layout>
        </ConfigProvider>
    );
};
