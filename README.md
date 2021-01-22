reverse-proxy
=============

An extremely basic reverse HTTP proxy.

Usage
-----

    docker run --rm \
      -e PROXY_TARGET="https://api.example.com/" \
      -e STRICT_SSL=false \  # In case of self-signed certs
      -e CORS_ORIGIN="http://localhost:3001" \
      -p 3000:3000 \
      --name my-proxy reverse-proxy
