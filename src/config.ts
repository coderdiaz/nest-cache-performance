export type Config = {
  port: number;
};

export default () => ({
  port: process.env.PORT || 3000,
  newsApiUrl: process.env.NEWS_API_URL,
  newsApiKey: process.env.NEWS_API_KEY,
} as Config);
