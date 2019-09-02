<?php

namespace App\Service;

use Elasticsearch\ClientBuilder;

class Elasticsearch
{
    private $client;

    function __construct(array $hosts = [])
    {
        if (empty($this->client)) {
            $this->client = ClientBuilder::create()
                ->setHosts($hosts)
                ->setRetries(1)
                ->build();
        }
    }

    public function esGet($resource, $query)
    {
        return $this->client->search([
            'index' => $resource,
            'body' => json_encode($query),
        ]);
    }

    public function esBulkSync($regions, $data)
    {
        $params = [];

        foreach ($data as $value) {
            $params['body'][] = [
                'index' => ['_index' => $regions]
            ];
            $params['body'][] = $value;
        };

        return $this->client->bulk($params);
    }

    public function createIndice($resource)
    {
        return $this->client->indices()->create([ 'index' => $resource ]);
    }
    
}
