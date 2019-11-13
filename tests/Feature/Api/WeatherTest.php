<?php
namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class WhetherTest extends TestCase
{
    /**
     * Test if endpoint is online
     *
     * @test
     */
    public function successfulRequestTest()
    {
        $response = $this->get('/api/weather/123');
        $response->assertStatus(200);
    }

    /**
     * Test if the api returns an exception when a invalid input is sended
     *
     * @test
     */
    public function validationExceptionTest()
    {
        $response = $this->json('GET', '/api/weather/MOCK');
        $response
        ->assertStatus(406)
        ->assertJson([
            'error_code' => '02'
        ]);
    }

    /**
     * Test if the api is returning empty values correctly
     *
     * @test
     */
    public function emptyValueTest()
    {
        $response = $this->json('GET', '/api/weather/50');
        $response
        ->assertStatus(200)
        ->assertJson([]);
    }

    /**
     * Test if the api is returning in the correct format
     *
     * @test
     */
    public function validJsonTest()
    {
        $response = $this->json('GET', '/api/weather/3477');
        $response
        ->assertStatus(200)
        ->assertJson([
            [
                "id" => 8,
                'description' => 'Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.',
                "weather_date" => "01/02/2017",
                "temperature_max" => "27",
                "temperature_min" => "19",
                "rain_probability" => "60",
                "rain_precipitation" => "20"
            ]            
        ]);
    }
}
