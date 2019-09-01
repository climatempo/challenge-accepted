<?php

namespace Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class WeatherTest extends WebTestCase
{
    public function testWeatherExists()
    {
        $client = static::createClient();
        $client->request('GET', '/api/v1/weather');
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $content = json_decode($client->getResponse()->getContent());
        $this->assertObjectHasAttribute('weather', $content);
        $this->assertTrue(count($content->weather) === 0);
    }

    public function testGetSaoPauloWeather()
    {
        $client = static::createClient();
        $id = 3477; // TODO: fragile!
        $client->request('GET', '/api/v1/weather?localeId=' . $id);
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $content = json_decode($client->getResponse()->getContent())->weather;
        $this->assertEquals('São Paulo', $content->locale->name);
        $this->assertObjectHasAttribute('period', $content);
        $this->assertObjectHasAttribute('begin', $content->period);
        $this->assertObjectHasAttribute('end', $content->period);
        $this->assertObjectHasAttribute('locale', $content);
        $this->assertObjectHasAttribute('id', $content->locale);
        $this->assertObjectHasAttribute('name', $content->locale);
        $this->assertObjectHasAttribute('state', $content->locale);
        $this->assertObjectHasAttribute('latitude', $content->locale);
        $this->assertObjectHasAttribute('longitude', $content->locale);
        $this->assertTrue(count($content->weather) > 0);
        $this->assertObjectHasAttribute('date', $content->weather[0]);
        $this->assertObjectHasAttribute('text', $content->weather[0]);
        $this->assertObjectHasAttribute('temperature', $content->weather[0]);
        $this->assertObjectHasAttribute('rain', $content->weather[0]);
        $this->assertObjectHasAttribute('min', $content->weather[0]->temperature);
        $this->assertObjectHasAttribute('max', $content->weather[0]->temperature);
        $this->assertObjectHasAttribute('probability', $content->weather[0]->rain);
        $this->assertObjectHasAttribute('precipitation', $content->weather[0]->rain);       
    }

    public function testIncorrectLocaleId()
    {
        $client = static::createClient();
        $client->request('GET', '/api/v1/weather?localeId=99999');
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $content = json_decode($client->getResponse()->getContent());
        $this->assertObjectHasAttribute('weather', $content);
        $this->assertTrue(count($content->weather) === 0);
    }
}
