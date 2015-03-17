request = require("request")
InsertController =
    makes: (req, res) ->
      request {
        url: "http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=zsx3jzwjkk9ke7zq4ze9mjp3"
        json: true
      }, (error, response, body) ->
        if !error and response.statusCode == 200
          makes = body.makes
          for key, val of makes
            years = []
            for keyM, model of val.models
              for keyY, year of model.years
                years.push(year.year)

            makes[key].years = unique(years)
            makes[key].edmundsId = makes[key].id
            delete makes[key].models
            delete makes[key].id
            console.log makes
        # Print the json response
          ###Makes.create(makes).exec (data)->
            console.log(data)###
        return
      return

    models: (req, res) ->


      Makes.find().exec (err, makes)->
        console.log(makes)
        addModelsInterval(makes)





module.exports = InsertController

key = 3;
addModelsInterval = (make)->
  request {
    url: "https://api.edmunds.com/api/vehicle/v2/"+make[key].niceName+"/models?view=basic&fmt=json&api_key=zsx3jzwjkk9ke7zq4ze9mjp3"
    json: true
  }, (error, response, body) ->
    if !error and response.statusCode == 200
      model = body.models

      for key, val of model
        years = []
        for keyY, year of val.years
          years.push(year.year)

        model[key].years = unique(years)
      console.log model


unique = (arr) ->
  obj = {}
  i = 0
  while i < arr.length
    str = arr[i]
    obj[str] = true
    # запомнить строку в виде свойства объекта
    i++
  Object.keys obj
