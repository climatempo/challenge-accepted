<?php

namespace src\Challenge\Data\Repository;

interface IWeatherRepository
{
    public function getWeatherByCityId(int $id): array;
}