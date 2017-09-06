<?php
namespace model;

abstract class mysqlucas extends \mysqli
{
	public $debug = false;
	public $nopwd = false;
	public $errno_lucas = 0;
	public $error_mysqlucas = '';
    public function __construct($host = null, $user = null, $pass = null, $db = null)
    {

        if (empty($host) && null !== HOST && null !== USER && null !== PASS && null !== DB) {
            $host = HOST;
            $user = USER;
            $pass = PASS;
            $db   = DB;
        } else {
            if ($host == null) {
                error_reporting(E_ALL);
                $this->error_mysqlucas = 'Você deve informar um HOST;';
                return array();
            }
            if ($user == null) {
                error_reporting(E_ALL);
                $this->error_mysqlucas = 'Você deve informar um USUÁRIO;';
                return array();
            }
            if ($pass === null) {
                error_reporting(E_ALL);
                $this->error_mysqlucas = 'Você deve informar uma SENHA;';
                return array();
            }
            if ($db == null) {
                error_reporting(E_ALL);
                $this->error_mysqlucas = 'Você deve informar um BANCO DE DADOS;';
                return array();
            }
        }

        $this->dbname = $db;

        $check = false;
        $check = @fsockopen($host, 3306, $errno, $errstr, 3);

        if (!$check) {
            error_reporting(E_ALL);
            $this->error_mysqlucas = 'O servidor não responde nesse endereço e porta;';
            exit;
        }

        $close = fclose($check);
        error_reporting(E_ALL);
        parent::__construct($host, $user, $pass, $db);
        $this->set_charset("utf8");
        $this->mysqli_prepared_query("SET lc_time_names = 'pt_BR';");
    }

    protected function sanitiza($var = null){
		$var = str_replace('@', ' ', $var);
		$var = str_replace('-', ' ', $var);
		$var = str_replace('+', ' ', $var);
		$var = str_replace('<', ' ', $var);
		$var = str_replace('>', ' ', $var);
		$var = str_replace('(', ' ', $var);
		$var = str_replace(')', ' ', $var);
		$var = str_replace('*', ' ', $var);
		$var = str_replace('~', ' ', $var);
		$var = str_replace('"', ' ', $var);
		return $var;
    }

    protected function verifica_erros($tabela = null, $dados = array())
    {
        // verifica erros

        if (empty($tabela)) {
            error_reporting(E_ALL);
            $this->error_mysqlucas = 'Você deve informar um nome de TABELA como primeiro parâmetro. Sintaxe insert( tabela,dados(array) );';
            $this->errno=1;
            return true;
        }
        if (!is_string($tabela)) {
            error_reporting(E_ALL);
            $this->error_mysqlucas = 'Você deve informar uma variavel string como primeiro parâmetro. Sintaxe insert( tabela(string),dados(array) );';
            $this->errno=1;
            return true;
        }
        if ($dados != '_' && (empty($dados) || !is_array($dados))) {
            error_reporting(E_ALL);
            $this->error_mysqlucas = 'Você deve informar um array multidimensional como segundo parâmetro. Sintaxe insert( tabela(string),dados(array) );';
            $this->errno=1;
            return true;
        }

        $resultset = array();
        if ($result = $this->query('SELECT * FROM INFORMATION_SCHEMA.TABLES where TABLE_NAME="' . $tabela . '"')) {
            while ($linhas = $result->fetch_assoc()) {
                $resultset[] = $linhas;
            }
            $result->close();
        } else {
            error_reporting(E_ALL);
            $this->error_mysqlucas = 'Não foi possível selecionar na tabela INFORMATION_SCHEMA.TABLES;';
            $this->errno=1;
            return true;
        }
        if (empty($resultset)) {
            error_reporting(E_ALL);
            $this->error_mysqlucas = 'Você deve informar uma tabela que exista;';
            $this->errno=1;
            return true;
        }
        return false;
    }

