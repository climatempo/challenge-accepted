<?php

namespace ClimaTempoTest;

require_once('./BaseEndpointTest.php');

use ClimaTempoTest\BaseEndpointTest;

class ApiTest extends BaseEndpointTest 
{
    public function testCheckBase()
  {
    $this->request('GET', '/');
    
    $this->assertResponseStatus(200);
  }
}