(function() {
  var Styles;

  Styles = {
    schema: true,
    connection: "someMongodbServer",
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
      model: {
        model: 'Models',
        required: true
      }
    }
  };

  module.exports = Styles;

}).call(this);
