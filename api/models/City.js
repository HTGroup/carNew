(function() {
  var City;

  City = {
    schema: true,
    connection: "someMongodbServer",
    attributes: {
      uid: {
        type: "integer"
      },
      name: {
        type: "string"
      },
      region_id: {
        model: 'Region'
      },
      users: {
        collection: 'User',
        via: 'city'
      }
    }
  };

  module.exports = City;

}).call(this);
