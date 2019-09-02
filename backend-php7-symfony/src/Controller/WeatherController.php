<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

use Psr\Log\LoggerInterface;

use App\Service\RedisCache;

use App\Model\Climate\Weather;

class WeatherController extends AbstractController
{
    private $redisCache;
    private $logger;

    public function __construct(RedisCache $redisCache, LoggerInterface $logger)
    {
        $this->redisCache = $redisCache;
        $this->logger = $logger;
    }

    public function index(Request $request)
    {
        $localeId = (int) $request->query->get('localeId');

        $cacheKey = ':weather:' . strval($localeId);

        $resp = [];
        
        try {
            if ($this->redisCache->keyExists($cacheKey)) {
                $resp = $this->redisCache->get($cacheKey);
            } else {
                $data = Weather::getWeatherByLocaleId($localeId);
                $this->redisCache->set($cacheKey, $data, 60); // 60 >> seconds
                $resp = $data;
            }

            $resp = is_array($resp) ? $resp[0] : $resp;
        } catch (\Exception $e) {
            if (!is_null($this->logger)) {
                $this->logger->error($e->getMessage());
            }
        }

        return $this->json(['weather' => $resp]);
    }
    
}
