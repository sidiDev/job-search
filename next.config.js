const withPWA = require("next-pwa");

module.exports = {
    env: {
        API: process.env.API
    }
}

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});