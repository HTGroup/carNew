(function() {
  var InsertController, addModelsInterval, key, request, unique;

  request = require("request");

  InsertController = {
    makes: function(req, res) {
      request({
        url: "http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=zsx3jzwjkk9ke7zq4ze9mjp3",
        json: true
      }, function(error, response, body) {
        var key, keyM, keyY, makes, model, val, year, years, _ref, _ref1;
        if (!error && response.statusCode === 200) {
          makes = body.makes;
          for (key in makes) {
            val = makes[key];
            years = [];
            _ref = val.models;
            for (keyM in _ref) {
              model = _ref[keyM];
              _ref1 = model.years;
              for (keyY in _ref1) {
                year = _ref1[keyY];
                years.push(year.year);
              }
            }
            makes[key].years = unique(years);
            makes[key].edmundsId = makes[key].id;
            delete makes[key].models;
            delete makes[key].id;
            console.log(makes);
          }

          /*Makes.create(makes).exec (data)->
            console.log(data)
           */
        }
      });
    },
    models: function(req, res) {
      return Makes.find().exec(function(err, makes) {
        console.log(makes);
        return addModelsInterval(makes);
      });
    }
  };

  module.exports = InsertController;

  key = 3;

  addModelsInterval = function(make) {
    return request({
      url: "https://api.edmunds.com/api/vehicle/v2/" + make[key].niceName + "/models?view=basic&fmt=json&api_key=zsx3jzwjkk9ke7zq4ze9mjp3",
      json: true
    }, function(error, response, body) {
      var keyY, model, val, year, years, _ref;
      if (!error && response.statusCode === 200) {
        model = body.models;
        for (key in model) {
          val = model[key];
          years = [];
          _ref = val.years;
          for (keyY in _ref) {
            year = _ref[keyY];
            years.push(year.year);
          }
          model[key].years = unique(years);
        }
        return console.log(model);
      }
    });
  };

  unique = function(arr) {
    var i, obj, str;
    obj = {};
    i = 0;
    while (i < arr.length) {
      str = arr[i];
      obj[str] = true;
      i++;
    }
    return Object.keys(obj);
  };

}).call(this);
