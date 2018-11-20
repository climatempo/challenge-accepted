<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Model\SourceData;

class Weather extends SourceData
{
    /**
     * Get weather by locale id
     * @param int $locale_id
     * @return array|\Illuminate\Support\Collection
     */
    public function weatherByLocale(int $locale_id)
    {
        return $this->data->filter(function ($item) use ($locale_id) {
            return (int) $item["locale"]["id"] === $locale_id;
        })->first();
    }
}