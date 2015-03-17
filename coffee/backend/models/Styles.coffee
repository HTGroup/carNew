Styles =
  schema: true
  connection: "someMongodbServer"
  attributes:
    edmundsId:
      type: "integer"

    name:
      type: "string"

    niceName:
      type: "string"

    years:
      type: "array"

    model:
      model:'Models'
      required: true

module.exports = Styles
