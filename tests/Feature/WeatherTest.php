<?php

namespace Test\Feature;

use Test\TestCase;

class WeatherTest extends TestCase
{
    public function testGetClimateCollection()
    {
        $this->get('/api/weather')
            ->seeStatusCode(200)
            ->seeJsonStructure([
                "*" => [
                    "period" => [
                        "begin",
                        "end"
                    ],
                    "locale" => [
                        "id",
                        "name",
                        "latitude",
                        "longitude"
                    ],
                    "weather" => [
                        "*" => [
                            "date",
                            "text",
                            "temperature" => [
                                "min",
                                "max"
                            ],
                            "rain" => [
                                "probability",
                                "precipitation"
                            ]
                        ]
                    ]
                ]
            ]);
    }

    public function testSearchByLocale()
    {
        $this->get('/api/weather/locale/3735')
            ->seeStatusCode(200)
            ->seeJsonStructure([
                "period" => [
                    "begin",
                    "end"
                ],
                "locale" => [
                    "id",
                    "name",
                    "latitude",
                    "longitude"
                ],
                "weather" => [
                    "*" => [
                        "date",
                        "text",
                        "temperature" => [
                            "min",
                            "max"
                        ],
                        "rain" => [
                            "probability",
                            "precipitation"
                        ]
                    ]
                ]
            ]);
    }

    public function testShouldReturnEmptyIfNotExists()
    {
        $this->get('/api/weather/locale/id-that-does-not-exist')
            ->seeStatusCode(200)
            ->seeJson([]);
    }
}