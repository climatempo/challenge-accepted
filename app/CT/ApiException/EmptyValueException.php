<?php
namespace App\CT\ApiException;

class EmptyValueException extends AbstractApiException
{
    /**
     * Transform exception into string
     *
     * @return array
     */
    public function returnErrorData() 
    {
        return [
            'error_msg' => "Empty value exception",
            'error_code' => "01",
            "error_content" => $this->data
        ];
    }
}