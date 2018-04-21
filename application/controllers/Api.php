<?php

defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . '/libraries/REST_Controller.php';

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
class Api extends \Restserver\Libraries\REST_Controller {

  public function index_get(){
    header("Location: /");
	}

  public function weather_get(){
      $this->load->model('BaseApi');
      $place = $this->get('place');
      if (empty($place)){
        $this->response([
            'status' => FALSE,
            'message' => 'Place value is empty.'
        ], \Restserver\Libraries\REST_Controller::HTTP_NOT_FOUND);
      } else {
          $locales_id = $this->BaseApi->locale($place);
          $weather = $this->BaseApi->weather($locales_id);
          if (empty($weather)){
            $this->set_response([
                'status' => FALSE,
                'message' => 'We could not find any prediction with this place.'
            ], \Restserver\Libraries\REST_Controller::HTTP_OK);
          } else {
            $this->response([
                'status' => TRUE,
                'result' => $weather
            ], \Restserver\Libraries\REST_Controller::HTTP_OK);
          }
      }
  }

}
