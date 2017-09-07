<?php

namespace Test\Units;

use App\Support\Model\SourceData;
use Illuminate\Support\Collection;
use Test\TestCase;

class ModelTest extends TestCase
{
    public function testIfParseFileToDataAttributeAsCollection()
    {
        $model = (new User());

        $this->assertInstanceOf(Collection::class, $model->getData());
        $this->assertEquals(2, $model->count());
    }
}


class User extends SourceData {
    protected $path_origin = "tests/fixtures";

    protected $source_file = "source_file.json";
}