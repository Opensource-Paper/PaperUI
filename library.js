function loadLibrary() {
  // Add CSS links
  var cssLinks = [
    '/components/',
    'https://path/to/cdn/switch.css',
  ];

  cssLinks.forEach(function(link) {
    var cssTag = document.createElement('link');
    cssTag.rel = 'stylesheet';
    cssTag.href = link;
    document.head.appendChild(cssTag);
  });

  // Add JS scripts
  var jsScripts = [
    'https://path/to/cdn/button.js',
    'https://path/to/cdn/switch.js',
  ];

  jsScripts.forEach(function(script) {
    var jsTag = document.createElement('script');
    jsTag.src = script;
    document.head.appendChild(jsTag);
  });
}
