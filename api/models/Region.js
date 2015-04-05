(function() {
  var Region;

  Region = {
    schema: true,
    connection: "someMysqlServer",
    attributes: {
      name: {
        type: "string"
      },
      cities: {
        collection: 'City',
        via: 'region_id'
      }
    }
  };

  module.exports = Region;

}).call(this);
