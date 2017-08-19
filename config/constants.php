<?php
define("LOCALHOST", preg_match("/localhost|[0-9]{1,3}+.[0-9]{1,3}+.[0-9]{1,3}+.[0-9]{1,3}/i", $_SERVER["HTTP_HOST"]) ? true : false, true);
define("ST_DOMAIN", $_SERVER["HTTP_HOST"], true);
define("ST_PROTOCOL", (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on' ) ? "https" : "http", true);
define("ST_URL", ST_PROTOCOL . "://" . ST_DOMAIN, true);

// Constantes de caminho
define("ST_PATH", str_replace("config", "", __DIR__), true);
