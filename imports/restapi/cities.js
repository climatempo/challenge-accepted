/**
 * Created by gusanthiago on 2/12/17.
 */
/**
 *  Gerencia as requisições de previsao para cidade
 */
import { Meteor } from 'meteor/meteor';

import { Simple } from 'meteor/simple:rest';

/**
 * @param {String}
 */
JsonRoutes.add("get", "/cities/:name", (req, res, next) => {
	let name = req.params.name;

	JsonRoutes.sendResult(res, {
		data: {
			"teste": name
		}
	});
});
