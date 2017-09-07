<?php

namespace App\Support\Model;


use Illuminate\Support\Collection;

class Model
{
    /**
     * Data source file
     * @var string
     */
    protected $source_file = "";

    /**
     * Path from source file
     * @var string
     */
    protected $path_origin = "resources/base";

    /**
     * Stored data from file source
     * @var Collection
     */
    protected $data;

    public function __construct()
    {
        $this->setFileSource();
        $this->parseSourceFile();
    }

    /**
     * Configure source file path
     * @return void
     * @throws \Exception
     */
    private function setFileSource()
    {
        $this->source_file = is_null($this->source_file) || empty($this->source_file)
            ? $this->getPathOrigin() . SourceFile::generateNameFromClassName($this)
            : $this->getPathOrigin() . $this->source_file;

        if (!file_exists($this->source_file))
            throw new \Exception("Source file {$this->source_file} not found in class " . get_class($this));
    }

    /**
     * Return origin of source path
     * @return string
     */
    private function getPathOrigin()
    {
        return base_path($this->path_origin) . "/";
    }

    /**
     * Parse source file to data collection
     * @return void
     */
    private function parseSourceFile()
    {
        $this->setCollection(SourceFile::parse($this->source_file));
    }

    /**
     * Parse array to data collection
     * @param array $data
     */
    private function setCollection(array $data)
    {
        $this->data = collect($data);
    }

    /**
     * Call dynamically methods to data attribute
     * @param $method
     * @param $arguments
     * @return mixed
     */
    public function __call($method, $arguments)
    {
        return call_user_func([&$this->data, $method], $arguments);
    }

    /**
     * Return a data attribute
     * @return Collection
     */
    public function getData()
    {
        return $this->data;
    }
}