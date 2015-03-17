(function() {
  var Models;

  Models = {
    schema: true,
    connection: "someMongodbServer",
    attributes: {
      edmundsId: {
        type: "integer"
      },
      name: {
        type: "string"
      },
      niceName: {
        type: "string"
      },
      modelName: {
        type: "string"
      },
      body: {
        type: "string"
      },
      trim: {
        type: "string"
      },
      years: {
        type: "integer"
      },
      make: {
        model: 'Makes',
        required: true
      }
    }
  };

  module.exports = Models;

}).call(this);
