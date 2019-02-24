<?php

namespace src\Challenge\Repository;

interface IWeatherRepository
{
    public function getWeatherByCityId(int $id): array;
}
