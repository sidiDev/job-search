const withPWA = require("next-pwa");
const runtimeCaching = require('next-pwa/cache')

// module.exports = {
//     env: {
//         API: process.env.API
//     },
// }

module.exports = withPWA({
  pwa: {
    // dest: "public",
    register: true,
    runtimeCaching,
    sw: '/sw.js'
  },
});