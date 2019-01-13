<?php 

namespace ClimaTempo\Repositories;

use ClimaTempo\Repositories\Repository;
use ClimaTempo\Models\Weather;

class LocaleRepository extends Repository {
    public function getModel()
    {
        return (new Weather());
    }

    public function all()
    {
        return $this->getModel()->contents;
    }
}