const { defineConfig } = require('@vue/cli-service');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: process.env.BACKEND_URL,
        changeOrigin: true,
      },
    },
  },
});
