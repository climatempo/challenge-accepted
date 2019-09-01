<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<?php 
	// Carregando arquivos js para assets
	if (isset($js) && $js) {
	    foreach ($js as $path) {
	        ?>
	        <script src="<?php echo $path . "?v=" . date('H:i:s'); ?>" type="text/javascript"></script>
	        <?php
	    }
	}
?>
<!-- Carrega arquivo js do sistema -->
<script type="text/javascript" src="<?php echo base_url().'assets/js/script.js?v='. date('H:i:s'); ?>"></script>
</body>
</html>
<!-- Script por Matheus Pavanetti 01-09-2019 -->