<?php
// Routes

$app->get('/[{name}]', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->view->render($response, 'index.twig', $args);
});

$app->get('/api/locale/similarname/[{name}]', function ($request, $response, $args) {
    $name = isset($args['name']) ? $args['name'] : null; 
    $locales = $this->weatherLocaleApiService->getLocalesBySimilarName($name);
    
    return $response->withJson($locales, $locales['status_code']);
});

$app->get('/api/locale/{id}/weather', function ($request, $response, $args) {
    $weather = $this->weatherLocaleApiService->getWeatherByLocaleId($args['id']);
    
    return $response->withJson($weather, $locales['status_code']);
});
