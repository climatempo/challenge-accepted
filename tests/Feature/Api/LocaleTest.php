<?php
namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LocaleTest extends TestCase
{
    /**
     * Test if endpoint is online
     *
     * @test
     */
    public function successfulRequestTest()
    {
        $response = $this->get('/api/locale/MOCK VALUE');
        $response->assertStatus(406);
    }

    /**
     * Test if the api returns an exception if a non base64 is sended as parameter
     *
     * @test
     */
    public function base64ExceptionTest()
    {
        $response = $this->json('GET', '/api/locale/MOCK VALUE');
        $response
        ->assertStatus(406)
        ->assertJson([
            'error_code' => '01'
        ]);
    }

    /**
     * Test if the api returns an exception when a invalid input is sended
     *
     * @test
     */
    public function validationExceptionTest()
    {
        $response = $this->json('GET', '/api/locale/'.base64_encode("MOCK VALUE@1$"));
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

        $response = $this->json('GET', '/api/locale/'.base64_encode("MOCK VALUE"));
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
        $response = $this->json('GET', '/api/locale/'.base64_encode("Osasco"));        
        $response
        ->assertStatus(200)
        ->assertJson([
            ["id" => 3735, 'name' => 'Osasco']
        ]);
    }
}
