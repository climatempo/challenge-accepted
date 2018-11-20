<?php
namespace App\Support\Model;


use Illuminate\Support\Str;

class SourceFile
{
    static $file_extension = ".json";

    /**
     * Generate source file with class name
     * @param $class
     * @param string $delimiter
     * @return string
     */
    public static function generateNameFromClassName($class, $delimiter = "_")
    {
        $className = (new \ReflectionClass($class))->getShortName();
        return Str::before(snake_case($className, $delimiter), ".php") . static::$file_extension;
    }

    /**
     * Parse json file
     * @param $file_json
     * @param bool $toArray
     * @return array|object
     */
    public static function parse($file_json, $toArray = true)
    {
        return json_decode(file_get_contents($file_json), $toArray);
    }

}