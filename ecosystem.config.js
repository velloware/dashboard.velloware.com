module.exports = {
  apps: [
    {
      name: 'Velloware Dash Server',
      script: './dist/server.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
