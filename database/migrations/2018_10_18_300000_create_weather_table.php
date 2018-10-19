<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWeatherTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('weather', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('id_locale');
            $table->date('date');
            $table->string('text');
            $table->integer('temperature_min');
            $table->integer('temperature_max');
            $table->integer('rain_probability');
            $table->integer('rain_precipitation');
            $table->timestamps();
            
            $table->foreign('id_locale')
                  ->references('id')
                  ->on('locales');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('weather');
    }
}
