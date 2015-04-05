(function() {
  var Models;

  Models = {
    schema: true,
    connection: "someMysqlServer",
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
      makes: {
        model: "Makes"
      },
      trims: {
        collection: "TrimsModel",
        via: "models"
      },
      confirmed: {
        type: "integer",
        defaultsTo: 0
      }
    }
  };

  module.exports = Models;

}).call(this);
