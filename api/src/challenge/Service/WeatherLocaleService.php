<?php

namespace src\challenge\Service;

use src\challenge\Repository\ILocaleRepository;
use src\challenge\Repository\IWeatherRepository;

class WeatherLocaleService
{
    /** @var ILocaleRepository $localeRepository */
    private $localeRepository;

    /** @var IWeatherRepository $weatherRepository */
    private $weatherRepository;

    public function __construct(
        ILocaleRepository $localeRepository,
        IWeatherRepository $weatherRepository
    )
    {
        $this->localeRepository = $localeRepository;
        $this->weatherRepository = $weatherRepository;
    }

    public function getCityBySimilarName(string $cityName): array
    {
        try {
            
            if(empty($cityName)) {
                return [
                    'data' => $this->localeRepository->getAllCities(),
                    'status' => 200
                ];
            }

            $locales = $this->localeRepository->getLocaleBySimilarName($cityName);
            return [
                'data' => $locales,
                'status' => 200
            ];
        }
        catch (\InvalidArgumentException $e) {
            return [
                'message' => $e->getMessage(),
                'status' => 400
            ];
        }
        catch (\Exception $e) {
            return [
                'message' => 'Internal Error',
                'status' => 500
            ];
        }
    }

    public function getWeatherByCityId(int $cityId)
    {
        try {
            $weather = $this->weatherRepository->getWeatherByCityId($cityId);
            return [
                'data' => $weather,
                'status' => 200
            ];
        }
        catch (\InvalidArgumentException $e) {
            return [
                'message' => $e->getMessage(),
                'status' => 400
            ];
        }
        catch (\Exception $e) {
            return [
                'message' => 'Internal Error',
                'status' => 500
            ];
        }
    }
}