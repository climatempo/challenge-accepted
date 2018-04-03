<?php
$config['displayErrorDetails'] = LOCALHOST ? true : false;
$config['addContentLengthHeader'] = false;

//PHPErro :: personaliza o gatilho do PHP
function PHPErro($errNo, $errMsg, $errFile, $errLine) {
    $CssClass = ($errNo == E_USER_NOTICE ? ER_INFOR : ($errNo == E_USER_WARNING ? ER_ALERT : ($errNo == E_USER_ERROR ? ER_ERROR : $errNo)));
    echo "<p class=\"trigger {$CssClass}\">";
    echo "<b>Erro na Linha: #{$errLine} ::</b> {$errMsg}<br>";
    echo "<small>{$errFile}</small>";
    echo "<span class=\"ajax_close\"></span></p>";

    if ($errNo == E_USER_ERROR) {
        die;
    }
}

set_error_handler('PHPErro');

// AUTO LOAD DE CLASSES ####################
spl_autoload_register(function ($class) {

    $baseDir = ST_PATH;

    $file = $baseDir . str_replace("\\", DIRECTORY_SEPARATOR, $class) . ".php";

    if (file_exists($file) && is_readable($file)) {
        require_once($file);
    }
});
