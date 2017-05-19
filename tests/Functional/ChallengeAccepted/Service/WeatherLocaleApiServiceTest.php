<?php

namespace Functional\ChallengeAccepted\Service;

use Functional\ChallengeAccepted\BaseTestCase;
use ChallengeAccepted\Repository\Json\LocaleRepositoryJson;
use ChallengeAccepted\Repository\Json\WeatherRepositoryJson;
use ChallengeAccepted\Service\WeatherLocaleApiService;

class WeatherLocaleApiServiceTest extends BaseTestCase
{
    
    /**
     * @var WeatherLocaleApiService
     */
    protected $weatherLocaleService;
    
    public function setUp()
    {
        $projectRoot = __DIR__ . '/../../../..';
        
        $localeRepository  = new LocaleRepositoryJson($projectRoot . '/base/locales.json');
        $weatherRepository = new WeatherRepositoryJson($projectRoot . '/base/weather.json');
        
        $this->weatherLocaleService = new WeatherLocaleApiService($localeRepository, $weatherRepository);
    }
    
    /**
     * @test
     */
    public function getWeatherByLocaleIdShouldWork()
    {
        $response = $this->weatherLocaleService->getWeatherByLocaleId(3477);
        
        $this->assertEquals(200, $response['status_code']);
        $this->assertTrue(count($response['data']) > 0);
    }
    
    /**
     * @test
     */
    public function getLocaleBySimilarNameShouldWork()
    {
        $responseOneItem = $this->weatherLocaleService->getLocalesBySimilarName('osas');
        $responseMoreOne = $this->weatherLocaleService->getLocalesBySimilarName('a');
        
        $this->assertEquals(200, $responseOneItem['status_code']);
        $this->assertTrue(count($responseOneItem['data']) == 1);
        
        $this->assertEquals(200, $responseMoreOne['status_code']);
        $this->assertTrue(count($responseMoreOne['data']) > 1);
    }
}
