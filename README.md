<p align="center">
<img alt="Logo Banner" src="https://paperui.com/banner/banner.svg?sanitize=true"/>
<br/>

<!--<div align="center"><a href='https://ko-fi.com/brick_wall' target='_blank'><img height='30' style='border:0px;height:41px;' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' margin-top="10px" alt='Buy Me a Coffee at ko-fi.com'/></a></div>-->
<div align="left">The Paper UI library allows users to easily import and style a wide range of components with a singular cdn link.</div>
<div align="left">

[Documentation](https://paperui.com/)

</div>

## Installation

### CDN

Import Paper UI web components using CDN. The import-min.js file will automatically import all styles and JavaScript files into the ```<head>```.

```html
<script type="module" src="https://unpkg.com/paperui-web"></script>
```
#### 🚧 Development
```html
<script type="module" src="https://unpkg.com/paperui-web"></script>
```

### NPM

Install Paper UI web components using [npm and node](https://nodejs.org/en).

```bash
npm install paperui-web
```

## Import

Import element definitions from ```paperui-web/<component>/<component>.js```.

```index.js```

```js
import 'paperui-web/switch/switch.js';
import 'paperui-web/checkbox/checkbox.js';
```

## Usage

Use the ```<component-name>``` tag in HTML markup. Refer to the [Component Docs](https://paperui.com) for more guidance on using each component. That's it 🎉.

```HTML```

```html
<media-button-filled>Filled</media-button-filled>
<media-button-outlined>Outlined</media-button-outlined>
```

```html
<media-switch></media-switch>
<media-switch disabled checked></media-switch>
```

<!--<p align="center">
<img alt="Logo Banner" src="https://paperui.com/banner/switch.gif?sanitize=true"/>
<br/>-->

Check out the demo on [codepen](https://codepen.io/GreenestGoat/pen/BaeZpvo).

## Copyright and license

Licensed under the MIT License, Copyright © 2024-present Opensource-Paper.

See [LICENSE](https://github.com/Opensource-Paper/PaperUI/blob/main/LICENSE) for more information.
