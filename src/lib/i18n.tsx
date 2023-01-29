"use client";
import i18n from "i18next";
import { FC, PropsWithChildren } from "react";
import { initReactI18next, I18nextProvider } from "react-i18next";
import en from "@/i18n/en.json";
import zh from "@/i18n/zh.json";

const defaultNS = "translation" as const;
const resources = {
    en: { translation: en },
    zh: { translation: zh },
} as const;

i18n.use(initReactI18next).init({
    defaultNS,
    resources,
});

declare module "i18next" {
    type DefaultResources = typeof resources["en"] & typeof resources["zh"];

    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: DefaultResources;
    }
}

export const TranslateProvider: FC<PropsWithChildren<{ lang?: string }>> = ({
    children,
    lang,
}) => {
    i18n.changeLanguage(lang ?? "zh");

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default i18n;
