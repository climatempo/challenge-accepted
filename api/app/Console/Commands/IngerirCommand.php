<?php

namespace App\Console\Commands;

use ErrorException;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use Mockery\Exception;

/**
 * Class IngerirCommand
 * @package App\Console\Commands
 *
 * Comando do artisan para ingerir jsons das entidades no cache [https://laravel.com/docs/5.8/artisan#generating-commands]
 *
 * @author Mauricio Ribeiro <mauricioribeiro1992@gmail.com>
 */
class IngerirCommand extends Command
{
    /**
     * Nome e assinatura do comando
     *
     * @var string
     */
    protected $signature = 'ingerir:json 
                            {arquivo : Nome do json a ser ingerido como entidade (sem a extensão .json)} 
                            {--P|pasta=../base/ : Pasta base dos jsons. Opcional.}';

    /**
     * Descrição do comando
     *
     * @var string
     */
    protected $description = 'Comando para ingerir os jsons para o cache da api';

    /**
     * Criação de uma nova instância do comando
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execução do comando para ingerir jsons no cache.
     * Os dados são carregados a partir de {option:pasta} + {argumento:arquivo} + .json
     *
     * @return mixed
     */
    public function handle()
    {
        try {
            $this->info('Iniciando ingestão do json...');

            $file = $this->option('pasta').$this->argument('arquivo').'.json';
            $json = file_get_contents(base_path($file));

            $entities = json_decode($json, true);

            if($entities) {
                Cache::forever($this->argument('arquivo'), $entities);
                $this->info('Arquivo ingerido com sucesso no cache!');
            } else {
                $this->warn('O conteúdo do json está vázio. Nada a ingerir no cache.');
            }

        } catch (ErrorException $e) {
            $this->error('Falha ao ingerir json. Detalhes:'. $e->getMessage());
        }

    }
}
