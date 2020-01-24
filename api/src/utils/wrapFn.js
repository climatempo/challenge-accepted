const wrapAsync = f => {
  return (req, res, next) => {
    (async () => {
      try {
        await f(req, res, next);
      } catch (err) {
        next(err);
      }
    })();
  };
};

const wrap = f => {
  return (req, res, next) => {
    (() => {
      try {
        f(req, res, next);
      } catch (err) {
        next(err);
      }
    })();
  };
};

module.exports = {
  wrapAsync,
  wrap,
};
