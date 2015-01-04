hashPassword = (passport, next) ->
  if passport.password
    bcrypt.hash passport.password, 10, (err, hash) ->
      passport.password = hash
      next err, passport
      return

  else
    next null, passport
  return
bcrypt = require("bcryptjs")

Passport =
  schema: true
  connection: "someMongodbServer"
  attributes:

    protocol:
      type: "alphanumeric"
      required: true

    password:
      type: "string"
      minLength: 8

    provider:
      type: "alphanumericdashed"

    identifier:
      type: "string"

    tokens:
      type: "json"

    user:
      model: "User"
      required: true

    validatePassword: (password, next) ->
      bcrypt.compare password, @password, next
      return

  beforeCreate: (passport, next) ->
    hashPassword passport, next
    return

  beforeUpdate: (passport, next) ->
    hashPassword passport, next
    return

module.exports = Passport