window.addEventListener('load',loadLibrary);function loadLibrary(){var cssLinks=['components/button/button.css','components/switch/switch.css',];cssLinks.forEach(function(link){var cssTag=document.createElement('link');cssTag.rel='stylesheet';cssTag.href='https://greenestgoat.github.io/Prism-UI/'+link;document.head.appendChild(cssTag)});var jsScripts=['components/button/button.js','components/switch/switch.js',];jsScripts.forEach(function(script){var jsTag=document.createElement('script');jsTag.src='https://greenestgoat.github.io/Prism-UI/'+script;document.head.appendChild(jsTag)})}