    public function insert($tabela = null, $dados = array(), $permite_funcoes = array(), $debug = false, $roda = true){
    	if ($this->debug){
    		$debug = true;
    	}

        if($this->verifica_erros($tabela, $dados)){
        	return array();
        }
        if (!empty($permite_funcoes)){
        	if($this->verifica_erros($tabela, $permite_funcoes)){
        		return array();
        	}
        }

        //puxa os campos da tabela escolhida e verifica os campos obrigatórios que não são auto_increment e não tem valor padrão

        $campos_da_tabela = array();
        $notnull          = array();
        if ($result = $this->query('SHOW COLUMNS FROM ' . $tabela)) {
            while ($linha = $result->fetch_assoc()) {
                $campos_da_tabela[]               = $linha;
                $campos_por_nome[$linha['Field']] = $linha;
                if ($linha['Null'] == 'NO' && ($linha['Extra'] != 'auto_increment' && (empty($linha['Default']) && $linha['Default'] !== 0 && $linha['Default'] !== '0'))) {
                    $notnull[] = $linha['Field'];
                }
            }
            $result->close();
        } else {
            error_reporting(E_ALL);
            $this->error_mysqlucas = 'Não foi possível executar SHOW COLUMNS;';
            if ($this->debug){
            	echo $this->error_mysqlucas.'<br>';
            	exit;
            }
            $this->errno_lucas = 1;
            return array();
        }

        foreach (array_keys($dados) as $campo) {
            if (!isset($campos_por_nome[$campo])) {
                error_reporting(E_ALL);
                $this->error_mysqlucas = "O campo $campo não existe na tabela.";
                if ($this->debug){
                	echo $this->error_mysqlucas.'<br>';
                	exit;
                }
                $this->errno_lucas = 1;
                return array();
            }
        }

        if ($debug) {$this->debugar($campos_da_tabela, 'Campos da tabela');}

        //verifica a ausência de algum campo obrigatório

        foreach ($notnull as $campo) {
            if (!isset($dados[$campo])){
                error_reporting(E_ALL);
                $this->error_mysqlucas = "Você obrigatoriamente deve fornecer o campo $campo;";
                if ($debug){
                	echo $this->error_mysqlucas.'<br>';
                	exit;
                }
                $this->errno_lucas = 1;
                return array();
            }
        }

        //começa a montar o select iniciando pelos campos informados no array dados
        $query = "INSERT INTO $tabela(" . PHP_EOL;
        $query .= implode(',' . PHP_EOL, array_keys($dados));
        $query .= ") VALUES(" . PHP_EOL;
        foreach ($dados as $campo => $valor) {
            //le o array e se permitir função só inclui no array de valores
            if (in_array($campo, $permite_funcoes)) {
                $inter[] = $valor;
                unset($dados[$campo]);
                continue;
            }

            //verifica se o valor é not null e está vindo null
            if ($valor===null && $campos_por_nome[$campo]['Default']!==null ){
            	$inter[]='DEFAULT';
            	unset($dados[$campo]);
            	//da continue para pular a iteração
            	continue;
            }

            //personalização se o tempo tiver o nome senha
            if (strpos($campo,'senha') && $this->nopwd == false){
                $inter[] = "password(?)";
                //da continue para pular a iteração
                continue;
            }

            //personalização pra datetime aceitando formato brasileiro
            if ($campos_por_nome[$campo]['Type'] == 'datetime') {
                $inter[] = "STR_TO_DATE(?,'%d/%m/%Y %H:%i:%s')";
                //da continue para pular a iteração
                continue;
            }
            if ($campos_por_nome[$campo]['Type'] == 'date') {
                $inter[] = "STR_TO_DATE(?,'%d/%m/%Y')";
                //da continue para pular a iteração
                continue;
            }
            //se não cair em personalizações adiciona a interrogação pura
            $inter[] = '?';
        }
        //adiciona as iterações anteriores separadas por vírgula
        $query .= implode(',' . PHP_EOL, $inter);
        $query .= ")";

        $dados_da_query = array_values($dados);
        if ($debug) {
            $this->debugar($query, 'Query montada');
        }

        if ($debug) {
            $this->debugar($dados_da_query, 'Dados da query');
        }

        if ($debug) {
            $this->debugar($this->preparedQuery($query, $dados_da_query), 'Simulação da query');
        }

        if ($roda) {
            $this->mysqli_prepared_query($query, $dados_da_query, $debug);
        }

        if ($debug) {$this->debugar('vazio', 'Classe inteira');}
    }

