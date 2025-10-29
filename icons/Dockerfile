FROM node:22-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src ./src
RUN npm run build

EXPOSE 80
CMD ["npx", "http-server", "dist", "-p", "80"]
