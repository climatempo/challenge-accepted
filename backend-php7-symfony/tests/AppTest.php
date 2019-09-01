<?php

namespace Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class AppTest extends WebTestCase
{
    public function testAppRun()
    {
        $client = static::createClient();
        $client->request('GET', '/api');
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $this->assertEquals('ok', json_decode($client->getResponse()->getContent()));
    }
}
