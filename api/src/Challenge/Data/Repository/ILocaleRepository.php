<?php

namespace src\Challenge\Data\Repository;

interface ILocaleRepository
{
    public function getLocaleByName(string $cityName): array;

    public function getAllCities(): array;
}