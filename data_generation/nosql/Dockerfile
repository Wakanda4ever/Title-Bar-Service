FROM cassandra:latest

RUN mkdir -p /docker/app/dataset
WORKDIR /docker/app

COPY ./dataset/business.json /docker/app/dataset/business.json
COPY ./create-keyspace.cql /docker/app/create-keyspace.cql
COPY ./seed-business.js /docker/app/seed-business.js
