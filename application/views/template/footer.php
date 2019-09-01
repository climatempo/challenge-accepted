<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<?php 
	// Carregando arquivos js
	if (isset($js) && $js) {
	    foreach ($js as $path) {
	        ?>
	        <script src="<?php echo $path . "?v=" . date('H:i:s'); ?>" type="text/javascript"></script>
	        <?php
	    }
	}
?>
</body>
</html>
<!-- Script por Matheus Pavanetti 01-09-2019 -->