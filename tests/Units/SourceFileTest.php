<?php

namespace Test\Units;

use App\Support\Model\SourceFile;
use Test\TestCase;

class SourceFileTest extends TestCase
{
    public function testParseJsonFile()
    {
        $result = SourceFile::parse(base_path("tests/fixtures/source_file.json"));

        $this->assertCount(2, $result);
        $this->assertArrayHasKey("user", $result[0]);
        $this->assertEquals("Domeniqque", $result[0]["user"]);
    }

    public function testIfGenerateFileName()
    {
        $result = SourceFile::generateNameFromClassName($this, "_");

        $this->assertEquals("source_file_test.json", $result);
    }
}
