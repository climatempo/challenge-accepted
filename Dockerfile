FROM richarvey/nginx-php-fpm

EXPOSE 80

COPY nginx/default.conf /etc/nginx/sites-enabled/default

RUN mkdir /var/www/html/climatempo/ 

ADD . /var/www/html/climatempo/

RUN composer install --working-dir=/var/www/html/climatempo

ENTRYPOINT ["/start.sh"]
CMD ["/bin/sh"]
