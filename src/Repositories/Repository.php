<?php

namespace ClimaTempo\Repositories;

use Illuminate\Support\Collection;

abstract class Repository
{
    /**
     * @param $id
     * @return mixed
     */
    public function find($id)
    {
        $result = $this->getModel()->find($id);
        return ($result instanceof Collection) ? $result->first() : $result;
    }

    /**
     * @param $id
     * @return mixed
     */
    public function delete($id)
    {
        return $this->find($id)->delete();
    }

    /**
     * @param $amount
     * @return mixed
     */
    public function paginate($amount)
    {
        return $this->getModel()->paginate($amount);
    }

    public abstract function getModel();
}