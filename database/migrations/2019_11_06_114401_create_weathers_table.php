<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWeathersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {        
        Schema::create('weathers', function (Blueprint $table) {            
            $table->bigIncrements('id');
            $table->text('description');
            $table->date('weather_date');
            $table->integer('temperature_max');
            $table->integer('temperature_min');
            $table->integer('rain_probability');
            $table->integer('rain_precipitation');            
            $table->unsignedBigInteger('locale_id');    
            $table->softDeletes();
            $table->timestamps();

            //$table->foreign('locale_id')->references('id')->on('locale');     
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('weathers');
    }
}
