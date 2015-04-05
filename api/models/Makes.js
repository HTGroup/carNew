(function() {
  var Makes;

  Makes = {
    schema: true,
    connection: "someMysqlServer",
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
        collection: "Models",
        via: "makes"
      },
      confirmed: {
        type: "integer",
        defaultsTo: 0
      }
    }
  };

  module.exports = Makes;

}).call(this);
