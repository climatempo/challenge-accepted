<?php

namespace Test\Feature;

use Test\TestCase;

class LocalesTest extends TestCase
{
    public function testGetLocales()
    {
        $this->get('/api/locales')
            ->seeStatusCode(200)
            ->seeJsonStructure([
                "*" => [
                    "id",
                    "name",
                    "latitude",
                    "longitude"
                ]
            ]);

    }
}