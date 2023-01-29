import "./normalize.css";
import { ClientProvider } from "@/lib/apollo";
import StyledComponentsRegistry from "@/lib/registry";
import { TranslateProvider } from "@/lib/i18n";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { headers, cookies } from "next/headers";

const useServerLocale = () => {
    const headersList = headers();
    const cookiesList = cookies();
    const cookieLang = cookiesList.get("lang")?.value;

    const headerLang = new Negotiator({
        headers: Object.fromEntries(headersList.entries()),
    }).languages();
    const locales = ["en", "zh"];
    const defaultLocale = "zh";
    const locale =
        cookieLang && locales.includes(cookieLang)
            ? cookieLang
            : match(headerLang, locales, defaultLocale);
    return locale;
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = useServerLocale();
    return (
        <html lang={locale}>
            <head />
            <body>
                <TranslateProvider lang={useServerLocale()}>
                    <ClientProvider config={process.env.uri}>
                        <StyledComponentsRegistry>
                            {children}
                        </StyledComponentsRegistry>
                    </ClientProvider>
                </TranslateProvider>
            </body>
        </html>
    );
}
