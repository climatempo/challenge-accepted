FROM debian:latest
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y software-properties-common python
RUN apt-get install curl -y && curl -sSL https://deb.nodesource.com/setup_10.x | sh
RUN apt-get install -y nodejs && apt-get install -y build-essential
RUN mkdir -p /var/www/api
RUN apt-get clean && apt-get autoremove
