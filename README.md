# badsubject

Reproduce nodejs treatment of certs with an empty subject using docker-compose
for fun and profit!

This docker-compose stack creates a server with an empty subject, and three
clients with the bad certificate in its trust store, which attempt to connect
to the server.

The openssl client is typically able to connect without any problem, because
apart from the empty subject, the certificate is otherwise valid.

NodeJS is typically unable to connect due to [nodejs#11771]
(https://github.com/nodejs/node/issues/11771), which fails with error message
`Cert is empty`.

The purpose of this is to reproduce a recent Gigya outage, to see if it still
happens in various versions of nodejs.


# usage

```
docker-compose up
```

Creates the following containers:

* `badsubject` runs an HTTPS server with a cert with an empty subject
* `nodejs_10_client` attempts to connect to `badsubject` with nodejs 10.x
* `nodejs_12_client` attempts to connect to `badsubject` with nodejs 12.x
* `nodejs_latest_client` attempts to connect to `badsubject` with whatever
  happens to be the latest version of nodejs
* `openssl_client` attempts to connect to `badsubject` with `openssl s_client`

