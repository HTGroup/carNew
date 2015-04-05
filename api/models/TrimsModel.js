(function() {
  var TrimsModel;

  TrimsModel = {
    schema: false,
    connection: "someMysqlServer",
    attributes: {
      edmundsId: {
        type: "integer"
      },
      name: {
        type: "string"
      },
      body: {
        type: "string"
      },
      modelName: {
        type: "string"
      },
      niceName: {
        type: "string"
      },
      trim: {
        type: "string"
      },
      year: {
        type: "integer"
      },
      colors: {
        type: "json"
      },
      transmission: {
        type: "json"
      },
      engine: {
        type: "json"
      },
      models: {
        model: "Models"
      }
    }
  };

  module.exports = TrimsModel;

}).call(this);
