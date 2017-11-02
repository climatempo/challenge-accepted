<?php
	$Page_Request = strtolower(basename($_SERVER['REQUEST_URI']));
	$File_Request = strtolower(basename(__FILE__));
	
	// Verificacao se o usuario esta tentando acessar o arquivo diretamente
	if($Page_Request == $File_Request) {
		exit("");
	}
	
	if(!class_exists("Functions"))
	{
		class Functions
		{
			private $nameCity;
			private $codeCity;

			public function __construct()
			{
				$this->__verifyGET();
			}

			private function __verifyGET()
			{
				if(isset($_GET["act"]))
				{
					switch($_GET["act"])
					{
						case "search":
							$this->doResearch();
							break;
					}
				}
			}

			private function doResearch()
			{
				if(isset($_POST["name-city"]))
				{
					$this->nameCity = strtoupper($_POST["name-city"]);

					$file_data = file_get_contents("base/locales.json");

					$output = json_decode($file_data,TRUE);
					$continue = true;

					for($i = 0; $i < count($output); $i++)
					{
						if($continue == true)
						{
							foreach($output[$i] as $name => $value)
							{
								if(($name == "name" || $name == "id") && (strtoupper($value) == $this->nameCity))
								{
									$this->codeCity = $output[$i]["id"];
									$continue = false;
									$this->returnData();
								}
							}
						} else break;
					}
				}
			}

			private function returnData()
			{
				$file_data = file_get_contents("base/weather.json");

				$output = json_decode($file_data,TRUE);

				$return_data = array();

				for($i = 0; $i < count($output); $i++)
				{
					if($output[$i]["locale"]["id"] == $this->codeCity)
					{
						exit(json_encode($output[$i]["weather"]));
					}
				}
			}
		}
	}
?>