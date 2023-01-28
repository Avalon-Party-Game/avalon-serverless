import "./normalize.css";
import { ClientProvider } from "@/lib/apollo";
import StyledComponentsRegistry from "@/lib/registry";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body>
                <ClientProvider config={process.env.uri}>
                    <StyledComponentsRegistry>
                        {children}
                    </StyledComponentsRegistry>
                </ClientProvider>
            </body>
        </html>
    );
}
