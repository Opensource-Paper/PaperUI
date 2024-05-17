window.addEventListener('load', loadLibrary);

// import libraries

function loadLibrary() {
  // Add CSS links
  var cssLinks = [
    'components/button/dev/button-dev.css',
    'components/switch/dev/switch-dev.css',
    'components/input/dev/input-dev.css',
    'components/checkbox/dev/checkbox-dev.css',
    'components/search/dev/search-dev.css',
    'components/fab/dev/fab-dev.css',
    // Add more CSS links here...
  ];

  cssLinks.forEach(function(link) {
    var cssTag = document.createElement('link');
    cssTag.rel = 'stylesheet';
    cssTag.href = 'https://prism-ui.com/' + link;
    document.head.appendChild(cssTag);
  });

  // Add JS scripts
  var jsScripts = [
    'components/button/dev/button-dev.js',
    'components/switch/dev/switch-dev.js',
    'components/input/dev/input-dev.js',
    'components/checkbox/dev/checkbox-dev.js',
    'components/search/dev/search-dev.js',
    'components/fab/dev/fab-dev.js',
    // Add more JS scripts here...
  ];

  jsScripts.forEach(function(script) {
    var jsTag = document.createElement('script');
    jsTag.src = 'https://prism-ui.com/' + script;
     jsTag.async = true;
    document.head.appendChild(jsTag);
  });
}
