var cssFilesToInject = [
  'js/jquery-ui/css/no-theme/jquery-ui-1.10.3.custom.min.css',
  'css/font-icons/entypo/css/entypo.css',
  'css/bootstrap.css',
  'css/neon-core.css',
  'css/neon-theme.css',
  'css/neon-forms.css',
  'css/custom.css',
];

var jsFilesToInject = [
  'js/socket.io-1.2.1.js',
  'js/gsap/main-gsap.js',
  'js/jquery-ui/js/jquery-ui-1.10.3.minimal.min.js',
  'js/bootstrap.js',
  'js/joinable.js',
  'js/resizeable.js',
  'js/neon-api.js',
  'js/jvectormap/jquery-jvectormap-1.2.2.min.js',
];

module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
