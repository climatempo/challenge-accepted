<?php

namespace App\Http\Controllers;

use App\Models\Locales;

class LocalesController extends Controller
{
    
    /**
     * Get locales filtered by sent parameter
     * 
     * @param string $inputText
     * @return array
     */
    public function filter ($inputText)
    {
        /**
         * Response of Locales Model
         * 
         * @var resource
         */
        $localesData = Locales::getLocalesByInput($inputText);
        
        /**
         * Formated data
         * 
         * @var array
         */
        $returnData = array();
        
        foreach ($localesData as $locale) {
            
            $returnData[] = array(
                'label' => $locale->name . ' - ' . $locale->state,
                'value' => $locale->id,
            );
            
        }
        
        return $returnData;
    }
}
