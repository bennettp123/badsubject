FROM library/node:10-alpine

WORKDIR /code
COPY . /code

RUN npm install
CMD node --version; NODE_EXTRA_CA_CERTS=ca.crt node index.js

