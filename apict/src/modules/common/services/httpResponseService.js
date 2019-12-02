module.exports = (() => {

	const HttpStatusCodeEnum = require('../enum/httpStatusCodeEnum');

	function success(response, results) {
		return response.status(HttpStatusCodeEnum.SUCCESS).send({"data": results});
	}

	function error(response, error) {
		return response.status(HttpStatusCodeEnum.BAD_REQUEST).send({"error": error});
	}

	function notFound(response, message) {
		return response.status(HttpStatusCodeEnum.NOT_FOUND).send({"message": message});
	}

	return {
		success: success,
		error: error,
		notFound: notFound
	};

})();