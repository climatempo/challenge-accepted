<?php

namespace ClimaTempoCore;

use ClimaTempoCore\AppCapsule;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\Interfaces\InvocationStrategyInterface;

class RequestResponse implements InvocationStrategyInterface
{
    /**
     * @param callable $callable
     * @param ServerRequestInterface $request
     * @param ResponseInterface $response
     * @param array $routeArguments
     * @return ResponseInterface
     */
    public function __invoke(
        callable $callable,
        ServerRequestInterface $request,
        ResponseInterface $response,
        array $routeArguments
    )
    {
        $call = call_user_func($callable);
        
        if($call instanceof \Illuminate\View\View || is_string($call)) {
            $response->getBody()->write((string) $call);
        }

        return $response;
    }
}