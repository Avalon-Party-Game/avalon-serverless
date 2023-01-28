"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { createCache, StyleProvider, extractStyle } from "@ant-design/cssinjs";
import { JSDOM } from "jsdom";

const jsDom = new JSDOM();

export default function StyledComponentsRegistry({
    children,
}: {
    children: React.ReactNode;
}) {
    // Only create stylesheet once with lazy initial state
    // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
    const [cache] = useState(() => createCache());

    const render = <StyleProvider cache={cache}>{children}</StyleProvider>;

    useServerInsertedHTML(() => {
        const text = extractStyle(cache);
        const domwindow = typeof window === "undefined" ? jsDom.window : window;
        const dom = new domwindow.DOMParser().parseFromString(
            text,
            "text/html"
        );
        const elements = Array.from(dom.getElementsByTagName("style")).map(
            ({ textContent }) => (
                <style
                    dangerouslySetInnerHTML={{ __html: textContent ?? "" }}
                ></style>
            )
        );
        return elements;
    });

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        (styledComponentsStyleSheet.instance as any).clearTag();
        return <>{styles}</>;
    });

    if (typeof window !== "undefined") return <>{children}</>;

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            {render}
        </StyleSheetManager>
    );
}
