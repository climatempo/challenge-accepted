<?php

namespace src\challenge\Service;

use src\challenge\Repository\ILocaleRepository;
use src\challenge\Repository\IWeatherRepository;

class WeatherLocaleService
{
    /** @var LocaleRepositoryJson 
     * $localeRepositoryJson 
     * Repositório para manipular os dados dos locais json 
     */
    private $localeRepositoryJson;

    /** @var IWeatherRepository $weatherRepository */
    private $weatherRepository;

    public function __construct(
        ILocaleRepository $localeRepositoryJson,
        IWeatherRepository $weatherRepository
    )
    {
        $this->localeRepositoryJson = $localeRepositoryJson;
        $this->weatherRepository = $weatherRepository;
    }

    public function getCityBySimilarName(string $cityName): array
    {
        try {
            $locales = $this->localeRepositoryJson->getLocaleBySimilarName($cityName);
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