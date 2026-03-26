const express = require('express');
const os = require('os');
const app = express();

app.get('/', (req, res) => {
    const networkInterfaces = os.networkInterfaces();
    res.json(networkInterfaces);
});

app.listen(31248, '0.0.0.0', () => {
    console.log('Server is running on http://0.0.0.0:31248');
});