    public function replaceINTO($tabela = null, $dados = array(), $permite_funcoes = array(), $debug = false, $roda = true)
    {
    	if ($this->debug){
    		$debug = true;
    	}

        if($this->verifica_erros($tabela, $dados)){
        	return array();
        }
        if (!empty($permite_funcoes)){
        	if($this->verifica_erros($tabela, $permite_funcoes)){
        		return array();
        	}
        }

        //puxa os campos da tabela escolhida e verifica os campos obrigatórios que não são auto_increment e não tem valor padrão

        $campos_da_tabela = array();
        if ($result = $this->query('SHOW COLUMNS FROM ' . $tabela)) {
            while ($linha = $result->fetch_assoc()) {
                $campos_da_tabela[]               = $linha;
                $campos_por_nome[$linha['Field']] = $linha;
                if ($linha['Null'] == 'NO' && ($linha['Extra'] != 'auto_increment' && empty($linha['Default']))) {
                    $notnull[] = $linha['Field'];
                }
            }
            $result->close();
        } else {
            error_reporting(E_ALL);
            $this->error_mysqlucas = 'Não foi possível executar SHOW COLUMNS;';
            if ($debug){
            	echo $this->error_mysqlucas.'<br>';
            }
            $this->errno_lucas = 1;
            return;
        }

        foreach (array_keys($dados) as $campo) {
            if (!isset($campos_por_nome[$campo])) {
                error_reporting(E_ALL);
                $this->error_mysqlucas = "O campo $campo não existe na tabela.";
                if ($debug){
                	echo $this->error_mysqlucas.'<br>';
                }
                $this->errno_lucas = 1;
                return;
            }
        }

        if ($debug) {$this->debugar($campos_da_tabela, 'Campos da tabela');}

        //verifica a ausência de algum campo obrigatório

        foreach ($notnull as $campo) {
            if (!isset($dados[$campo])) {
                error_reporting(E_ALL);
                $this->error_mysqlucas = "Você obrigatoriamente deve fornecer o campo $campo;";
                if ($debug){
                	echo $this->error_mysqlucas.'<br>';
                }
                $this->errno_lucas = 1;
                return;
            }
        }

        //começa a montar o select iniciando pelos campos informados no array dados

        $query = "REPLACE INTO $tabela(" . PHP_EOL;
        $query .= implode(',' . PHP_EOL, array_keys($dados));
        $query .= ") VALUES(" . PHP_EOL;
        foreach ($dados as $campo => $valor) {
            //le o array e se permitir função só inclui no array de valores
            if (in_array($campo, $permite_funcoes)) {
                $inter[] = $valor;
                unset($dados[$campo]);
                continue;
            }

            //verifica se o valor é not null e está vindo null
            if ($valor===null && $campos_por_nome[$campo]['Default']!==null ){
            	$inter[]='DEFAULT';
            	unset($dados[$campo]);
            	//da continue para pular a iteração
            	continue;
            }

            //personalização se o tempo tiver o nome senha
            if (strpos($campo,'senha') && $this->nopwd == false) {
                $inter[] = "password(?)";
                //da continue para pular a iteração
                continue;
            }

            //personalização pra datetime aceitando formato brasileiro
            if ($campos_por_nome[$campo]['Type'] == 'datetime') {
                $inter[] = "STR_TO_DATE(?,'%d/%m/%Y %H:%i:%s')";
                //da continue para pular a iteração
                continue;
            }
            if ($campos_por_nome[$campo]['Type'] == 'date') {
                $inter[] = "STR_TO_DATE(?,'%d/%m/%Y')";
                //da continue para pular a iteração
                continue;
            }
            //se não cair em personalizações adiciona a interrogação pura
            $inter[] = '?';
        }
        //adiciona as iterações anteriores separadas por vírgula
        $query .= implode(',' . PHP_EOL, $inter);
        $query .= ")";

        $dados_da_query = array_values($dados);

        if ($debug) {
            $this->debugar($query, 'Query montada');
        }

        if ($debug) {
            $this->debugar($dados_da_query, 'Dados da query');
        }

        if ($debug) {
            $this->debugar($this->preparedQuery($query, $dados_da_query), 'Simulação da query');
        }

        if ($roda) {
            $this->mysqli_prepared_query($query, $dados_da_query, $debug);
        }

        if ($debug) {$this->debugar('vazio', 'Classe inteira');}
    }

