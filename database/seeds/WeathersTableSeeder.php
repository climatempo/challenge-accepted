<?php

use Illuminate\Database\Seeder;
use App\Models\Weather;

class WeathersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {        
        // Clears all data
        Weather::truncate();

        // Get base data
        $base = file_get_contents(__DIR__."/../data/weather.json");
        $base = json_decode($base, TRUE);

        // Data thats going to be inserted
        $data = [];
        
        // Builds data array
        foreach ($base as $row) {
            $locale_id = $row['locale']['id'];
            foreach($row['weather'] as $weather){                
                $data[] = [
                    "description" => $weather['text'],
                    "weather_date" => $weather['date'],
                    "temperature_max" => $weather['temperature']['max'],
                    "temperature_min" => $weather['temperature']['min'],
                    "rain_probability" => $weather['rain']['probability'],
                    'rain_precipitation' => $weather['rain']['precipitation'],
                    'locale_id' => $locale_id,   
                    "created_at" => date("Y-m-d H:i:s"),
                    "updated_at" => date("Y-m-d H:i:s"),
                ];   
            }             
        }        
        // Seed data array into database
        Weather::insert($data);        
    }
}
