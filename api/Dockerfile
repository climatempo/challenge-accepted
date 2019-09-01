FROM composer:1.9.0
LABEL Author="mauricioribeiro1992@gmail.com"

RUN mkdir -p /opt/climatempo/api
RUN mkdir -p /opt/climatempo

ADD . /opt/climatempo/api
ADD base /opt/climatempo/base
WORKDIR /opt/climatempo/api

RUN composer install

EXPOSE 8000

CMD ["sh", "serve.sh"]