    public function select($tabela = null, $condicoes = array(), $funcao = array(), $limit = 0, $debug = false)
    {

    	if ($this->debug){
    		$debug = true;
    	}

        if (empty($condicoes)) {
            $condicoes = '_';
        }

        if($this->verifica_erros($tabela, $condicoes)){
        	return array();
        }
        if (!empty($funcao)){
        	if($this->verifica_erros($tabela, $funcao)){
        		return array();
        	}
        }

        if ($condicoes == '_') {
            $condicoes = array();
        }

        //puxa os campos da tabela escolhida e verifica os campos obrigatórios que não são auto_increment e não tem valor padrão

        $campos_da_tabela = array();
        if ($result = $this->query('SHOW COLUMNS FROM ' . $tabela)) {
            while ($linha = $result->fetch_assoc()) {
                $campos_da_tabela[]               = $linha;
                $campos_por_nome[$linha['Field']] = $linha;
                if ($linha['Null'] == 'NO' && ($linha['Extra'] != 'auto_increment' && empty($linha['Default']))) {
                    $notnull[] = $linha['Field'];
                }
            }
            $result->close();
        } else {
            error_reporting(E_ALL);
            $this->error_mysqlucas = 'Não foi possível executar SHOW COLUMNS;';
            if ($debug){
            	echo $this->error_mysqlucas.'<br>';
            }
            $this->errno_lucas = 1;
            return;
        }

        foreach (array_keys($condicoes) as $campo) {
            if (!isset($campos_por_nome[$campo])) {
                error_reporting(E_ALL);
                $this->error_mysqlucas = 'O campo $campo não existe na tabela.';
                if ($debug){
                	echo $this->error_mysqlucas.'<br>';
                }
                $this->errno_lucas = 1;
                return;
            }
        }

        if ($debug) {$this->debugar($campos_da_tabela, 'Campos da tabela');}

        //começa a montar o select iniciando pelos campos informados no array dados

        $query = "SELECT" . PHP_EOL;

        foreach (array_keys($campos_por_nome) as $campo) {
            if ($campos_por_nome[$campo]['Type'] == 'date') {
                $query .= "date_format($campo,'%d/%m/%Y') as $campo," . PHP_EOL;
                continue;
            }
            if ($campos_por_nome[$campo]['Type'] == 'datetime' || $campos_por_nome[$campo]['Type'] == 'timestamp') {
                $query .= "date_format($campo,'%d/%m/%Y %h:%i:%s') as $campo," . PHP_EOL;
                continue;
            }
            if ($campos_por_nome[$campo]['Type'] == 'tinyint(1)') {
                $query .= "case when ($campo=true) then 'true' else 'false' END as $campo," . PHP_EOL;
                continue;
            }

            $query .= $campo . ',' . PHP_EOL;
        }

        $query = substr($query, 0, -2);

        $query .= PHP_EOL;

        $query .= " FROM $tabela" . PHP_EOL;

        $query .= "WHERE " . PHP_EOL;

        foreach ($condicoes as $campo => $valor) {

            $query .= "$campo = ";

            //personalização pra datetime aceitando formato brasileiro
            if ($campos_por_nome[$campo]['Type'] == 'datetime' || $campos_por_nome[$campo]['Type'] == 'date') {
                $query .= "STR_TO_DATE(?,'%d/%m/%Y') and" . PHP_EOL;
                //da continue para pular a iteração
                continue;
            }

            if (isset($funcao[$campo])) {
                $query .= $funcao[$campo] . " and" . PHP_EOL;
                //da continue para pular a iteração
                continue;
            }
            //se não cair em personalizações adiciona a interrogação pura
            $query .= '? and' . PHP_EOL;
        }

        $query = substr($query, 0, -4);

        if (intval($limit) > 0) {
            $query .= "LIMIT " . intval($limit);
        }

        $dados_da_query = array_values($condicoes);

        if ($debug) {
            $this->debugar($query, 'Query montada');
        }

        if ($debug) {
            $this->debugar($dados_da_query, 'Dados da query');
        }

        if ($debug) {
            $this->debugar($this->preparedQuery($query, $dados_da_query), 'Simulação da query');
        }

        $this->result = $this->mysqli_prepared_query($query, $dados_da_query, $debug);

        if (count($this->result) == 1){
            foreach ($this->result[0] as $campo => $valor) {
                $this->$campo = $valor;
            }
        }

        if ($debug) {$this->debugar('vazio', 'Classe inteira');}
    }

