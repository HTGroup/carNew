(function() {
  var Makes;

  Makes = {
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
      years: {
        type: "array"
      },
      models: {
        collection: 'Models',
        via: 'make'
      }
    }
  };

  module.exports = Makes;

}).call(this);
