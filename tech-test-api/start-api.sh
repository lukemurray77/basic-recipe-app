#!/usr/bin/env bash

docker run \
       -p 8088:8088 \
       -v $(pwd)/tech-test-api:/app \
       openjdk:8u131-jre-alpine \
       java -jar /app/srch-standalone.jar
