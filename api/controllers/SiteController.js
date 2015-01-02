/**
 * Created by Ihor on 01.01.2015.
 */
module.exports = {
    main: function(req, res){
        var passport = require('passport');
        console.log(req.user, passport, req.session, res.locals.user, res.user)
        res.view();
    }
}