(function() {
  var Models;

  Models = {
    schema: true,
    connection: "someMongodbServer",
    attributes: {
      edmundsId: {
        type: "string"
      },
      name: {
        type: "string"
      },
      niceName: {
        type: "string"
      },
      years: {
        type: "array"
      },
      make: {
        model: 'Makes',
        required: true
      },
      confirmed: {
        type: "integer",
        defaultsTo: 0
      }
    }
  };

  module.exports = Models;

}).call(this);
