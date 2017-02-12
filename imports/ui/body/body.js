/**
 * Created by gusanthiago on 2/12/17.
 */
/**
 * Renderiza e controle componentes do corpo da pagina
 */
import { Template } from 'meteor/templating';

import './body.html';

/**
 * Ao inicializar
 */
Template.body.onCreated(() => {
	alert("bug do milenio");
});

/**
 * Helpers
 */
Template.body.helpers({

});

/**
 * Eventos da pagina
 */
Template.body.events({

});
