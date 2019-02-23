<?php

namespace src\challenge\Repository;

interface IWeatherRepository
{
    public function getWeatherByCityId(int $id): array;
}