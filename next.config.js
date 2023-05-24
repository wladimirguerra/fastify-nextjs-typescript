"use strict"

module.exports = async function config(phase, { defaultConfig }) {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        /* config options here */
        typescript: {
            tsconfigPath: "next.tsconfig.json",
        },
    };
    return { ...defaultConfig, ...nextConfig };
}
