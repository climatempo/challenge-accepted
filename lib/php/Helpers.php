<?php
namespace lib\php;

/**
 * @name Helpers
 * @type abstract Classe abstrata
 * @package Helpers
 * @description Classe de auxilio.
 */
abstract class Helpers
{
    /**
     * ValorArray - Método responsável por retornar o valor de um array conforme o índice informado
     * @param Array $arr Array com os valores
     * @param String $idx Indice do array. Retorna o valor
     * @return String
     */
    public static function valorArray($arr, $idx)
    {
        if (is_array($arr) && isset($arr[$idx])) {
            return self::FormatText($arr[$idx]);
        }

        return "";
    }

    /**
     * Formata strings
     * @param String $strParam string a ser formatada para visualização
     * @return String formatada
     */
    public static function formatText($strParam)
    {
        $str = (string) $strParam;

        if ($str) {
            return strip_tags(trim(stripslashes($str)));
        }

        return "";
    }

    /**
     * Formata string para inserção no BD
     * @param String $strParam string a ser formatada.
     * @return String Formatada
     */
    public static function formatTextSql($strParam)
    {
        $str = (string) $strParam;

        if ($str) {
            return strip_tags(trim(addslashes($str)));
        }

        return "";
    }

    /**
     * <b>charDeined</b> Método trata strings de forma a remover todos os caractéres indesejados em uma string.
     * @param String $str string a ser tratada
     * @type String
     * @return String  Retorna uma string removendo caractéres indesejados
     */
    public static function charDeined($str)
    {
        $arr = ["%",",",".",";",":","´","`","~","^","[","]","{","}","\"","","¨","!","@","#","&","*","(",")","-","_","|","+","=","?"," ","<",">","'","\""];

        return str_replace($arr, "", $str);
    }

    /**
     * retornarAjax Método transforma e exibe os dados de um array para json
     * @param  array $dados
     * @return void
     */
    public static function retornarAjax($dados)
    {
        header('Content-Type: application/json');
        echo json_encode($dados);
        die;
    }
}
