<?php
namespace lib\php;

/**
* Classe responsável pela leitura e manipulação de aquivos.
* @name FileReader
* @package Helpers
* @author Lucas Porto de Deus
*/
abstract class FileReader
{
    private $pathFile;
    private $fileError;
    private $dataFile;

    function __construct($pathFile)
    {
        $this->pathFile = (string) $pathFile;
        $this->execReaderFile();
    }

    /**
     * fileReadable Verifica se o arquivo esta acessível.
     * @return boolean Retorna 'true' caso o arquivo esteja acessível caso contrário retorna 'false'
     */
    private function fileReadable()
    {
        if (!file_exists($this->pathFile) || !is_readable($this->pathFile)) {
            $this->fileError = true;
            return false;
        } else {
            $this->fileError = false;
            return true;
        }
    }

    /**
     * execReaderFile Faz a leitura do arquivo e armazena os dados em um array;
     * @return void
     */
    public function execReaderFile()
    {
        if ($this->fileReadable()) {
            $data = file_get_contents($this->pathFile);

            $this->dataFile = json_decode($data);
        }
    }

    /**
     * isFileError Verifica se houve erro na leitura do arquivo.
     * @return boolean
     */
    public function isFileError()
    {
        return $this->fileError;
    }

    /**
     * getDataFile Retorna os dados contido no arquivo após sua leitura.
     * @return array retorna os dados contido no arquivo.
     */
    public function getDataFile()
    {
        return $this->dataFile;
    }

    /**
     * setPathFile Altera o arquivo a ser processado
     * @param void
     */
    public function setPathFile($pathFile)
    {
        $this->pathFile = (string) $pathFile;
    }
}