    public function update($tabela = null, $dados = array(), $condicoes = array(), $permite_funcoes = array(), $debug = false, $roda = true)
    {
    	if ($this->debug){
    		$debug = true;
    	}

        if($this->verifica_erros($tabela, $dados)){
        	return array();
        }
        if (!empty($condicoes)){
        	if($this->verifica_erros($tabela, $condicoes)){
        		return array();
        	}
        }
        if (!empty($permite_funcoes)){
        	if($this->verifica_erros($tabela, $permite_funcoes)){
        		return array();
        	}
        }

        //puxa os campos da tabela escolhida e verifica os campos obrigatórios que não são auto_increment e não tem valor padrão

        $campos_da_tabela = array();
        if ($result = $this->query('SHOW COLUMNS FROM ' . $tabela)) {
            while ($linha = $result->fetch_assoc()) {
                $campos_da_tabela[]               = $linha;
                $campos_por_nome[$linha['Field']] = $linha;
                if ($linha['Null'] == 'NO' && ($linha['Extra'] != 'auto_increment' && empty($linha['Default']))) {
                    $notnull[] = $linha['Field'];
                }
            }
            $result->close();
        } else {
            error_reporting(E_ALL);
            $this->error_mysqlucas = 'Não foi possível executar SHOW COLUMNS;';
            if ($debug){
            	echo $this->error_mysqlucas.'<br>';
            }
            $this->errno_lucas = 1;
            return;
        }

        foreach (array_keys($dados) as $campo){
            if (!isset($campos_por_nome[$campo])){
                error_reporting(E_ALL);
                $this->error_mysqlucas = "O campo $campo não existe na tabela.";
                if ($debug){
                	echo $this->error_mysqlucas.'<br>';
                }
                $this->errno_lucas = 1;
                return;
            }
        }

        foreach (array_keys($condicoes) as $campo) {
            if (!isset($campos_por_nome[$campo])) {
                error_reporting(E_ALL);
                $this->error_mysqlucas = "O campo $campo não existe na tabela.";
                if ($debug){
                	echo $this->error_mysqlucas.'<br>';
                }
                $this->errno_lucas = 1;
                return;
            }
        }

        if ($debug) {$this->debugar($campos_da_tabela, 'Campos da tabela');}

        //começa a montar o select iniciando pelos campos informados no array dados

        $query = "UPDATE $tabela" . PHP_EOL;
        $query .= "SET" . PHP_EOL;
        foreach ($dados as $campo => $valor) {

            $query .= "$campo = ";

            //le o array e se permitir função só inclui no array de valores
            if (in_array($campo, $permite_funcoes)) {
                $query .= "$valor ," . PHP_EOL;
                unset($dados[$campo]);
                //da continue para pular a iteração
                continue;
            }

            //verifica se o valor é not null e está vindo null
            if ($valor===null && $campos_por_nome[$campo]['Default']!==null ){
            	$query .= 'DEFAULT ,' . PHP_EOL;
            	unset($dados[$campo]);
            	//da continue para pular a iteração
            	continue;
            }

            //personalização se o tempo tiver o nome senha
            if (strpos($campo,'senha') && $this->nopwd == false) {
                $query .= "password(?) ," . PHP_EOL;
                //da continue para pular a iteração
                continue;
            }

            //personalização pra datetime aceitando formato brasileiro
            if ($campos_por_nome[$campo]['Type'] == 'datetime') {
                $query .= "STR_TO_DATE(?,'%d/%m/%Y %H:%i:%s') ," . PHP_EOL;
                //da continue para pular a iteração
                continue;
            }
            if ($campos_por_nome[$campo]['Type'] == 'date') {
                $query .= "STR_TO_DATE(?,'%d/%m/%Y') ," . PHP_EOL;
                //da continue para pular a iteração
                continue;
            }
            //se não cair em personalizações adiciona a interrogação pura
            $query .= '? ,' . PHP_EOL;
        }

        $query = substr($query, 0, -2);

        $query .= PHP_EOL . "WHERE " . PHP_EOL;

        foreach ($condicoes as $campo => $valor) {

            $query .= "$campo = ";

            //le o array e se permitir função só inclui no array de valores
            if (in_array($campo, $permite_funcoes)) {
                $query .= "$valor and" . PHP_EOL;
                unset($condicoes[$campo]);
                //da continue para pular a iteração
                continue;
            }

            //personalização pra datetime aceitando formato brasileiro
            if ($campos_por_nome[$campo]['Type'] == 'datetime') {
                $query .= "STR_TO_DATE(?,'%d/%m/%Y') and" . PHP_EOL;
                //da continue para pular a iteração
                continue;
            }
            //se não cair em personalizações adiciona a interrogação pura
            $query .= '? and' . PHP_EOL;
        }

        $query = substr($query, 0, -4);

        $dados_da_query = array_merge(array_values($dados), array_values($condicoes));

        if ($debug) {
            $this->debugar($query, 'Query montada');
        }

        if ($debug) {
            $this->debugar($dados_da_query, 'Dados da query');
        }

        if ($debug) {
            $this->debugar($this->preparedQuery($query, $dados_da_query), 'Simulação da query');
        }

        if ($roda) {
            $this->mysqli_prepared_query($query, $dados_da_query, $debug);
        }

        if ($debug) {$this->debugar('vazio', 'Classe inteira');}
    }

