<?php

namespace src\Challenge\Data\Repository\Json;

use src\Challenge\Data\Repository\ILocaleRepository;


class LocaleRepository extends JsonRepository implements ILocaleRepository
{
    /**
     * Search for a certain locale based on the similar cityName
     * @param string $cityName - Name of the City you want to search
     * @return array
     */
    public function getLocaleByName(string $cityName) : array
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
     * Return all the locales from the JsonFile
     * @return array
     */
    public function getAllCities() : array
    {
        return $this->getJsonContentAsArray();
    }
}