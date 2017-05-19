<?php

namespace ChallengeAccepted\Service;

use ChallengeAccepted\Repository\LocaleRepository;
use ChallengeAccepted\Repository\WeatherRepository;
use InvalidArgumentException;
use Exception;

/**
 * @author Lucas de Oliveira <94oliveira.lucas@gmail.com>
 */
class WeatherLocaleApiService
{
 
    /**
     * @var LocaleRepository
     */
    protected $localeRepository;
    
    /**
     * @var WeatherRepository
     */
    protected $weatherRepository;
    
    /**
     * @param LocaleRepository $localeRepository
     * @param WeatherRepository $weatherRepository
     */
    public function __construct(LocaleRepository $localeRepository, WeatherRepository $weatherRepository)
    {
        $this->localeRepository = $localeRepository;
        $this->weatherRepository = $weatherRepository;
    }

    /**
     * @param int $localeId
     * @return array
     */
    public function getWeatherByLocaleId($localeId)
    {
        try {
            $weathers = $this->weatherRepository->getByLocaleId($localeId);
            return [
                'data'        => $weathers,
                'status_code' => 200
            ];
        } catch (InvalidArgumentException $e) {
            return [
                'message'     => $e->getMessage(),
                'status_code' => 400
            ];
        } catch (Exception $e) {
            return [
                'message'     => 'Internal error',
                'status_code' => 500
            ];
        }
    }
    
    /**
     * If name is null return all locales
     *
     * @param string $name
     * @return array
     */
    public function getLocalesBySimilarName($name = null)
    {
        try {
            if (is_null($name)) {
                return [
                    'data'        => $this->localeRepository->getAll(),
                    'status_code' => 200
                ];
            }
            
            return [
                'data'        => $this->localeRepository->getBySimilarName($name),
                'status_code' => 200
            ];
        } catch (InvalidArgumentException $e) {
            return [
                'message'     => $e->getMessage(),
                'status_code' => 400
            ];
        } catch (Exception $e) {
            return [
                'message'     => 'Internal error',
                'status_code' => 500
            ];
        }
    }
}
