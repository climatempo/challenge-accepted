<?php 

namespace ClimaTempo\Repositories;

use ClimaTempo\Repositories\Repository;
use ClimaTempo\Models\Locale;

class LocaleRepository extends Repository {
    public function getModel()
    {
        return (new Locale());
    }

    public function all()
    {
        return $this->getModel()->contents;
    }
}