<?php

class SampleTest extends PHPUnit_Framework_TestCase
{
    private $CI;
    public function setUp()
    {
        // Carrega a instância do CI normalmente
        $this->CI = &get_instance();

        $this->client = new GuzzleHttp\Client([
            'base_uri' => 'http://localhost/'
        ]);
    }

    public function testGetPost()
    {
        $_SERVER['REQUEST_METHOD'] = 'GET';
        $_GET['search'] = 'osasco';
        $this->assertEquals('osasco', $this->CI->input->get_post('search'));
    }
    public function testLocalizacaoExite()
    {
        $response = $this->client->get('/challenge-accepted/index.php/api/query/weather', [
            'query' => [
                'search' => 'osasco'
            ]
        ]);

        $this->assertEquals(200, $response->getStatusCode());
        $data = json_decode($response->getBody(), true);
        $this->assertArrayHasKey('status', $data);
        $this->assertEquals(true, $data['status']);
        $this->assertArrayHasKey('result', $data);
        $this->assertArrayHasKey('period', $data['result']);
        $this->assertArrayHasKey('locale', $data['result']);
        $this->assertArrayHasKey('weather', $data['result']);
    }

    public function testBuscaUpcase()
    {
        $response = $this->client->get('/challenge-accepted/index.php/api/query/weather', [
            'query' => [
                'search' => 'OsAsCo'
            ]
        ]);

        $this->assertEquals(200, $response->getStatusCode());
        $data = json_decode($response->getBody(), true);
        $this->assertArrayHasKey('status', $data);
        $this->assertEquals(true, $data['status']);
        $this->assertArrayHasKey('result', $data);
        $this->assertArrayHasKey('period', $data['result']);
        $this->assertArrayHasKey('locale', $data['result']);
        $this->assertArrayHasKey('weather', $data['result']);
    }

    public function testLocalizacaoNaoExite()
    {
        $response = $this->client->get('/challenge-accepted/index.php/api/query/weather', [
            'query' => [
                'search' => 'Taubate'
            ]
        ]);

        $this->assertEquals(200, $response->getStatusCode());
        $data = json_decode($response->getBody(), true);
        $this->assertArrayHasKey('status', $data);
        $this->assertEquals(false, $data['status']);
    }
}