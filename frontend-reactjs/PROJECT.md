### Quickstart

1. **Install dependencies**

    `npm install`

2. **Run server**

   `npm start`
   
   > should be running at http://localhost:3000/
   
   ###### Depends on backend running at http://localhost:4000/api

   > or change `REACT_APP_API_BASE_URL` in package.json `npm start`
   
### Stack
   
  - [react](https://reactjs.org/)
  - [axios](https://github.com/axios/axios)
  - [moment](https://momentjs.com/)
  - [styled-components](https://www.styled-components.com/)
  - [jest](https://jestjs.io/)
  - [enzyme](https://airbnb.io/enzyme/)
  
  
### Project Structure

```
├── /
|   ├── config/
|   |   └── ...
|   ├── scripts/
|   |   └── ...
|   ├── src/
|   |   ├── components/
|   |   |   └── ...
|   |   ├── containers/
|   |   |   └── ...
|   |   ├── services/
|   |   |   └── ...
|   |   ├── utils/
|   |   |   └── ...
|   |   └── ...
|   └── ...
└── ...
```

### Tests

- **npm test**
