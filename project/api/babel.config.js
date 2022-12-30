module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					node: "current",
				},
			},
		],
		"@babel/preset-typescript",
	],
	plugins: [
		[
			"module-resolver",
			{
				alias: {
					"@": "./src",
					"@db": "./src/db",
					"@utils": "./src/utils",
					"@types": "./src/types",
					"@errors": "./src/errors",
					"@routes": "./src/routes",
					"@schemas": "./src/schemas",
					"@services": "./src/services",
					"@controllers": "./src/controllers",
					"@middlewares": "./src/middlewares",
					"@repositories": "./src/repositories",
				},
			},
		],
	],
	ignore: ["**/*.spec.ts"],
}
