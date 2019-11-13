<?php
namespace App\CT\ApiException;

abstract class AbstractApiException
{
    /**     
    * Exception data
    *
    * @param mixed $data
    */
    protected $data = [];

    /**     
    * Parses JSON file
    *
    * @param string $input
    */
   public function _constructor($data = '')
   {
       $this->data = $data;
   }

    /**
     * Abstract return of errors
     *
     * @return array
     */
    abstract public function returnErrorData();
}