<?php

namespace App\Util;

use Elasticsearch\ClientBuilder;

class Elasticsearch
{
    private $client = null;
    private $resource = null;

    function __construct(string $resource, array $hosts = [])
    {
        $this->resource = $resource;

        if (empty($this->client)) {
            $this->client = ClientBuilder::create()
                ->setHosts($hosts)
                ->build();
        }
    }

    public function esGet($query)
    {
        return $this->client->search([
            'index' => $this->resource,
            'body' => json_encode($query),
        ]);
    }

    public function esBulkSync($data)
    {
        $params = [];

        foreach ($data as $value) {
            $params['body'][] = [
                'index' => ['_index' => $this->resource]
            ];
            $params['body'][] = $value;
        };

        return $this->client->bulk($params);
    }

    public function createIndice()
    {
        return $this->client->indices()->create([ 'index' => $this->resource ]);
    }
}
