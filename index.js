const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config()

const app = express();

const options = {
  target: process.env.PROXY_TARGET,
  changeOrigin: true
}
if ( process.env.STRICT_SSL == 'false' ) { options.secure = false };
if ( process.env.CORS_ORIGIN !== undefined ) {
  options.onProxyRes = (proxyRes) => {
    proxyRes.headers['Access-Control-Allow-Origin'] = process.env.CORS_ORIGIN;
  };
}

app.use('/', createProxyMiddleware(options));
app.listen(process.env.PORT || 3000);
