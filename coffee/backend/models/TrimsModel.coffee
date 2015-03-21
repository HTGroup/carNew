TrimsModel =
  schema: false
  connection: "someMongodbServer"
  attributes:
    edmundsId:
      type: "integer"

    name:
      type: "string"

    body:
      type: "string"

    modelName:
      type: "string"

    niceName:
      type: "string"

    trim:
      type: "string"

    year:
      type: "integer"

    colors:
      type: "array"

    transmission:
      type: "json"

    engine:
      type: "json"

    model:
      model:'Models'
      required: true

module.exports = TrimsModel
