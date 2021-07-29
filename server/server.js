require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');

// 앱 초기화
const app = express();
const port = process.env.SERVER_PORT || 3000; // env 설정 없으면 포트 번호는 3000
const webServer = http.createServer(app);

// static directory
app.use(express.static(path.join(__dirname, "../dist")));

// Vue SSR
const { createBundleRenderer } = require('vue-server-renderer');
const template = fs.readFileSync(path.join(__dirname, 'index.template.html'), 'utf-8');
const serverBundle = require(path.join(__dirname, "../dist/vue-ssr-server-bundle.json"));
const clientManifest = require(path.join(__dirname, "../dist/vue-ssr-client-manifest.json"));

// Renderer
const renderer = createBundleRenderer(serverBundle, {
    runInNewContext : false,
    template,
    clientManifest
});

app.get('*', (req, res) => {
    console.log('server.js * router')
    const ctx = {
        url : req.url,
        title : "Vue SSR App",
        metas : `<!-- inject more metas -->`
    };

    const stream = renderer.renderToStream(ctx);
    stream.on('end', () => {
        console.log('스트림 랜더 종료');
    }).pipe(res);
});

// Server Listen
webServer.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

