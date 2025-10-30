FROM node:20

RUN yarn install

RUN NODE_OPTIONS="--max-old-space-size=8192" yarn build

CMD [tail, -f, /dev/null]
