<?php

namespace src\Challenge\Service;

use src\Challenge\Repository\ILocaleRepository;
use src\Challenge\Repository\IWeatherRepository;

class WeatherLocaleService
{
    /** @var ILocaleRepository $localeRepository */
    private $localeRepository;

    /** @var IWeatherRepository $weatherRepository */
    private $weatherRepository;

    public function __construct(
        ILocaleRepository $localeRepository,
        IWeatherRepository $weatherRepository
    ) {
        $this->localeRepository = $localeRepository;
        $this->weatherRepository = $weatherRepository;
    }

    /**
     * Get the locale for a similar city name
     * @param string $cityName - Name of the City / Locale
     * @return array
     */
    public function getCityBySimilarName(string $cityName) : array
    {
        try {

            if (empty($cityName)) {
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
        } catch (\InvalidArgumentException $e) {
            return [
                'message' => $e->getMessage(),
                'status' => 400
            ];
        } catch (\Exception $e) {
            return [
                'message' => 'Internal Error',
                'status' => 500
            ];
        }
    }

    /**
     * Obtain the weather forecast for a given city ir
     * @param int $cityId
     * @return array
     */
    public function getWeatherByCityId(int $cityId) : array
    {
        try {
            $weather = $this->weatherRepository->getWeatherByCityId($cityId);
            return [
                'data' => $weather,
                'status' => 200
            ];
        } catch (\InvalidArgumentException $e) {
            return [
                'message' => $e->getMessage(),
                'status' => 400
            ];
        } catch (\Exception $e) {
            return [
                'message' => 'Internal Error',
                'status' => 500
            ];
        }
    }
}
