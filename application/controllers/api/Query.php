<?php

defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . '/libraries/REST_Controller.php';

// use namespace
use Restserver\Libraries\REST_Controller;

/**
 * This is an example of a few basic user interaction methods you could use
 * all done with a hardcoded array
 *
 * @package         CodeIgniter
 * @subpackage      Rest Server
 * @category        Controller
 * @author          Phil Sturgeon, Chris Kacerguis
 * @license         MIT
 * @link            https://github.com/chriskacerguis/codeigniter-restserver
 */
class Query extends REST_Controller
{
    public function weather_get()
    {

        $search = $this->get('search');

        if ($search === NULL OR empty($search))
        {
                $this->response([
                    'status' => FALSE,
                    'message' => 'The search we can not be empty'
                ], REST_Controller::HTTP_OK);
        }
        else {
            $this->load->model('Forecast_model');

            $locales_id = $this->Forecast_model->getLocales($search);

            $forecast = $this->Forecast_model->getWeather($locales_id);

            if (!empty($forecast))
            {
                $this->response([
                    'status' => TRUE,
                    'result' => $forecast
                ], REST_Controller::HTTP_OK);// OK (200) being the HTTP response code
            }
            else
            {
                $this->set_response([
                    'status' => FALSE,
                    'message' => 'Weather forecast could not be found'
                ], REST_Controller::HTTP_OK); // NOT_FOUND (404) being the HTTP response code
            }
        }
    }

}
