FROM postgres:17-alpine

RUN apk add --no-cache tzdata
ENV TZ=Asia/Seoul

COPY ./init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432