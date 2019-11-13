<?php

use Illuminate\Database\Seeder;
use App\Models\Locale;

class LocaleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Clears all data
        Locale::truncate();

        // Get base data
        $base = file_get_contents(__DIR__."/../data/weather.json");
        $base = json_decode($base, TRUE);

        // Data thats going to be inserted
        $data = [];
        
        // Builds data array
        foreach ($base as $row) {
            $locale = $row['locale'];
            $data[] = [
                "id" => $locale['id'],
                "name" => $locale['name'],
                "uf" => $locale['state'],
                "lat" => $locale['latitude'],
                "lng" => $locale['longitude'],
                "created_at" => date("Y-m-d H:i:s"),
                "updated_at" => date("Y-m-d H:i:s"),
            ];            
        }

        // Seed data array into database
        Locale::insert($data);
    }
}
