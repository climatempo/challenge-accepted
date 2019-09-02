### Quickstart

1. **Install dependencies**

      `composer install`

2. **Create `.env` file of `.env.example` and set:**
      
      - APP_ENV=
      - APP_SECRET=
      - ES_HOST=
      - REDIS_HOST=
      - REDIS_PORT=

2. **Run server**

    `docker-compose up`
   
   > should be running at http://localhost:4000/api

3. **Populate Elasticsearch**
  
    `docker exec -it backendphp php bin/console elasticsearch:populate`
   
### Stack
   
  - [symfony](https://symfony.com)
  - [elasticsearch](https://www.elastic.co/)
  - [redis](https://redis.io/)
  - [phpunit](https://phpunit.de/)
  - [cors](https://github.com/nelmio/NelmioCorsBundle)
  - [docker](https://www.docker.com/)
  
  
### Project Structure

```
├── /
|   ├── bin/
|   |   └── ...
|   ├── config/
|   |   └── ...
|   ├── public/
|   |   └── ...
|   ├── src/
|   |   ├── Command/
|   |   |   └── ...
|   |   ├── Controller/
|   |   |   └── ...
|   |   ├── Model/
|   |   |   └── ...
|   |   ├── Service/
|   |   |   └── ...
|   |   └── ...
|   └── tests/
|   |   └── ...
|   └── ...
└── ...
```

### Tests

  ##### Create `phpunit.xml` file of `phpunit.xml.dist`

  SET TESTS ENVIRONMENTS:

    `
      <env name="ES_HOST" value=""/>
      <env name="REDIS_HOST" value=""/>
      <env name="REDIS_PORT" value=""/>
    `

  **execute:** `docker exec -it backendphp php bin/phpunit`
