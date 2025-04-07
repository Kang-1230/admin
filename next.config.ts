import type { NextConfig } from "next";
import type { Configuration as WebpackConfig, RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  // ✅ Turbopack 전용 설정 추가
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js"
        }
      }
    }
  },

  // ✅ Webpack 전용 설정
  webpack(config: WebpackConfig) {
    const fileLoaderRule = config.module?.rules?.find(
      rule =>
        typeof rule === "object" &&
        rule !== null &&
        "test" in rule &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg")
    ) as RuleSetRule;

    if (fileLoaderRule) {
      config.module?.rules?.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/ // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] }, // *.svg?url 제외
          use: ["@svgr/webpack"]
        }
      );

      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  }
};

export default nextConfig;
