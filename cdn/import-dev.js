window.addEventListener('load', loadLibrary);

// import libraries

function loadLibrary() {
  // Add CSS links
  var cssLinks = [
    'components/button/button.css',
    'components/switch/switch.css',
    'components/input/input-dev.css',
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
    'components/button/button.js',
    'components/switch/switch.js',
    'components/input/input-dev.js',
    // Add more JS scripts here...
  ];

  jsScripts.forEach(function(script) {
    var jsTag = document.createElement('script');
    jsTag.src = 'https://prism-ui.com/' + script;
    document.head.appendChild(jsTag);
  });
}
