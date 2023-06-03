const { constants } = require("./Constants");

const errorHandler = (err, req, resp, next) => {
  const statusCode = resp.statusCode ? resp.statusCode : 500;

  switch (statusCode) {
    case constants.NOT_FOUND:
      resp.json({
        title: "Not Found",
        message: err.message,
        stackTrack: err.stack,
      });
      break;
    case constants.VALIDATION_ERROR:
      resp.json({
        title: "Validation Faild",
        message: err.message,
        stackTrack: err.stack,
      });
      break;
    case constants.FORBBIDDEN:
      resp.json({
        title: "Forbbiden",
        message: err.message,
        stackTrack: err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      resp.json({
        title: "unauthories",
        message: err.message,
        stackTrack: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      resp.json({
        title: "server error",
        message: err.message,
        stackTrack: err.stack,
      });

    default:
      console.log("Pta nahi");
      break;
  }
};

module.exports = errorHandler;

// if we need to use this errorHandler, we need to apply in our server
