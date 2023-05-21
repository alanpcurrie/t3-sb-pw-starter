const {
  createVanillaExtractPlugin
} = await import('@vanilla-extract/next-plugin');


// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));



const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
export default withVanillaExtract(config);
