const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config()

const app = express();

const allowed_origins = process.env.CORS_ORIGIN.split(',').map(i => i.trim(' '));

const options = {
  target: process.env.PROXY_TARGET,
  changeOrigin: true
}
if ( process.env.STRICT_SSL == 'false' ) { options.secure = false };
if ( allowed_origins ) {
  options.onProxyRes = (proxyRes, req, res) => {
    if ( allowed_origins.includes(req.headers.origin) ) {
      proxyRes.headers['Access-Control-Allow-Origin'] = req.headers.origin;
    }
  };
}

app.use('/', createProxyMiddleware(options));
app.listen(process.env.PORT || 3000);
