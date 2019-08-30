<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;
use Tests\TestCase;

/**
 * Class ApiTest
 * @package Tests\Feature
 *
 * Classe para testes de API nas endpoints /locales
 *
 * @author Mauricio Ribeiro <mauricioribeiro1992@gmail.com>
 */
class LocaleTest extends TestCase
{

    /**
     * Caminho da pasta base (onde ficam os jsons a serem ingeridos na API)
     */
    const BASE_FOLDER = '../../../base/';

    /**
     * Json usado nos testes
     *
     * @var string
     */
    protected $json = [];

    protected function setUp(): void
    {
        parent::setUp();

        foreach(['locales', 'weather'] as $entity) {
            Artisan::call('ingerir:json', ['arquivo' => $entity]);
            $this->json[$entity] = json_decode(file_get_contents(LocaleTest::BASE_FOLDER . $entity . '.json'), true);
        }
    }

    /**
     * Testa se a lista das localizações condiz com os dados na pasta base
     *
     * @return void
     */
    public function testListarLocalizacoes()
    {

        $this->json('GET', '/api/locales')
            ->assertJson($this->json['locales'])
            ->assertStatus(200);
    }

    /**
     * Testa se a lista das previsões de uma localização condiz com os dados na pasta base
     *
     * @return void
     */
    public function testListarPrevisoesDeUmaLocalizacao()
    {
        $index = 0;
        Log::info('/api/locales/'.$this->json['locales'][$index]['id'].'/weather');
        $this->json('GET', '/api/locales/'.$this->json['locales'][$index]['id'].'/weather')
            ->assertJson($this->json['weather'][$index]['weather'])
            ->assertStatus(200);
    }
}