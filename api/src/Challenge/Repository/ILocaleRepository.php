<?php

namespace src\Challenge\Repository;

interface ILocaleRepository
{
    public function getLocaleBySimilarName(string $cityName): array;

    public function getAllCities(): array;
}
