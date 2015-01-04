module.exports = (req, res, next) ->

  return next()  if req.session.authenticated

  res.forbidden "You are not permitted to perform this action."