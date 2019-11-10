const routes = require('express').Router();

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const options = require('../swagger');

const localesControllerv = require('./app/Controllers/localesController');
const weatherController = require('./app/Controllers/weatherController');

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJsDoc(options);

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
/**
 * @swagger
 * /weather/{id}:
 *  get:
 *    summary: Get a weathers by ID
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *    description: Use to request all weather by id city
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.get('/weather/:id', weatherController.show);

/**
 * @swagger
 * /locales:
 *  get:
 *    summary: Get all locales
 *    description: Use to request all cities
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.get('/locales', localesControllerv.index);

/**
 * @swagger
 * /locales/city:
 *  get:
 *   summary: Get a locale by name
 *   parameters:
 *    - in: query
 *      name: search
 *      schema:
 *        type: string
 *      required: true
 *   description: Use to request city by name
 *   responses:
 *      '200':
 *        description: A successful response
 */
routes.get('/locales/city', localesControllerv.show);

module.exports = routes;
