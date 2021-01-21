FROM node:15-alpine
WORKDIR /app
COPY index.js package.json package-lock.json /app/
RUN \
  npm install
EXPOSE 3000
ENTRYPOINT ["/bin/sh"]
CMD ["-c", "npm run dev"]
