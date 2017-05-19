<?php

namespace Functional\ChallengeAccepted;

class HomepageTest extends BaseTestCase
{

    /**
     * @test
     */
    public function accessHomeShouldWorkAndContainTheTitle()
    {
        $response = $this->runApp('GET', '/name');

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertContains('Challenge Accepted', (string) $response->getBody());
    }
}
