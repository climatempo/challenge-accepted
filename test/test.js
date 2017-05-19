/**
 * Created by diegohideky on 2/11/17.
 */
const router = require("../src/routes/index.js");
const http = require("http");
const assert = require('assert');

describe("confianopai", function() {
    describe("request", function() {
        it('Fazendo Teste', function() {
            http.get({
                hostname: 'localhost',
                port: 3000,
                path: '/',
                agent: false,
            }, (err,res) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log(res);
                }
            });
        });
    });
});