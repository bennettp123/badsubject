FROM library/alpine:3.11

RUN apk add --no-cache \
  openssl

WORKDIR /tmp
COPY ca.crt .

CMD echo | openssl s_client -connect badsubject:443 -servername badsubject -CAfile ca.crt