    public function delete($tabela = null, $condicoes = array(), $permite_funcoes = array(), $debug = false, $roda = true)
    {
    	if ($this->debug){
    		$debug = true;
    	}

        //puxa os campos da tabela escolhida e verifica os campos obrigatórios que não são auto_increment e não tem valor padrão

        $campos_da_tabela = array();
        if ($result = $this->query('SHOW COLUMNS FROM ' . $tabela)) {
            while ($linha = $result->fetch_assoc()) {
                $campos_da_tabela[]               = $linha;
                $campos_por_nome[$linha['Field']] = $linha;
                if ($linha['Null'] == 'NO' && ($linha['Extra'] != 'auto_increment' && empty($linha['Default']))) {
                    $notnull[] = $linha['Field'];
                }
            }
            $result->close();
        } else {
            error_reporting(E_ALL);
            $this->error_mysqlucas = 'Não foi possível executar SHOW COLUMNS;';
            if ($debug){
            	echo $this->error_mysqlucas.'<br>';
            }
            $this->errno_lucas = 1;
            return;
        }

        foreach (array_keys($condicoes) as $campo) {
            if (!isset($campos_por_nome[$campo])) {
                error_reporting(E_ALL);
                $this->error_mysqlucas = "O campo $campo não existe na tabela.";
                if ($debug){
                	echo $this->error_mysqlucas.'<br>';
                }
                $this->errno_lucas = 1;
                return;
            }
        }

        if ($debug) {$this->debugar($campos_da_tabela, 'Campos da tabela');}

        //começa a montar o select iniciando pelos campos informados no array dados

        $query = "DELETE from $tabela" . PHP_EOL;

        $query .= PHP_EOL . "WHERE " . PHP_EOL;

        foreach ($condicoes as $campo => $valor) {

            $query .= "$campo = ";

            //le o array e se permitir função só inclui no array de valores
            if (in_array($campo, $permite_funcoes)) {
                $query .= "$valor and" . PHP_EOL;
                unset($condicoes[$campo]);
                //da continue para pular a iteração
                continue;
            }

            //personalização pra datetime aceitando formato brasileiro
            if ($campos_por_nome[$campo]['Type'] == 'datetime') {
                $query .= "STR_TO_DATE(?,'%d/%m/%Y') and" . PHP_EOL;
                //da continue para pular a iteração
                continue;
            }
            //se não cair em personalizações adiciona a interrogação pura
            $query .= '? and' . PHP_EOL;
        }

        $query = substr($query, 0, -4);

        $dados_da_query = array_values($condicoes);

        if ($debug) {
            $this->debugar($query, 'Query montada');
        }

        if ($debug) {
            $this->debugar($dados_da_query, 'Dados da query');
        }

        if ($debug) {
            $this->debugar($this->preparedQuery($query, $dados_da_query), 'Simulação da query');
        }

        if ($roda) {
            $this->mysqli_prepared_query($query, $dados_da_query, $debug);
        }

        if ($debug) {$this->debugar('vazio', 'Classe inteira');}
    }

