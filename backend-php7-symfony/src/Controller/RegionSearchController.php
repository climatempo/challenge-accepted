<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

use Psr\Log\LoggerInterface;

use App\Service\Elasticsearch;

use App\Model\Region\RegionSearch;

class RegionSearchController extends AbstractController
{
    private $elasticsearch;
    private $logger;

    public function __construct(Elasticsearch $elasticsearch, LoggerInterface $logger)
    {
        $this->elasticsearch = $elasticsearch;
        $this->logger = $logger;
    }

    public function index(Request $request)
    {
        $name = $request->query->get('name');

        $payload = [
            'query' => [
                'query_string' => [
                    'query' => '*' . $name . '*',
                    'fields' => ['name', 'key'],
                ],
            ],
        ];
        
        $resp = [];
        
        try {
            $resp = $this->elasticsearch->esGet('regions', $payload);

            $resp = array_map(function($hit) {
                return [
                    'id' => $hit['_source']['id'],
                    'name' => $hit['_source']['name'],
                ];
            }, $resp['hits']['hits']);

        } catch (\Exception $e) {
            if (!is_null($this->logger)) {
                $this->logger->error($e->getMessage());
            }
        }

        return $this->json(['regions' => $resp]);
    }
    
}
