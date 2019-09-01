<?php

namespace App\Model\Region;

class RegionSearch
{
    private static $regions = [];

    private static function getRegions()
    {
        if (empty(self::$regions)) {
            try {
                self::$regions = json_decode(file_get_contents(__DIR__ . '/locales.json'));
            } catch(Exception $e) {
                // TODO: add logger
            }
        }

        return self::$regions;
    }

    public static function getAllRegions()
    {
        return self::getRegions();
    }

    public static function getRegionsByName(string $name)
    {
        return array_filter(self::getRegions(), function($region) use ($name) {
            return $region->name === $name;
        });
    }
    
}
