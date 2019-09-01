<?php

namespace App\Service;

use Elasticsearch\ClientBuilder;

class Elasticsearch
{
    private $client = null;

    function __construct(array $hosts = [])
    {
        if (empty($this->client)) {
            $this->client = ClientBuilder::create()
                ->setHosts($hosts)
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

    public function esBulkSync($resource ,$data)
    {
        $params = [];

        foreach ($data as $value) {
            $params['body'][] = [
                'index' => ['_index' => $resource]
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
