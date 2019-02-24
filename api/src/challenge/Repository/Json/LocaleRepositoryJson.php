<?php

namespace src\challenge\Repository\Json;

use src\challenge\Repository\ILocaleRepository;


class LocaleRepositoryJson extends JsonRepository implements ILocaleRepository
{
    /**
     * Get the locale that matches the city name you want
     * @param string $cityName - Similar name of the city to search
     * @return array - Locales found
     */
    public function getLocaleBySimilarName(string $cityName): array
    {
        $localesFound = array();
        foreach ($this->getJsonContentAsArray() as $locale) {
            if (strpos(strtolower($locale["name"]), strtolower($cityName)) !== false) {
                $localesFound[] = $locale;
            }
        }
        return $localesFound;
    }

    /**
     * Get all the cities
     * @return array
     */
    public function getAllCities(): array
    {
        return $this->getJsonContentAsArray();
    }
}