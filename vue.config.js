const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://digital-camera-server-demo.onrender.com',
        changeOrigin: true,
      },
    },
  },
});
