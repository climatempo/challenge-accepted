<?php

namespace ClimaTempoTest;

require_once __DIR__ . '/../bootstrap/app.php';

use Slim\App;
use Slim\Http\Environment;
use Slim\Http\Headers;
use Slim\Http\Request;
use Slim\Http\RequestBody;
use Slim\Http\Response;
use Slim\Http\Uri;

abstract class BaseEndpointTest extends \PHPUnit\Framework\TestCase
{
  /** @var Response */
  private $response;

  /** @var \Slim\App */
  private $app;

  /** Sets the Slim app definition for each test */
  protected function setUp()
  {
    global $app;
    $this->app = $app;
  }

  /** Destroys local content of global vars */
  protected function tearDown()
  {
    unset($this->app);
    unset($this->response);
  }

  /** Calls the slim app to handle the request
   * 
   * @param $method
   * @param $url
   * @param $reqParams
   * 
   * @return $reponse 
   */
  protected function request($method, $url, array $reqParams = [])
  {
    $request =  $this->prepRequest($method, $url, $reqParams);
    $response = new Response();

    $app = $this->app;
    $this->response = $app($request, $response);
  }

  /** Returns JSON decoded response body as array */
  protected function responseData()
  {
    return json_decode((string) $this->response->getBody(), true);
  }

  /** Returns request object
   * 
   * @param $method
   * @param $url
   * @param $reqParams[]
   * 
   * @return $request
   */
  private function prepRequest($method, $url, array $reqParams)
  {
    $env = Environment::mock([
      'REQUEST_URI' => $url,
      'REQUEST_METHOD' => $method
    ]);

    $parts = explode('?', $url);

    if(isset($parts[1])) {
      $env['QUERY_STRING'] = $parts[1];
    }

    $uri = Uri::createFromEnvironment($env);
    $headers = Headers::createFromEnvironment($env);
    $cookies = [];

    $serverParams = $env->all();

    $body = new RequestBody();
    $body->write(json_encode($reqParams));

    $request = new Request($method, $uri, $headers, $cookies, $serverParams, $body);
    return $request->withHeader('Content-Type', 'application/json');
  }

  /** -----------------------
   * Custom assertion helpers
   * ------------------------
   */

  protected function assertResponseStatus($expectedStatus)
  {
    $this->assertEquals($expectedStatus, $this->response->getStatusCode());
  }

  protected function assertResponseContentType($expectedContentType)
  {
    $this->assertContains($expectedContentType, $this->response->getHeader('Content-Type'));
  }

  protected function assertJsonData(string $expectedJson)
  {
    $this->assertEquals($expectedJson, json_encode($this->responseData()));
  }

}