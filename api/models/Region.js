(function() {
  var Region;

  Region = {
    schema: true,
    connection: "someMongodbServer",
    attributes: {
      uid: {
        type: "integer"
      },
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
