/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        appDir: true,
    },
    // i18n: {
    //     locales: ["en", "zh"],
    //     defaultLocale: "zh",
    // },
    webpack: (config) => {
        config.resolve.fallback = {
            "utf-8-validate": false,
            bufferutil: false,
            canvas: false,
            child_process: false,
            fs: false,
            net: false,
            perf_hooks: false,
            tls: false,
        };
        return config;
    },
};

module.exports = nextConfig;
