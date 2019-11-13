<?php namespace App\Http\Controllers\Api;

// Framework stuff
use Illuminate\Http\Request;
use Validator;

// The app controller
use App\Http\Controllers\Controller;

// Some pretty models
use App\Models\Locale;

// My own stuff
use App\CT\ApiException\ValidationException;
use App\CT\ApiException\EmptyValueException;

/**
 * Deals with the Locale Endpoint
 */
class LocaleController extends Controller
{
    /** 
     * Get locale data based on a query
     */
    public function get(Request $request, $search)
    {   

        // Decode base64 and return nothing if is an invalid base64 value
        $search = \base64_decode($search, TRUE);
        if(empty($search)){
            $error = (new EmptyValueException())->returnErrorData();
            return response()
            ->json($error, 406);
        }                

        // Converts to UTF8
        // For some reason the btoa function is not encoding the data in UTF8
        $search = utf8_encode($search);

        // Make a custom validator for search, allowing alphanumeric chars and spaces
        $validator = Validator::make(['search' => $search], [
            'search' => 'regex:/^[\pL\s]+$/u',
        ]);

        // Test validation and return the errors, if any
        if ($validator->fails()) {
            $error = (new ValidationException($validator->errors()))->returnErrorData();
            return response()
            ->json($error, 406);
        }

        // Get data and returns to front-end app
        $data =  Locale::where("name", "LIKE", $search."%")
        ->select(["id", "name", "uf"])
        ->get();

        return response()
        ->json($data, 200);
    }
}
