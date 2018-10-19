<?php

use Illuminate\Database\Seeder;
use App\Models\Locales;
use App\Models\Weather;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        
        $this->call(LocalesTableSeeder::class);
        $this->command->info('Locales table seeded!');
        
        $this->call(WeatherTableSeeder::class);
        $this->command->info('Weather table seeded!');
    }
}

class LocalesTableSeeder extends Seeder {

    public function run()
    {
        DB::table('locales')->delete();

        Locales::create([
                'id'        => 3735,
                'name'      => 'Osasco',
                'state'     => 'SP',
                'latitude'  => -23.5320,
                'longitude' => -46.7920
            ]);
        Locales::create([
                'id'        => 3477,
                'name'      => 'São Paulo',
                'state'     => 'SP',
                'latitude'  => -23.5480,
                'longitude' => -46.6360
            ]);
    }

}

class WeatherTableSeeder extends Seeder {

    public function run()
    {
        DB::table('weather')->delete();

        Weather::create([
                'id_locale'          => 3735,
                'date'               => '2017-02-01',
                'text'               => 'Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.',
                'temperature_min'    => 20,
                'temperature_max'    => 28,
                'rain_probability'   => 60,
                'rain_precipitation' => 20
            ]);
        Weather::create([
                'id_locale'          => 3735,
                'date'               => '2017-02-02',
                'text'               => 'Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.',
                'temperature_min'    => 21,
                'temperature_max'    => 30,
                'rain_probability'   => 60,
                'rain_precipitation' => 10
            ]);
        Weather::create([
                'id_locale'          => 3735,
                'date'               => '2017-02-03',
                'text'               => 'Sol com algumas nuvens. Chove rápido durante o dia e à noite.',
                'temperature_min'    => 22,
                'temperature_max'    => 31,
                'rain_probability'   => 60,
                'rain_precipitation' => 15
            ]);
        Weather::create([
                'id_locale'          => 3735,
                'date'               => '2017-02-04',
                'text'               => 'Sol com algumas nuvens. Chove rápido durante o dia e à noite.',
                'temperature_min'    => 22,
                'temperature_max'    => 32,
                'rain_probability'   => 60,
                'rain_precipitation' => 16
            ]);
        Weather::create([
                'id_locale'          => 3735,
                'date'               => '2017-02-05',
                'text'               => 'Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.',
                'temperature_min'    => 23,
                'temperature_max'    => 32,
                'rain_probability'   => 67,
                'rain_precipitation' => 19
            ]);
        Weather::create([
                'id_locale'          => 3735,
                'date'               => '2017-02-06',
                'text'               => 'Sol com algumas nuvens. Chove rápido durante o dia e à noite.',
                'temperature_min'    => 22,
                'temperature_max'    => 33,
                'rain_probability'   => 60,
                'rain_precipitation' => 8
            ]);
        Weather::create([
                'id_locale'          => 3735,
                'date'               => '2017-02-07',
                'text'               => 'Sol com algumas nuvens. Chove rápido durante o dia e à noite.',
                'temperature_min'    => 25,
                'temperature_max'    => 30,
                'rain_probability'   => 60,
                'rain_precipitation' => 11
            ]);
        Weather::create([
                'id_locale'          => 3477,
                'date'               => '2017-02-01',
                'text'               => 'Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.',
                'temperature_min'    => 19,
                'temperature_max'    => 27,
                'rain_probability'   => 60,
                'rain_precipitation' => 20
            ]);
        Weather::create([
                'id_locale'          => 3477,
                'date'               => '2017-02-02',
                'text'               => 'Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.',
                'temperature_min'    => 20,
                'temperature_max'    => 29,
                'rain_probability'   => 60,
                'rain_precipitation' => 15
            ]);
        Weather::create([
                'id_locale'          => 3477,
                'date'               => '2017-02-03',
                'text'               => 'Sol com algumas nuvens. Chove rápido durante o dia e à noite.',
                'temperature_min'    => 21,
                'temperature_max'    => 30,
                'rain_probability'   => 60,
                'rain_precipitation' => 15
            ]);
        Weather::create([
                'id_locale'          => 3477,
                'date'               => '2017-02-04',
                'text'               => 'Sol com algumas nuvens. Chove rápido durante o dia e à noite.',
                'temperature_min'    => 21,
                'temperature_max'    => 31,
                'rain_probability'   => 60,
                'rain_precipitation' => 11
            ]);
        Weather::create([
                'id_locale'          => 3477,
                'date'               => '2017-02-05',
                'text'               => 'Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.',
                'temperature_min'    => 22,
                'temperature_max'    => 31,
                'rain_probability'   => 67,
                'rain_precipitation' => 16
            ]);
        Weather::create([
                'id_locale'          => 3477,
                'date'               => '2017-02-06',
                'text'               => 'Sol com algumas nuvens. Chove rápido durante o dia e à noite.',
                'temperature_min'    => 21,
                'temperature_max'    => 32,
                'rain_probability'   => 60,
                'rain_precipitation' => 8
            ]);
        Weather::create([
                'id_locale'          => 3477,
                'date'               => '2017-02-07',
                'text'               => 'Sol com algumas nuvens. Chove rápido durante o dia e à noite.',
                'temperature_min'    => 22,
                'temperature_max'    => 33,
                'rain_probability'   => 60,
                'rain_precipitation' => 26
            ]);
        
    }

}