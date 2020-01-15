FROM library/nginx:alpine

RUN apk add --no-cache \
    openssl

WORKDIR /code
COPY . /code

RUN cp -f badsubject.key /etc/ssl/private/badsubject.key
RUN cp -f badsubject.bundle.crt /etc/ssl/badsubject.crt

COPY nginx.conf /etc/nginx/conf.d/default.conf


