FROM node:10.16.3-alpine
LABEL Author="mauricioribeiro1992@gmail.com"

RUN mkdir -p /opt/climatempo/web

ADD . /opt/climatempo/web
WORKDIR /opt/climatempo/web

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "serve"]