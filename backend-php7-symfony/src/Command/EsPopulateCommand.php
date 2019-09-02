<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

use App\Service\Elasticsearch;

use App\Model\Region\RegionSearch;

class EsPopulateCommand extends Command
{
    protected static $defaultName = 'elasticsearch:populate';
    
    private $elasticsearch;

    public function __construct(Elasticsearch $elasticsearch)
    {
        $this->elasticsearch = $elasticsearch;
        
        parent::__construct();
    }

    protected function configure()
    {
        $this
            ->setDescription('Populate Elasticsearch')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $this->elasticsearch->createIndice('regions');
        $this->elasticsearch->esBulkSync('regions', RegionSearch::getAllRegions());
        $output->writeln('Done!');
    }
}
