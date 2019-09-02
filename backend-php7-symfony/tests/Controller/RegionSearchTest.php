<?php

namespace Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class RegionSearchTest extends WebTestCase
{
    public function testGetAllRegions()
    {
        $client = static::createClient();
        $client->request('GET', '/api/v1/regions');
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $content = json_decode($client->getResponse()->getContent());
        $this->assertObjectHasAttribute('id', $content->regions[0]);
        $this->assertObjectHasAttribute('name', $content->regions[0]);
    }

    // public function testGetOnlyOne()
    // {
    //     $client = static::createClient();
    //     $client->request('GET', '/api/v1/regions?name=osasco');
    //     $this->assertEquals(200, $client->getResponse()->getStatusCode());
    //     $content = json_decode($client->getResponse()->getContent());
    //     $this->assertEquals(count($content->regions), 1);
    // }

    public function testNotFoundRegion()
    {
        $client = static::createClient();
        $client->request('GET', '/api/v1/regions?name=foo');
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $content = json_decode($client->getResponse()->getContent());
        $this->assertEquals(count($content->regions), 0);
    }
}
