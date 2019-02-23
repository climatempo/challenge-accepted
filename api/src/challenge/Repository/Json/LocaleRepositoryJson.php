<?php

namespace src\challenge\Repository\Json;

use src\challenge\Repository\ILocaleRepository;


class LocaleRepositoryJson extends JsonRepository implements ILocaleRepository
{
    /**
     * Obter o local com base na cidade desejada
     */
    public function getLocaleBySimilarName(string $cityName): array
    {
        $localesFound = array();
        foreach ($this->getAsArray() as $locale) {
            if (strpos(strtolower($locale["name"]), strtolower($cityName)) !== false) {
                $localesFound[] = $locale;
            }
        }
        return $localesFound;
    }

    /**
     * Retorna todas as cidades
     */
    public function getAllCities(): array
    {
        return $this->getAsArray();
    }
}