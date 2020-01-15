# badsubject

Reproduce nodejs treatment of certs with an empty subject using docker-compose
for fun and profit!

The purpose of this is to reproduce a recent outage, and see if it still
happens in nodejs 12.x.

# usage

```
docker-compose up
```

Creates the following containers:

* `badsubject` runs an HTTPS server with a cert with an empty subject
* `nodejs_10_client` attempts to connect to `badsubject` with nodejs 10.x
* `nodejs_12_client` attempts to connect to `badsubject` with nodejs 12.x
* `openssl_client` attempts to connect to `badsubject` with `openssl s_client`

