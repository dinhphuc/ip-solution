module.exports = {
  apps: [
    {
      name: 'ip-solution',
      script: 'app.js',
      watch: false,
      autorestart: true,
    },
    {
      name: 'ngrok',
      script: 'ngrok-runner.js',
      autorestart: true,
      windowsHide: true,
    }
  ]
};