    public function debugar($var = 'vazio', $titulo = '')
    {
        $titulo = htmlentities($titulo);
        if (!empty($titulo)) {
            echo "<h1>$titulo</h1>";
        }
        if ($var != 'vazio') {
            echo '<pre>';
            print_r($var);
            echo '</pre>';
            return;
        }
        echo '<pre>';
        print_r($this);
        echo '</pre>';
    }

    public function preparedQuery($sql, $params)
    {
    	foreach ($params as &$row){
    		if ($row===null){
    			$row='null';
    		}
    	}
        for ($i = 0; $i < count($params); $i++) {
            $sql = preg_replace('/\?/', $params[$i], $sql, 1);
        }
        return $sql;
    }

    public function mysqli_prepared_query($sql, $params = false, $debug = false)
    {


        if ($debug) {
            $this->debugar($this->preparedQuery($sql, $params), 'Simulação da query');
        }

        if (!empty($params)) {
            foreach ($params as $item) {
                if (trim($item) == '') {
                    $item = null;
                }
            }
        }

        if ($params !== false) {
            $qnt = '';
            for ($i = 1; $i <= count($params); $i++) {
                $qnt .= 's';
            }
            $typeDef = $qnt;
        } else {
            $typeDef = false;
        }



        if ($stmt = mysqli_prepare($this, $sql)) {
            if (count($params) == count($params, 1)) {
                $params     = array($params);
                $multiQuery = false;
            } else {
                $multiQuery = true;
            }

            if ($typeDef) {
                $bindParams           = array();
                $bindParamsReferences = array();
                $bindParams           = array_pad($bindParams, (count($params, 1) - count($params)) / count($params), "");
                foreach ($bindParams as $key => $value) {
                    $bindParamsReferences[$key] = &$bindParams[$key];
                }
                array_unshift($bindParamsReferences, $typeDef);
                $bindParamsMethod = new \ReflectionMethod('mysqli_stmt', 'bind_param');
                $bindParamsMethod->invokeArgs($stmt, $bindParamsReferences);
            }

            $result = array();
            foreach ($params as $queryKey => $query) {
                if ($typeDef && $params) {
                    foreach ($bindParams as $paramKey => $value) {
                        $bindParams[$paramKey] = $query[$paramKey];
                    }
                }
                $queryResult = array();

                if (mysqli_stmt_execute($stmt)) {
                    $resultMetaData = mysqli_stmt_result_metadata($stmt);
                    if ($resultMetaData) {
                        $stmtRow       = array();
                        $rowReferences = array();
                        while ($field = mysqli_fetch_field($resultMetaData)) {
                            $rowReferences[] = &$stmtRow[$field->name];
                        }
                        mysqli_free_result($resultMetaData);
                        $bindResultMethod = new \ReflectionMethod('mysqli_stmt', 'bind_result');
                        $bindResultMethod->invokeArgs($stmt, $rowReferences);
                        while (mysqli_stmt_fetch($stmt)) {
                            $row = array();
                            foreach ($stmtRow as $key => $value) {
                                $row[$key] = $value;
                            }
                            $queryResult[] = $row;
                        }
                        mysqli_stmt_free_result($stmt);
                    } else {
                        $queryResult[] = mysqli_stmt_affected_rows($stmt);
                    }
                } else {
                    $queryResult[] = false;
                    if (!empty($this->error)) $this->error_mysqlucas=$this->error;
                }
                $result[$queryKey] = $queryResult;
            }
            $linhas = $this->affected_rows;
            mysqli_stmt_close($stmt);
        } else {
            $linhas = 0;
            $result = false;
        }
        if (!empty($this->error)) $this->error_mysqlucas=$this->error;
        if (isset($this->error_mysqlucas) && !empty($this->error_mysqlucas)){
        	echo $this->error_mysqlucas;exit;
        }

        if (isset($multiQuery) && $multiQuery) {
            if ($debug){
                echo '<pre>';
                print_r($result);
                print_r($this);
                echo '</pre>';
            }
            $this->affect_rows = $linhas;
            return $result;
        } else {
            if ($debug) {
                echo '<pre>';
                print_r($result[0]);
                print_r($this);
                echo '</pre>';
            }
            $this->affect_rows = $linhas;
            return $result[0];
        }
    }

