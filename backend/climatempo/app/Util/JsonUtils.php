<?php

namespace App\Util;

use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;

/**
 * @package App\Util
 */
class JsonUtils
{
    /**
     * Construtor privado para garantir o Singleton.
     */
    private function __construct()
    { }
    /**
     * Retorna o 'Objeto' serializado em 'json'.
     *
     * @param $object
     * @return mixed|string
     */
    public static function toJson($object)
    {
        $context = new SerializationContext();
        $builder = SerializerBuilder::create();
  
        return $builder->build()->serialize($object, 'json', $context);
    }
}
