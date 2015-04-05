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
          Makes.create(makes).exec (data)->
            console.log(data)
        return
      res.json(1)
      return

    models: (req, res) ->
      return 1;
      Makes.find().exec (err, makes)->
        addModelsInterval(makes, 0)

      res.send(1)


    stylesAddColor: (req, res) ->
      return 1;
      TrimsModel.find().exec (err, styles)->
        addColorStyle(styles, 0)

      res.send(1)

    stylesAddParam: (req, res) ->
      return 1;
      TrimsModel.destroy({ year: { '>': '2015' }}).exec (err, styles)->
        console.log(23)
      return 1;
      TrimsModel.find().sort("edmundsId").exec (err, styles)->
        addParamStyle(styles, 0)

      res.send(1)

    city: (req, res)->
      return 1;

      Region.find().exec (err,r)->
        for key, val of r
          console.log(val)
          City.update({region_id: val.uid}, {region_id: val.id}).exec (err,c)->
            console.log(c)

      res.send(1)


    spec: ()->
      # https://api.edmunds.com/api/vehicle/v2/styles/200477465/equipment?availability=standard&equipmentType=OTHER&name=SPECIFICATIONS&fmt=json&api_key=zsx3jzwjkk9ke7zq4ze9mjp3
      # https://api.edmunds.com/api/vehicle/v2/styles/200477465/equipment?availability=standard&equipmentType=OTHER&name=EXTERIOR_DIMENSIONS&fmt=json&api_key=zsx3jzwjkk9ke7zq4ze9mjp3





module.exports = InsertController


addParamStyle = (style, styleKey)->
  if styleKey >= 45368
    return console.log("end")
  console.log(styleKey+1, style[styleKey].name, style[styleKey].edmundsId)
  request {
    url: "https://api.edmunds.com/api/vehicle/v2/styles/"+style[styleKey].edmundsId+"?view=full&fmt=json&api_key=zsx3jzwjkk9ke7zq4ze9mjp3"
    json: true
  }, (error, response, body) ->
    if !error and response.statusCode == 200
      TrimsModel.update({id: style[styleKey].id},{transmission: body.transmission, engine: body.engine}, (err, trim)->
        console.log(styleKey, err, style[styleKey].name)
      )
    setTimeout(->
      addParamStyle(style, styleKey+1)
    , 2000
    )


addColorStyle = (style, styleKey)->
  if styleKey >= 45368
    return console.log("end")
  request {
    url: "https://api.edmunds.com/api/vehicle/v2/styles/"+style[styleKey].edmundsId+"/colors?category=Exterior&fmt=json&api_key=zsx3jzwjkk9ke7zq4ze9mjp3"
    json: true
  }, (error, response, body) ->
    if !error and response.statusCode == 200
      colors = []

      if(body.colors.length)
        for key, val of body.colors
          colors.push(
            name: val.name
            edmundsId: val.id
            color: if val.colorChips? then val.colorChips.primary.hex else ""
          )

      TrimsModel.update({id: style[styleKey].id},{colors: colors}, (err, trim)->
        console.log(styleKey+1, err, style[styleKey].name)
      )
    setTimeout(->
      addColorStyle(style, styleKey+1)
    , 2000
    )




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
        model[key].makes = make[keyMake].id
        delete model[key].id
      Models.create(model).exec (err, data)->
        for key, model of data
          for st, style of styles[key]
            styles[key][st].models = model.id
          TrimsModel.create(styles[key]).exec (err, data)->
            console.log("TrimsModel", err)
        #console.log(key, model[key])
      setTimeout(->
        addModelsInterval(make, keyMake+1)
      , 2000
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
