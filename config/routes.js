module.exports.routes = {

  /* TODO Promo */

  '/': 'SiteController.main',
  'get /about': 'SiteController.about',


  /* TODO Panel */

  'get /panel': 'PanelController.index',
  'get /profile': 'ProfileController.index',



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
