const { spawn } = require('child_process');

const ngrok = spawn('ngrok', ['http', '--url=touching-normal-anchovy.ngrok-free.app', '31248'], {
  windowsHide: true,
  stdio: 'inherit',
});

ngrok.on('exit', (code) => process.exit(code));
