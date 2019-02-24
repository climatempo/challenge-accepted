<?php

require __DIR__ . '/../vendor/autoload.php';

use PHPUnit\Framework\TestCase;
use src\Challenge\Repository\ILocaleRepository;
use src\Challenge\Repository\IWeatherRepository;
use src\Challenge\Repository\Json\LocaleRepositoryJson;
use src\Challenge\Repository\Json\WeatherRepositoryJson;
use src\Challenge\Service\WeatherLocaleService;
use PHPUnit\Framework\MockObject\MockObject;

class WeatherLocaleApiTest extends TestCase
{
    /** @var ILocaleRepository */
    protected $localeRepository;

    /** @var IWeatherRepository */
    protected $weatherRepository;

    protected function setUp() : void
    {
        $this->localeRepository = $this->createMock(ILocaleRepository::class);
        $this->weatherRepository = $this->createMock(IWeatherRepository::class);
    }

    public function testGetCityByIdShoulWork() : void
    {
        $weatherRepository = $this->createMock(IWeatherRepository::class);
        $localeRepository = $this->createMock(ILocaleRepository::class);

        $service = new WeatherLocaleService($localeRepository, $weatherRepository);
        $response = $service->getWeatherByCityId(3477);

        $this->assertEquals(200, $response['status']);
    }

    public function testGetCityByIdShoulReturnEmptyCities() : void
    {
        $weatherRepository = $this->createMock(IWeatherRepository::class);
        $localeRepository = $this->createMock(ILocaleRepository::class);

        $service = new WeatherLocaleService($localeRepository, $weatherRepository);
        $response = $service->getCityBySimilarName('iqjdoimklakx');

        $this->assertEquals([], $response['data']);
    }

    public function testGetLocaleByNameShoulWork() : void
    {
        $weatherRepository = $this->createMock(IWeatherRepository::class);
        $localeRepository = $this->createMock(ILocaleRepository::class);

        $service = new WeatherLocaleService($localeRepository, $weatherRepository);
        $response = $service->getCityBySimilarName('Osas');

        $this->assertEquals(200, $response['status']);
    }
}
