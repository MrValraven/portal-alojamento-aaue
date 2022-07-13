const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();

const withEnv = nextEnv();

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["img3.idealista.pt"],
  },
};
