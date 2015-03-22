(function() {
  var User;

  User = {
    schema: true,
    connection: "someMongodbServer",
    attributes: {
      name: {
        type: "string"
      },
      phone: {
        type: "string"
      },
      birthdate: {
        type: "date"
      },
      avatar: {
        type: "string"
      },
      city: {
        model: 'City'
      },
      job: {
        type: "string"
      },
      email: {
        type: "email",
        unique: true
      },
      passports: {
        collection: "Passport",
        via: "user"
      }
    }
  };

  module.exports = User;

}).call(this);
