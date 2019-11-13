<?php namespace App\Http\Controllers\Api;

// Framework stuff
use Illuminate\Http\Request;
use Validator;
use DB;

// The app controller
use App\Http\Controllers\Controller;

// Some pretty models
use App\Models\Weather;

// My own stuff
use App\CT\ApiException\ValidationException;

/**
 * Deals with the Locale Endpoint
 */
class WeatherController extends Controller
{
    /** 
     * Get weather data based on a query
     */
    public function get(Request $request, $locale_id)
    {   

        // Make a custom validator for search, allowing alphanumeric chars and spaces
        $validator = Validator::make(['locale_id' => $locale_id], [
            'locale_id' => 'integer',
        ]);

        // Test validation and return the errors, if any
        if ($validator->fails()) {
            $error = (new ValidationException($validator->errors()))->returnErrorData();
            return response()
            ->json($error, 406);
        }

        // Get data and returns to front-end app
        $data =  Weather::where("locale_id", $locale_id)
        ->select([
            "id",
            "description",
             DB::raw("strftime('%d/%m/%Y', weather_date) as weather_date"), 
             "temperature_max", 
             "temperature_min", 
             "rain_probability", 
             "rain_precipitation"])
        ->orderBy("weather_date")
        ->get();
        
        return response()
        ->json($data, 200);
    }
}
