require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');

// 앱 초기화
const app = express();
const port = process.env.SERVER_PORT || 3000; // env 설정 없으면 포트 번호는 3000
const webServer = http.createServer(app);

// static directory
app.use(express.static(path.join(__dirname, "../dist")));

// Server Listen
webServer.listen(port, () => {
    console.log(`http://localhost:${port}`, port);
});