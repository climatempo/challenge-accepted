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


    /**
     * @return bool
     */
    public function existByName($name)
    {
        $contents = $this->all();

        // This can be substituted by find on database
        foreach($contents as $content)
        {
            if($content->name == $name){
                return true;
            }
        }

        return false;
    }

    public function getByName($name)
    {
        $contents = $this->all();

        foreach($contents as $content)
        {
            if($content->name == $name){
                return $content;
            }
        }

        return json_encode(json_decode("{}"));
    }
}