module.exports.routes = {

  /* TODO Promo */

  '/': 'SiteController.main',
  'get /about': 'SiteController.about',


  /* TODO Panel */

  'get /panel': 'PanelController.index',


  /* TODO Profile */
  'get /profile': 'ProfileController.index',
  'post /user/save/:type': 'ProfileController.save',


  /* TODO Insert */
  'get /insert/makes': 'InsertController.makes',
  'get /insert/models': 'InsertController.models',
  'get /insert/addcolor': 'InsertController.stylesAddColor',
  'get /insert/addparam': 'InsertController.stylesAddParam',
  'get /insert/city': 'InsertController.city',


  /* TODO Authorization / Register */
  'get /login': 'AuthController.login',
  'get /logout': 'AuthController.logout',
  'get /register': 'AuthController.register',

  'post /auth/local': 'AuthController.callback',
  'post /auth/local/:action': 'AuthController.callback',

  'get /auth/:provider': 'AuthController.provider',
  'get /auth/:provider/callback': 'AuthController.callback',
  'get /auth/:provider/:action': 'AuthController.callback',


};
