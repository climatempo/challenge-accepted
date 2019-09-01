FROM composer:1.9.0
LABEL Author="mauricioribeiro1992@gmail.com"

RUN mkdir -p /opt/climatempo/api

ADD . /opt/climatempo/api
WORKDIR /opt/climatempo/api

RUN composer install

EXPOSE 8000

RUN chmod +x /opt/climatempo/api/serve.sh
CMD ["/opt/climatempo/api/serve.sh"]