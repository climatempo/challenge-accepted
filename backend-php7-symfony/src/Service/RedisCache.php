<?php

namespace App\Service;

use Psr\Log\LoggerInterface;

class RedisCache
{
    private static $redis = null;

    function __construct($host = 'localhost', $port = 6379, LoggerInterface $logger = null)
    {
        self::$redis = new \Redis();
        self::$redis->connect($host, $port, 2.5, null, 150);
    }

    public function get(string $key)
    {
        return json_decode(self::$redis->get($key), true);
    }

    public function set(string $key, $data, int $ttl)
    { 
        try {
            self::$redis->setex($key, $ttl, json_encode($data, JSON_UNESCAPED_UNICODE));
        } catch (Exception $e) {
            if (!is_null($logger)) {
                $logger->error($e->getMessage());
            }
        } 
    }

    public function keyExists(string $key)
    {
        return self::$redis->exists($key);
    }
    
}
