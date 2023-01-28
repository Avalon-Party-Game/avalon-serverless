'use client'
import { Layout } from "antd";

export const Footer: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Layout.Footer
            style={{ padding: "20px", background: "rgba(0,0,0,0.5)" }}
        >
            {children}
        </Layout.Footer>
    );
};
