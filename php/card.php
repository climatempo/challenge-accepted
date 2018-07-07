<?php
//Classe que monta os cards do tempo
class Card
{

    private $dia;
    private $texto;
    private $temperatura_minima;
    private $temperatura_maxima;
    private $probabilidade;
    private $precepitacao;

    public function __construct($dia, $texto, $temp_min, $temp_max, $prob, $prec)
    {
        $this->dia = $dia;
        $this->texto = $texto;
        $this->temperatura_minima = $temp_min;
        $this->temperatura_maxima = $temp_max;
        $this->probabilidade = $prob;
        $this->precepitacao = $prec;

    }

    public function montar_card()
    {
        echo "<div id=\"cardss\" class=\"wfull martop50\">
    <div class=\"w90 tctt base_card\">
        <div class=\"hful w30 bdarkgreen cwhite left bradius\">
            <div class=\"hful tct paddingtop50\">
                <p class=\"pan-b\">" . $this->dia . "</p>
            </div>
        </div>
        <div class=\"w70 hful left\">
            <div class=\"w100 block cima_card\"><p class=\"pan-r justfy\">" . $this->texto . "</p></div>
            <div class=\"w100 block baixo_card\">
                <div class=\"w50 hful left paddingtop10\">
                    <div class=\"w50 left\"><img src=\"images/icons/upload.png\" class=\"left\">
                        <p class=\"pan-b f1\">" . $this->temperatura_maxima . "°C</p></div>
                    <div class=\"w50 left\"><img src=\"images/icons/download.png\" class=\"left\">
                        <p class=\"pan-b f1\">" . $this->temperatura_minima . "°C</p>
                    </div>
                </div>
                <div class=\"w50 hful left paddingtop10\">
                    <div class=\"w50 left\"><img
                                src=\"images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png\"
                                class=\"left\">
                        <p class=\"pan-b f1\">" . $this->probabilidade . "%</p></div>
                    <div class=\"w50 left\"><img src=\"images/icons/raindrop-close-up.png\" class=\"left\">
                        <p class=\"pan-b f08\">" . $this->precepitacao . "mm</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>";
    }
}