<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class BaseApi extends CI_Model{

    function locale($place){
        $file = file_get_contents('base/locales.json');
        $locales = json_decode($file);
        // Na variável $place, retiro os acentos, espaços e deixo no final maísculo.
        $place = strtoupper(str_replace(" ", "", removeAccents($place)));
        foreach ($locales as $locale) {
          // Na variável $city, retiro os acentos, espaços e deixo no final maísculo.
          $city = strtoupper(str_replace(" ", "", removeAccents($locale->name)));
          if($city == $place){
            return $locale->id;
          }
        }
        return null;
    }

    function weather($id){
        $file = file_get_contents('base/weather.json');
        $weathers = json_decode($file);
        foreach ($weathers as $weather) {
          if($weather->locale->id == $id){
            return $weather;
          }
        }
        return null;
    }

}

function removeAccents($string){
  return preg_replace(array("/(á|à|ã|â|ä)/","/(Á|À|Ã|Â|Ä)/","/(é|è|ê|ë)/","/(É|È|Ê|Ë)/","/(í|ì|î|ï)/","/(Í|Ì|Î|Ï)/","/(ó|ò|õ|ô|ö)/","/(Ó|Ò|Õ|Ô|Ö)/","/(ú|ù|û|ü)/","/(Ú|Ù|Û|Ü)/","/(ñ)/","/(Ñ)/"),explode(" ","a A e E i I o O u U n N"),$string);
}
