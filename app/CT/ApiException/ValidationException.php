<?php
namespace App\CT\ApiException;

class ValidationException extends AbstractApiException
{
    /**
     * Transform exception into string
     *
     * @return array
     */
    public function returnErrorData() 
    {
        return [
            'error_msg' => "Validation exception",
            'error_code' => "02",
            "error_content" => $this->data
        ];
    }
}