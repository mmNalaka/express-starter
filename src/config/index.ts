export type AppConfig = typeof appConfig;
export type ConfigKey = keyof AppConfig;

export const appConfig = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_EVN || "development",
  env: process.env.APP_ENV || "DEV",
  baseUrl: process.env.BASE_URL || "http://localhost",

  postgres: {
    url: process.env.POSTGRES_CONN_URL || "",
  },

  redis: {
    url: "",
  },
} as const;
