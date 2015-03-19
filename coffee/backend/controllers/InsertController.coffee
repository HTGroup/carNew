request = require("request")
InsertController =
    makes: (req, res) ->
      return 1;
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
      res.json(1)
      return

    models: (req, res) ->
      return 1;

      Makes.find().exec (err, makes)->
        console.lo
        addModelsInterval(makes, 0)

      res.send(1)

    spec: ()->
      # https://api.edmunds.com/api/vehicle/v2/styles/200477465/equipment?availability=standard&equipmentType=OTHER&name=SPECIFICATIONS&fmt=json&api_key=zsx3jzwjkk9ke7zq4ze9mjp3
      # https://api.edmunds.com/api/vehicle/v2/styles/200477465/equipment?availability=standard&equipmentType=OTHER&name=EXTERIOR_DIMENSIONS&fmt=json&api_key=zsx3jzwjkk9ke7zq4ze9mjp3





module.exports = InsertController

addModelsInterval = (make, keyMake)->
  if keyMake >= 61
    return console.log("end")
  console.log(keyMake+1, make[keyMake].niceName, make[keyMake].id)
  request {
    url: "https://api.edmunds.com/api/vehicle/v2/"+make[keyMake].niceName+"/models?view=basic&fmt=json&api_key=zsx3jzwjkk9ke7zq4ze9mjp3"
    json: true
  }, (error, response, body) ->
    if !error and response.statusCode == 200
      model = body.models
      styles = []
      for key, val of model
        years = []
        styles[key] = []
        for keyY, year of val.years
          years.push(year.year)

          for keyS, style of year.styles
            styles[key].push({
              "edmundsId": style.id
              "name": style.name
              "body": style.submodel.body
              "modelName": style.submodel.modelName
              "niceName": style.submodel.niceName
              "trim": style.trim
              "year": year.year
            })
        model[key].years = unique(years)
        model[key].edmundsId = model[key].id
        model[key].make = make[keyMake].id
        delete model[key].id
      Models.create(model).exec (err, data)->
        for key, model of data
          for st, style of styles[key]
            styles[key][st].model = model.id
          Styles.create(styles[key]).exec (err, data)->
            #console.log(err, data)
        #console.log(key, model[key])
      setTimeout(->
        addModelsInterval(make, keyMake+1)
      , 1500
      )



unique = (arr) ->
  obj = {}
  i = 0
  while i < arr.length
    str = arr[i]
    obj[str] = true
    # запомнить строку в виде свойства объекта
    i++
  Object.keys obj
