const app = require("./server");
const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
});
