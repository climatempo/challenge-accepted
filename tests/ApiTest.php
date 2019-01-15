<?php

namespace Demo\ClimaTempoTest;


class ApiTest extends BaseEndpointTest 
{
  
  public function testCheckBase()
  {
    $this->request('GET', '/');
    
    $this->assertResponseStatus(200);
  }
}