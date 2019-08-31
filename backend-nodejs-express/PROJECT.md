### Quickstart

1. **Install dependencies**

    `npm install`

2. **Run server**

    Easy: `docker-compose up`

    Manual:

      SET ENVIRONMENTS:

        > create envs: `npm run envs:generate`
        
        // change `.env` and `.env.test`:
       
        - CACHE_HOST
        - CACHE_PORT
        - CACHE_PREFIX
        - ES_HOST

        // after elasticsearch up: `npm run es:populate`

      SERVER: `npm start` or `npm run prod`

      **Or just `npm start`, the application will work if the secondary services do not work. Just won't perform as well :p**
   
   
   > should be running at http://localhost:4000/api
   
### Stack
   
  - [expressjs](http://expressjs.com/)
  - [elasticsearch](https://www.elastic.co/)
  - [redis](https://redis.io/)
  - [docker](https://www.docker.com/)
  - [jest](https://jestjs.io/)
  - [supertest](https://github.com/visionmedia/supertest)
  
  
### Project Structure

```
├── /
|   ├── config/
|   |   └── ...
|   ├── scripts/
|   |   └── ...
|   ├── src/
|   |   ├── services/
|   |   |   └── ...
|   |   ├── utils/
|   |   |   └── ...
|   |   └── ...
|   └── tests/
|   |   └── ...
|   └── ...
└── ...
```

### Tests

- **npm test**
