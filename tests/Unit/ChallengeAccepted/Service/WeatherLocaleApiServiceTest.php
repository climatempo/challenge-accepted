<?php

namespace Unit\ChallengeAccepted\Service;

use ChallengeAccepted\Service\WeatherLocaleApiService;
use ChallengeAccepted\Repository\LocaleRepository;
use ChallengeAccepted\Repository\WeatherRepository;
use PHPUnit_Framework_TestCase;
use Mockery;
use InvalidArgumentException;
use Exception;

class WeatherLocaleApiServiceTest extends PHPUnit_Framework_TestCase
{

    /**
     * @var LocaleRepository
     */
    protected $localeRepository;

    /**
     * @var WeatherRepository
     */
    protected $weatherRepository;
    
    public function setUp()
    {
        $this->localeRepository  = Mockery::mock(LocaleRepository::class);
        $this->weatherRepository = Mockery::mock(WeatherRepository::class);
    }
    
    /**
     * @test
     */
    public function getWeatherByLocaleIdShouldWork()
    {
        $this
            ->weatherRepository
            ->shouldReceive('getByLocaleId')
            ->with(3477)
            ->andReturn([]);
        
        $weatherLocaleApiService = new WeatherLocaleApiService($this->localeRepository, $this->weatherRepository);
        
        $response = $weatherLocaleApiService->getWeatherByLocaleId(3477);
        
        $this->assertEquals(200, $response['status_code']);
        $this->assertTrue(is_array($response['data']));
    }
    
    /**
     * @test
     */
    public function getWeatherByLocaleIdShouldReturnStatusCode400()
    {
        $this
            ->weatherRepository
            ->shouldReceive('getByLocaleId')
            ->with('abc')
            ->andThrow(InvalidArgumentException::class);
        
        $weatherLocaleApiService = new WeatherLocaleApiService($this->localeRepository, $this->weatherRepository);
        
        $response = $weatherLocaleApiService->getWeatherByLocaleId('abc');
        
        $this->assertEquals(400, $response['status_code']);
        $this->assertTrue(isset($response['message']));
    }
    
    /**
     * @test
     */
    public function getWeatherByLocaleIdShouldReturnStatusCode500()
    {
        $this
            ->weatherRepository
            ->shouldReceive('getByLocaleId')
            ->with('abc')
            ->andThrow(Exception::class);
        
        $weatherLocaleApiService = new WeatherLocaleApiService($this->localeRepository, $this->weatherRepository);
        
        $response = $weatherLocaleApiService->getWeatherByLocaleId('abc');
        
        $this->assertEquals(500, $response['status_code']);
        $this->assertTrue(isset($response['message']));
    }
    
    /**
     * @test
     */
    public function getLocalesBySimilarNameShouldWork()
    {
        $this->localeRepository->shouldReceive('getBySimilarName')->with('Osas')->andReturn([]);
        $this->localeRepository->shouldReceive('getAll')->andReturn([]);
        
        $weatherLocaleApiService = new WeatherLocaleApiService($this->localeRepository, $this->weatherRepository);
        
        $responseFilter = $weatherLocaleApiService->getLocalesBySimilarName('Osas');
        $responseAll    = $weatherLocaleApiService->getLocalesBySimilarName();
        
        $this->assertEquals(200, $responseFilter['status_code']);
        $this->assertTrue(is_array($responseFilter['data']));
        
        $this->assertEquals(200, $responseAll['status_code']);
        $this->assertTrue(is_array($responseAll['data']));
    }
    
    /**
     * @test
     */
    public function getLocalesBySimilarNameShouldReturnStatusCode400()
    {
        $this
            ->localeRepository
            ->shouldReceive('getBySimilarName')
            ->with('Osas')
            ->andThrow(InvalidArgumentException::class);
        
        $weatherLocaleApiService = new WeatherLocaleApiService($this->localeRepository, $this->weatherRepository);
        
        $response = $weatherLocaleApiService->getLocalesBySimilarName('Osas');

        $this->assertEquals(400, $response['status_code']);
        $this->assertTrue(isset($response['message']));
    }
    
    /**
     * @test
     */
    public function getLocalesBySimilarNameShouldReturnStatusCode500()
    {
        $this
            ->localeRepository
            ->shouldReceive('getBySimilarName')
            ->with('Osas')
            ->andThrow(Exception::class);
        
        $weatherLocaleApiService = new WeatherLocaleApiService($this->localeRepository, $this->weatherRepository);
        
        $response = $weatherLocaleApiService->getLocalesBySimilarName('Osas');
        
        $this->assertEquals(500, $response['status_code']);
        $this->assertTrue(isset($response['message']));
    }
}
