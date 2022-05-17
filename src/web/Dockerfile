FROM ubuntu:22.04
RUN apt-get update && apt-get install -y nodejs npm
WORKDIR /web_app
COPY http_server.js .
ENTRYPOINT ["node", "http_server.js"]
# EXPOSE 3000