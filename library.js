function loadLibrary() {
  // Add CSS links
  var cssLinks = [
    '/components/button/button.css',
    '/components/switch/switch.css',
  ];

  cssLinks.forEach(function(link) {
    var cssTag = document.createElement('link');
    cssTag.rel = 'stylesheet';
    cssTag.href = link;
    document.head.appendChild(cssTag);
  });

  // Add JS scripts
  var jsScripts = [
    '/components/button/button.js',
    '/components/switch/switch.js',
  ];

  jsScripts.forEach(function(script) {
    var jsTag = document.createElement('script');
    jsTag.src = script;
    document.head.appendChild(jsTag);
  });
}
