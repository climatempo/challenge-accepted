#!/usr/bin/env bash

# Web server configuration
#
# @package Vagrant
# @author Wolmer Pinto <wolmerwap@gmail.com>

# Update repositories
sudo yum -y update

# Fix locale error message
sudo localedef -f UTF-8 -i pt_BR pt_BR.UTF-8

# Install dependencies
sudo yum install -y yum-utils
sudo yum install -y expect
sudo yum install -y unzip
sudo yum install -y wget
sudo yum install -y git
sudo yum install -y zip

# Install and start NGINX
sudo yum install -y epel-release
sudo yum install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
echo '
server {
    listen 80;
    server_name 192.168.10.10 climatempo.local www.climatempo.local;

    root /var/www/climatempo/public;
    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
' | sudo tee --append /etc/nginx/conf.d/default.conf > /dev/null

# Install, configure and start MySQL
sudo yum install -y mariadb-server mariadb
sudo systemctl start mariadb
expect -c "
    spawn sudo mysql_secure_installation
    expect \"*(enter for none):\"
    send \"\r\"
    expect \"*Set root password?*\"
    send \"Y\r\"
    expect \"*New password:\"
    send \"root\r\"
    expect \"*new password:\"
    send \"root\r\"
    expect \"*Remove anonymous users?*\"
    send \"Y\r\"
    expect \"*Disallow root login remotely?*\"
    send \"n\r\"
    expect \"*Remove test database and access to it?*\"
    send \"Y\r\"
    expect \"*Reload privilege tables now?*\"
    send \"Y\r\"
    expect eof
"

sudo systemctl enable mariadb

# Install, configure and start PHP
sudo yum install -y http://rpms.remirepo.net/enterprise/remi-release-7.rpm
sudo yum-config-manager --enable remi-php72
sudo yum install -y php php-fpm php-mbstring php-gd php-cli php-ldap php-json \
    php-xml php-xmlrpc php-pecl-apcu php-pear-Net-Curl php-pear-Net-IMAP \
    php-imap php-pecl-apcu-devel php-pear-MDB2-Driver-mysqli php-phpiredis \
    php-mysqlnd php-opcache php-pecl-zendopcache php-pear-CAS php-zip
sudo perl -pi -w -e "s/;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/g;" /etc/php.ini
sudo perl -pi -w -e "s/user = apache/user = vagrant/g;" /etc/php-fpm.d/www.conf
sudo perl -pi -w -e "s/group = apache/group = vagrant/g;" /etc/php-fpm.d/www.conf
sudo perl -pi -w -e "s/;listen.owner = nobody/listen.owner = nobody/g;" /etc/php-fpm.d/www.conf
sudo perl -pi -w -e "s/;listen.group = nobody/listen.group = nobody/g;" /etc/php-fpm.d/www.conf
sudo systemctl start php-fpm
sudo systemctl enable php-fpm

# Fix problem with permissions on shared folder
sudo perl -pi -w -e "s/SELINUX=enforcing/SELINUX=disabled/g;" /etc/selinux/config

# Restarting applications
sudo systemctl restart nginx
sudo systemctl restart mariadb
sudo systemctl restart php-fpm

# Install and enable Composer
wget https://getcomposer.org/composer.phar
chmod +x composer.phar
sudo mv composer.phar /usr/local/bin/composer

# Fineshed instalation
echo 'Fineshed Instalation System!'