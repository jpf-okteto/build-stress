# Dockerfile
FROM ubuntu:24.04

RUN apt-get update && apt-get install -y \
    git build-essential python3 curl gnupg pkg-config \
    && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/brave/brave-core.git /src/brave
WORKDIR /src/brave

RUN ./build/brave/scripts/clean.sh || true
RUN npm install
RUN npm run build
