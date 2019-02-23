<?php

namespace src\Challenge\Data\Repository;

interface ILocaleRepository
{
    public function getLocaleBySimilarName(string $cityName): array;

    public function getAllCities(): array;
}