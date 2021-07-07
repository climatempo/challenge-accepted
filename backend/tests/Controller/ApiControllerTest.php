<?php

namespace Tests\Controller;

use Illuminate\Http\Response;
use Tests\TestCase;

class ApiControllerTest extends TestCase
{
    public function test_ApiGetWeather()
    {
        $this->json('get', 'api/v1/weather')
            ->assertStatus(Response::HTTP_OK)
            ->assertJsonStructure(
                [
                    '*' => [
                        "period" => [
                            "begin",
                            "end",
                        ],
                        "locale" => [
                            "id",
                            "name",
                            "state",
                            "latitude",
                            "longitude",
                        ],
                        "weather" => [
                            '*' => [
                                "date",
                                "text",
                                "temperature" => [
                                    "min",
                                    "max",
                                ],
                                "rain" => [
                                    "probability",
                                    "precipitation",
                                ],
                            ],
                        ],
                    ],
                ]
            );
    }
}
