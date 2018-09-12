<?php
namespace abox;
include_once "constants.php";

/*
 * @class 
 *
 * Handle and store touples or matrixes comming from backend as an json object
 * Can interact with [handle] tag attributes to update registers on client side
 * thougth can be send to backend hole as a complete touple to be stored
 *
 */
class Date{

    /*
     * @attribute
     * 
     * inner value for date in brazilian format
     *
     */
    private $date_;

    /*
     * @attribute
     * 
     * inner value for date in brazilian format
     *
     */
    private $time_;

    /*
     * @member function
     *
     * increment count in '$n' days
     * $n = number of days to increment
     * ex.: (new Date("12/02/1988")).plus(10) // returns '22/12/1988'
     *
     */
    public function plus($n=1){
        $tmp = strtotime("+".$n." days", strtotime($this->intl()));
        return  date("d/m/Y", $tmp);
    }

    /*
     * @member function
     *
     * reformat the inner date to international format
     * ex.: (new Date("12/02/1988")).intl() // returns '1988-02-12'
     *
     */
    public function intl(){
        $tmp = explode("/",$this->date_?$this->date_:$this->today());
        return($tmp[2]."-".$tmp[1]."-".$tmp[0]);
    }

    /*
     * @member function
     *
     * returns inner date respective epoch value
     *
     */
    public function days(){
        $tmp = explode("/",$this->date());
        return (float)$tmp[0]+(30.44*(float)$tmp[1])+(365.24*(float)$tmp[2]);
    }
    
    /*
     * @member function
     *
     * returns a comparassion of given and inner dates, in number of days
     * d = date value in brazilian format
     * a = true for absolute, false to allow negative result
     * ex.: (new Date("12/02/1988")).cmp("22/02/1988") // returns 10
     *
     */
    public function cmp($d=AB_NOW,$a=AB_NOABSOLUTE){
        $tmp = null;
        if($d===AB_NOW) $tmp = new Date(AB_NOW);
        else if(gettype($d)=="string"){
            if($d=="today") $tmp = new Date(AB_NOW);
            else if(strpos($d,'/')) $tmp = new Date(["date"=>$d]);
        }
        $tmp = $this->days()-$tmp->days();
        return ($a==AB_ABSOLUTE ? abs($tmp):$tmp);
    }


    public function datetime($d=AB_NOTNOW){
        return $this->date($d)."_".$this->time($d);
    }



    /*
     * @member function
     *
     * returns today's date format in brazilian way
     *
     */
    public function today($c=AB_NOTNOW){
        $t = date("d/m/Y");
        if($c!==AB_NOTNOW) $this->date_ = $t;
        return (string)$t;
    }

    /*
     * @member function
     *
     * returns now's hour formated in brazilian way
     *
     */
    public function now($c=AB_NOTNOW){
        $t = date("H:i:s");
        if($c!==AB_NOTNOW) $this->time_ = $t;
        return (string)$t;
    }

    /*
     * @member function
     *
     * returns a the inner value as a getter
     * ex.: (new Date("12/02/1988")).date() // returns "12/02/1988"
     *
     */
    public function time($h=AB_NOTNOW){
        if($h=AB_NOW || (gettype($h)=="string"&&$h=="now")) return $this->now(AB_NOW);
        else if(gettype($h)=='string'&&strpos($h,':')) $this->time_ = $h;
        return ($this->time_ ? $this->time_ : $this->now());
    }

    /*
     * @member function
     *
     * returns a the inner value as a getter
     * ex.: (new Date("12/02/1988")).date() // returns "12/02/1988"
     *
     */
    public function date($d=AB_NOTNOW){
        if($d===AB_NOW || (gettype($d)=="string"&&strtolower($d)==="today")) $this->today(AB_NOW); 
        else if(gettype($d)=="string"&&strpos($d,'/')) $this->date_ = $d;
        return ($this->date_ ? $this->date_ : $this->today());
    }
    /*
     * @member function
     *
     * set anew value to inner date
     * d = date value in brazilian format
     * ex.: (new ab_Date()).assign("12/02/1988")
     *
     */
    public function init($d=AB_NOW){
        if($d instanceof Date){
            $this->date_ = $d->date();
            $this->time_ = $d->time();
        }else if(is_array($d)){
            $this->date_ = (isset($d["date"]) ? $d["date"] : $this->today());
            $this->time_ = (isset($d["time"]) ? $d["time"] : $this->now());
        }else{
            $this->date(AB_NOW);
            $this->time(AB_NOW);
        }
    }
    
    /*
     * @constructor
     *
     * $d = brazilian format date value
     *
     */
    public function __construct($d=AB_NOW){ $this->init($d); }
}