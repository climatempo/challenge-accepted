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

    public function getWeatherByPeriod($locale, $periodStart, $periodEnd)
    {
        // Uses periodStart and periodEnd for query in database
        $contents = $this->all();

        // This can be substituted by find on database
        foreach($contents as $content)
        {
            if($content->locale->name == $locale){
                return $content->weather;
            }
        }

        return [];
    }
}