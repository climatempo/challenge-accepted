import * as log4js from 'log4js';

log4js.configure({
	appenders: {
		out: { type: 'stdout', },
		cheese: { type: 'file', filename: './logs/app.log', },
	},
	categories: { default: { appenders: ['out', 'cheese'], level: 'info', }, },
});

export default log4js.getLogger();