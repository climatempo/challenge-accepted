printf "APP_NAME=Challenge\nAPP_ENV=local\nAPP_DEBUG=true\nAPP_URL=http://127.0.0.1:8000\nDB_CONNECTION=sqlite" > ".env"
touch database/challenge.sqlite
echo 'END'