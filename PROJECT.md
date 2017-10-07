Como rodar o app

é necessário instalar globalmente o cordova

    npm install -g cordova
    
Se você quiser debugar o app no navegador voce pode rodar um servidor 

    cd challenge-accepted/www
    php -S localhost:9000
    
e acessar o endereço localhost:9000 para visualizar o app em seu navegador

para executar o app em seu android voce primeiro deve habilitar seu smartphone
em modo desenvolvedor, depois disso execute:

    cordova run android
    
