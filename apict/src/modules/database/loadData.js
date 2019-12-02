module.exports = (() => {

	const fs = require('fs');

	const getDataFromJson = (filePath, encoding = 'utf8') => (
		new Promise((resolve, reject) => {
			fs.readFile(filePath, encoding, (err, contents) => {
				if(err) {
					return reject(err);
				}
				resolve(contents);
			});
		})
			.then(JSON.parse)
	);

	return {
		getData: getDataFromJson,
	};

})();
