const path = require("path");

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        src: resolveSrc("src"),
        "@": resolveSrc("src")
      }
    }
  }
};
