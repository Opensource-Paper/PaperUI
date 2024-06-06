import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { Switch } from './internal/switch.js';
import { styles } from './internal/switch-styles.js';
//import { Theme } from './internal/theme.js';

export let MediaCheckbox = class MediaCheckbox extends Switch {
};
MediaCheckbox.styles = [styles];
MediaCheckbox = __decorate([
    customElement('media-checkbox')
], MediaCheckbox);