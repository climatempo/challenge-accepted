<?php

namespace App;

use App\Support\Model\Model;

class Weather extends Model
{
    /**
     * Get weather by locale id
     * @param int $locale_id
     * @return array|\Illuminate\Support\Collection
     */
    public function byLocale(int $locale_id)
    {
        return $this->data->filter(function ($item) use ($locale_id) {
            return (int) $item["locale"]["id"] === $locale_id;
        })->first();
    }
}