    public function __set($name, $value)
    {
        $this->$name = $value;
    }

    public function __isset($var)
    {
        return isset($this->$var);
    }

    public function __get($var)
    {
        if (isset($this->$var) && is_array($this->$var)) {
            return $this->$var;
        }
        if (!isset($this->$var)) {
            return null;
        }
        if (in_array($var, $this->permite_html)) {
            $this->$var = preg_replace("/<script.*?\/script>/s", "", $this->$var) ?: $this->$var;
            return $this->$var;
        }
        if (!is_array($this->$var)) {
            return htmlspecialchars($this->$var, ENT_QUOTES, 'UTF-8');
        }
    }

    public function paginacao($atual = 1, $linker = array(), $total = null, $porpagina = null)
    {
    	if (is_array($linker)){
    		$link = $linker[0];
    		$post = $linker[1];
    	}else{
    		$link = $linker;
    		$post = '';
    	}

        if ($total == null){
            $total = ifnull($this->total, 12);
        }
        if ($porpagina == null) {
            $porpagina = ifnull($this->porpagina, 12);
        }

        $paginas = ceil($total / $porpagina);

        $anterior = $atual - 1;
        if ($anterior == 0) {
            $anterior = 1;
        }

        $proxima = $atual + 1;
        if ($proxima > $paginas) {
            $proxima = $paginas;
        }

        $inicio = 1;

        $depois = false;
        $antes  = false;

        if ($paginas > 5) {
            if ($atual < 4) {
                $paginas = 5;
                $depois  = true;
            } elseif ($atual < $paginas && $atual < $paginas - 1) {
                $inicio  = $atual - 2;
                $paginas = 5 + ($inicio - 1);
                $antes   = true;
            } elseif ($atual < $paginas && $atual < $paginas) {
                $inicio  = $atual - 3;
                $paginas = 5 + ($inicio - 1);
                $antes   = true;
            } elseif ($atual == $paginas) {
                $inicio  = $atual - 4;
                $paginas = 5 + ($inicio - 1);
                $antes   = true;
            }
        }

        $nlink  = $link . $anterior . $post;

        $html = "<ul class='pagination '>
						<li>
							<a href='$nlink' aria-label='Anterior' class='anterior'>
								<span aria-hidden='true'>«</span>
							</a>
						</li>";
        if ($antes) {
            $html .= "	<li class='mais'>
							<a aria-label='more'>
								<span aria-hidden='true'>...</span>
							</a>
						</li>";
        }
        for ($i = $inicio; $i <= $paginas; $i++) {
            $nlink  = $link . $i . $post;
            $active = '';
            if ($i == $atual) {$active = 'active';}
            $html .= "	<li class='$active'>
							<a href='$nlink'>
								$i
							</a>
						</li>";
        }
        if ($depois) {
            $html .= "	<li class='mais'>
							<a aria-label='more'>
								<span aria-hidden='true'>...</span>
							</a>
						</li>";
        }
        $nlink  = $link . $proxima . $post;
        $html .= "		<li>
							<a href='$nlink' aria-label='Próximo' class='proximo'>
								<span aria-hidden='true'>»</span>
							</a>
						</li>";
        $html .= "	</ul>";
        return $html;
    }

}