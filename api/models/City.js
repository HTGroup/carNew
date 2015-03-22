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
      }
    }
  };

  module.exports = City;

}).call(this);
