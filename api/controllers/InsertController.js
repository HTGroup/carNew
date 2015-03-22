(function() {
  var InsertController, addColorStyle, addModelsInterval, addParamStyle, request, unique;

  request = require("request");

  InsertController = {
    makes: function(req, res) {
      return 1;
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
      res.json(1);
    },
    models: function(req, res) {
      return 1;
      Makes.find().exec(function(err, makes) {
        return addModelsInterval(makes, 0);
      });
      return res.send(1);
    },
    stylesAddColor: function(req, res) {
      TrimsModel.find().sort("edmundsId").exec(function(err, styles) {
        return addColorStyle(styles, 3747);
      });
      return res.send(1);
    },
    stylesAddParam: function(req, res) {
      return 1;
      TrimsModel.destroy({
        year: {
          '>': '2015'
        }
      }).exec(function(err, styles) {
        return console.log(23);
      });
      return 1;
      TrimsModel.find().sort("edmundsId").exec(function(err, styles) {
        return addParamStyle(styles, 0);
      });
      return res.send(1);
    },
    city: function(req, res) {
      return 1;
      Region.find().exec(function(err, r) {
        var key, val, _results;
        _results = [];
        for (key in r) {
          val = r[key];
          console.log(val);
          _results.push(City.update({
            region_id: val.uid
          }, {
            region_id: val.id
          }).exec(function(err, c) {
            return console.log(c);
          }));
        }
        return _results;
      });
      return res.send(1);
    },
    spec: function() {}
  };

  module.exports = InsertController;

  addParamStyle = function(style, styleKey) {
    if (styleKey >= 45368) {
      return console.log("end");
    }
    console.log(styleKey + 1, style[styleKey].name, style[styleKey].edmundsId);
    return request({
      url: "https://api.edmunds.com/api/vehicle/v2/styles/" + style[styleKey].edmundsId + "?view=full&fmt=json&api_key=zsx3jzwjkk9ke7zq4ze9mjp3",
      json: true
    }, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        TrimsModel.update({
          id: style[styleKey].id
        }, {
          transmission: body.transmission,
          engine: body.engine
        }, function(err, trim) {
          return console.log(styleKey, err, style[styleKey].name);
        });
      }
      return setTimeout(function() {
        return addParamStyle(style, styleKey + 1);
      }, 2000);
    });
  };

  addColorStyle = function(style, styleKey) {
    if (styleKey >= 45368) {
      return console.log("end");
    }
    console.log(style[styleKey]);
    return request({
      url: "https://api.edmunds.com/api/vehicle/v2/styles/" + style[styleKey].edmundsId + "/colors?category=Exterior&fmt=json&api_key=zsx3jzwjkk9ke7zq4ze9mjp3",
      json: true
    }, function(error, response, body) {
      var colors, key, val, _ref;
      if (!error && response.statusCode === 200) {
        colors = [];
        if (body.colors.length) {
          _ref = body.colors;
          for (key in _ref) {
            val = _ref[key];
            colors.push({
              name: val.name,
              edmundsId: val.id,
              color: val.colorChips != null ? val.colorChips.primary.hex : ""
            });
          }
        }
        TrimsModel.update({
          id: style[styleKey].id
        }, {
          colors: colors
        }, function(err, trim) {
          return console.log(styleKey + 1, err, style[styleKey].name);
        });
      }
      return setTimeout(function() {
        return addColorStyle(style, styleKey + 1);
      }, 2000);
    });
  };

  addModelsInterval = function(make, keyMake) {
    if (keyMake >= 61) {
      return console.log("end");
    }
    console.log(keyMake + 1, make[keyMake].niceName, make[keyMake].id);
    return request({
      url: "https://api.edmunds.com/api/vehicle/v2/" + make[keyMake].niceName + "/models?view=basic&fmt=json&api_key=zsx3jzwjkk9ke7zq4ze9mjp3",
      json: true
    }, function(error, response, body) {
      var key, keyS, keyY, model, style, styles, val, year, years, _ref, _ref1;
      if (!error && response.statusCode === 200) {
        model = body.models;
        styles = [];
        for (key in model) {
          val = model[key];
          years = [];
          styles[key] = [];
          _ref = val.years;
          for (keyY in _ref) {
            year = _ref[keyY];
            years.push(year.year);
            _ref1 = year.styles;
            for (keyS in _ref1) {
              style = _ref1[keyS];
              styles[key].push({
                "edmundsId": style.id,
                "name": style.name,
                "body": style.submodel.body,
                "modelName": style.submodel.modelName,
                "niceName": style.submodel.niceName,
                "trim": style.trim,
                "year": year.year
              });
            }
          }
          model[key].years = unique(years);
          model[key].edmundsId = model[key].id;
          model[key].make = make[keyMake].id;
          delete model[key].id;
        }
        Models.create(model).exec(function(err, data) {
          var st, _ref2, _results;
          _results = [];
          for (key in data) {
            model = data[key];
            _ref2 = styles[key];
            for (st in _ref2) {
              style = _ref2[st];
              styles[key][st].model = model.id;
            }
            _results.push(TrimsModel.create(styles[key]).exec(function(err, data) {}));
          }
          return _results;
        });
        return setTimeout(function() {
          return addModelsInterval(make, keyMake + 1);
        }, 2000);
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
