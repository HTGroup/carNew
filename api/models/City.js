(function() {
  var City;

  City = {
    schema: true,
    connection: "someMysqlServer",
    attributes: {
      name: {
        type: "string"
      },
      users: {
        collection: "User",
        via: "city"
      },
      region_id: {
        model: 'Region'
      }
    }
  };

  module.exports = City;

}).call(this);
