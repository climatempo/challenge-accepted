<?php

namespace ClimaTempoTest;

require_once 'BaseEndpointTest.php';

class ApiTest extends BaseEndpointTest 
{
  
  public function testLocale()
  {
    $this->request('GET', '/api/locale');
    
    $this->assertResponseStatus(200);
    $this->assertResponseContentType('application/json');
  }

  public function testWeather()
  {
    $this->request('GET', '/api/weather');
    
    $this->assertResponseStatus(200);
    $this->assertResponseContentType('application/json');
  }

  public function testWeathePeriod()
  {
    $this->request('GET', '/api/weather-period');
    
    $this->assertResponseStatus(200);
    $this->assertResponseContentType('application/json');
    $this->assertJsonData(json_encode(["error" => true, "message" => "need pass the parameter \'city\'"]));
  }
}