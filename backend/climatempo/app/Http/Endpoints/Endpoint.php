<?php

namespace App\Http\Endpoints;

use App\Util\JsonUtils;
use Laravel\Lumen\Routing\Controller as BaseController;

/**
 * Class 'Endpoint'.
 *
 * @package App\Http\Endpoints
 */
class Endpoint extends BaseController
{
    /**
     * Retorna o 'Objeto' serializado em 'json'.
     *
     * @param $object
     * @return string
     */
    protected function toJson($object)
    {
        header('Content-Type: application/json; charset=utf-8');
        return JsonUtils::toJson($object);
    }
 
}
