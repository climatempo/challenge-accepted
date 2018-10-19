#!/usr/bin/env bash

# Project configuration
#
# @package Vagrant
# @author Wolmer Pinto <wolmerwap@gmail.com>

# Project configuration
cd /var/www/climatempo
/usr/local/bin/composer install
php artisan key:generate
php artisan queue:restart
php artisan config:clear
php artisan config:cache

# Database configuration
expect -c "
    spawn mysql -u root -p
    expect \"*Enter password:\"
    send \"root\r\"
    expect \"*]>*\"
    send \"CREATE DATABASE IF NOT EXISTS challenge;\r\"
    expect \"*]>*\"
    send \"quit\r\"
    expect eof
"
php artisan migrate:install
php artisan migrate --seed

# Restarting server
sudo systemctl restart nginx
sudo systemctl restart mariadb
sudo systemctl restart php-fpm

# Fineshed instalation
echo 'Fineshed Configuration Project!'