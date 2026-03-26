start /B node app.js
ngrok http --url=touching-normal-anchovy.ngrok-free.app 31248
taskkill /F /IM node.exe > nul 2>&1