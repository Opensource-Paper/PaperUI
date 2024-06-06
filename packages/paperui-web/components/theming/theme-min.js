class MediaSwitch extends HTMLElement{static get observedAttributes(){return['theme','style']}
constructor(){super();this.theme=null;this.themeStyles=null;this.customStyles=null}
connectedCallback(){this.applyTheme()}
attributeChangedCallback(name,oldValue,newValue){if(name==='theme'){this.theme=newValue;this.applyTheme()}else if(name==='style'){this.customStyles=newValue;this.updateStyles()}}
applyTheme(){if(this.hasAttribute('theme')){this.applyCustomTheme()}else if(paperui&&paperui.mediaswitch&&paperui.mediaswitch.theme){this.theme=paperui.mediaswitch.theme;this.applyCustomTheme()}else{this.applyDefaultTheme()}}
applyCustomTheme(){const themes={'Material Green':`
        --media-switch-color: #e3e9e9;
        --media-switch-handle-color: #006a6a;
        --media-switch-outline-color: rgba(94, 94, 94, .5);
        --media-switch-checked-color: #006a6a;
        --media-switch-checked-handle-color: #e3e9e9;
        --media-switch-checked-outline-color: #006a6a;
      `,'Indigo':`
        --media-switch-color: #E6E0E9;
        --media-switch-handle-color: #49454F;
        --media-switch-outline-color: #79747E;
        --media-switch-checked-color: #6750A4;
        --media-switch-checked-handle-color: #EADDFF;
        --media-switch-checked-outline-color: #6750A4;
      `,'Indigo Light':`
        --media-switch-color: #E6E0E9;
        --media-switch-handle-color: #49454F;
        --media-switch-outline-color: #79747E;
        --media-switch-checked-color: #6750A4;
        --media-switch-checked-handle-color: #EADDFF;
        --media-switch-checked-outline-color: #6750A4;
      `,'Indigo Dark':`
        --media-switch-color: #36343B;
        --media-switch-handle-color: #938F99;
        --media-switch-outline-color: #938F99;
        --media-switch-checked-color: #D0BCFF;
        --media-switch-checked-handle-color: #4F378B;
        --media-switch-checked-outline-color: #D0BCFF;
      `,'Scarlet':`
        --media-switch-color: #E9E0E0;
        --media-switch-handle-color: #4F4545;
        --media-switch-outline-color: #7E7474;
        --media-switch-checked-color: #A45050;
        --media-switch-checked-handle-color: #FFDDDD;
        --media-switch-checked-outline-color: #A45050;
      `,'Scarlet Light':`
        --media-switch-color: #E9E0E0;
        --media-switch-handle-color: #4F4545;
        --media-switch-outline-color: #7E7474;
        --media-switch-checked-color: #A45050;
        --media-switch-checked-handle-color: #FFDDDD;
        --media-switch-checked-outline-color: #A45050;
      `,'Scarlet Dark':`
        --media-switch-color: #3B3434;
        --media-switch-handle-color: #998F8F;
        --media-switch-outline-color: #998F8F;
        --media-switch-checked-color: #FFBCBC;
        --media-switch-checked-handle-color: #8B3737;
        --media-switch-checked-outline-color: #FFBCBC;
      `,'Default':`
        --media-switch-color: #ffffff;
        --media-switch-handle-color: #000000;
        --media-switch-outline-color: rgba(94, 94, 94, .5);
        --media-switch-checked-color: #000000;
        --media-switch-checked-handle-color: #ffffff;
        --media-switch-checked-outline-color: rgba(0, 0, 0, 1);
      `,'Default Light':`
        --media-switch-color: #ffffff;
        --media-switch-handle-color: #000000;
        --media-switch-outline-color: rgba(94, 94, 94, .5);
        --media-switch-checked-color: #000000;
        --media-switch-checked-handle-color: #ffffff;
        --media-switch-checked-outline-color: rgba(0, 0, 0, 1);
      `,'Default Dark':`
        --media-switch-color: #000000;
        --media-switch-handle-color: #ffffff;
        --media-switch-outline-color: rgba(255, 255, 255, .5);
        --media-switch-checked-color: #ffffff;
        --media-switch-checked-handle-color: #000000;
        --media-switch-checked-outline-color: #ffffff;
      `};this.themeStyles=themes[this.theme]||null;this.updateStyles()}
applyDefaultTheme(){this.themeStyles=null;this.updateStyles()}
updateStyles(){let styles='';if(this.themeStyles){styles+=this.themeStyles}
if(this.customStyles){styles+=`;${this.customStyles}`}
this.style.cssText=styles||`
      --media-switch-color: #ffffff;
      --media-switch-handle-color: #000000;
      --media-switch-outline-color: rgba(94, 94, 94, .5);
      --media-switch-checked-color: #000000;
      --media-switch-checked-handle-color: #ffffff;
      --media-switch-checked-outline-color: rgba(0, 0, 0, 1);
    `}}
customElements.define('media-switch',MediaSwitch);class MediaCheckbox extends HTMLElement{static get observedAttributes(){return['theme','style']}
constructor(){super();this.theme=null;this.themeStyles=null;this.customStyles=null}
connectedCallback(){this.applyTheme()}
attributeChangedCallback(name,oldValue,newValue){if(name==='theme'){this.theme=newValue;this.applyTheme()}else if(name==='style'){this.customStyles=newValue;this.updateStyles()}}
applyTheme(){if(this.hasAttribute('theme')){this.applyCustomTheme()}else if(paperui&&paperui.mediacheckbox&&paperui.mediacheckbox.theme){this.theme=paperui.mediacheckbox.theme;this.applyCustomTheme()}else{this.applyDefaultTheme()}}
applyCustomTheme(){const themes={'Material Green':`
        --media-checkbox-color: #e3e9e9;
        --media-checkbox-handle-color: #006a6a;
        --media-checkbox-outline-color: rgba(94, 94, 94, .5);
        --media-checkbox-checked-color: #006a6a;
        --media-checkbox-checked-handle-color: #e3e9e9;
        --media-checkbox-checked-outline-color: #006a6a;
      `,'Indigo':`
        --media-checkbox-color: #E6E0E9;
        --media-checkbox-handle-color: #49454F;
        --media-checkbox-outline-color: #79747E;
        --media-checkbox-checked-color: #6750A4;
        --media-checkbox-checked-handle-color: #EADDFF;
        --media-checkbox-checked-outline-color: #6750A4;
      `,'Indigo Light':`
        --media-checkbox-color: #E6E0E9;
        --media-checkbox-handle-color: #49454F;
        --media-checkbox-outline-color: #79747E;
        --media-checkbox-checked-color: #6750A4;
        --media-checkbox-checked-handle-color: #EADDFF;
        --media-checkbox-checked-outline-color: #6750A4;
      `,'Indigo Dark':`
        --media-checkbox-color: #36343B;
        --media-checkbox-handle-color: #938F99;
        --media-checkbox-outline-color: #938F99;
        --media-checkbox-checked-color: #D0BCFF;
        --media-checkbox-checked-handle-color: #4F378B;
        --media-checkbox-checked-outline-color: #D0BCFF;
      `,'Scarlet':`
        --media-checkbox-color: #E9E0E0;
        --media-checkbox-handle-color: #4F4545;
        --media-checkbox-outline-color: #7E7474;
        --media-checkbox-checked-color: #A45050;
        --media-checkbox-checked-handle-color: #FFDDDD;
        --media-checkbox-checked-outline-color: #A45050;
      `,'Scarlet Light':`
        --media-checkbox-color: #E9E0E0;
        --media-checkbox-handle-color: #4F4545;
        --media-checkbox-outline-color: #7E7474;
        --media-checkbox-checked-color: #A45050;
        --media-checkbox-checked-handle-color: #FFDDDD;
        --media-checkbox-checked-outline-color: #A45050;
      `,'Scarlet Dark':`
        --media-checkbox-color: #3B3434;
        --media-checkbox-handle-color: #998F8F;
        --media-checkbox-outline-color: #998F8F;
        --media-checkbox-checked-color: #FFBCBC;
        --media-checkbox-checked-handle-color: #8B3737;
        --media-checkbox-checked-outline-color: #FFBCBC;
      `,'Default':`
        --media-checkbox-color: #ffffff;
        --media-checkbox-handle-color: #000000;
        --media-checkbox-outline-color: rgba(94, 94, 94, .5);
        --media-checkbox-checked-color: #000000;
        --media-checkbox-checked-handle-color: #ffffff;
        --media-checkbox-checked-outline-color: rgba(0, 0, 0, 1);
      `,'Default Light':`
        --media-checkbox-color: #ffffff;
        --media-checkbox-handle-color: #000000;
        --media-checkbox-outline-color: rgba(94, 94, 94, .5);
        --media-checkbox-checked-color: #000000;
        --media-checkbox-checked-handle-color: #ffffff;
        --media-checkbox-checked-outline-color: rgba(0, 0, 0, 1);
      `,'Default Dark':`
        --media-checkbox-color: #000000;
        --media-checkbox-handle-color: #ffffff;
        --media-checkbox-outline-color: rgba(255, 255, 255, .5);
        --media-checkbox-checked-color: #ffffff;
        --media-checkbox-checked-handle-color: #000000;
        --media-checkbox-checked-outline-color: #ffffff;
      `};this.themeStyles=themes[this.theme]||null;this.updateStyles()}
applyDefaultTheme(){this.themeStyles=null;this.updateStyles()}
updateStyles(){let styles='';if(this.themeStyles){styles+=this.themeStyles}
if(this.customStyles){styles+=`;${this.customStyles}`}
this.style.cssText=styles||`
      --media-checkbox-color: #ffffff;
      --media-checkbox-handle-color: #000000;
      --media-checkbox-outline-color: rgba(94, 94, 94, .5);
      --media-checkbox-checked-color: #000000;
      --media-checkbox-checked-handle-color: #ffffff;
      --media-checkbox-checked-outline-color: rgba(0, 0, 0, 1);
    `}}
customElements.define('media-checkbox',MediaCheckbox);class MediaSearch extends HTMLElement{static get observedAttributes(){return['theme','style']}
constructor(){super();this.theme=null;this.themeStyles=null;this.customStyles=null}
connectedCallback(){this.applyTheme()}
attributeChangedCallback(name,oldValue,newValue){if(name==='theme'){this.theme=newValue;this.applyTheme()}else if(name==='style'){this.customStyles=newValue;this.updateStyles()}}
applyTheme(){if(this.hasAttribute('theme')){this.applyCustomTheme()}else if(paperui&&paperui.mediasearch&&paperui.mediasearch.theme){this.theme=paperui.mediasearch.theme;this.applyCustomTheme()}else{this.applyDefaultTheme()}}
applyCustomTheme(){const themes={'Material Green':`
        --media-search-color: #e3e9e9;
        --media-search-handle-color: #006a6a;
        --media-search-outline-color: rgba(94, 94, 94, .5);
      `,'Indigo':`
        --media-search-color: #E6E0E9;
        --media-search-handle-color: #49454F;
        --media-search-outline-color: #79747E;
      `,'Indigo Light':`
        --media-search-color: #E6E0E9;
        --media-search-handle-color: #49454F;
        --media-search-outline-color: #79747E;
      `,'Indigo Dark':`
        --media-search-color: #36343B;
        --media-search-handle-color: #938F99;
        --media-search-outline-color: #938F99;
      `,'Scarlet':`
        --media-search-color: #E9E0E0;
        --media-search-handle-color: #4F4545;
        --media-search-outline-color: #7E7474;
      `,'Scarlet Light':`
        --media-search-color: #E9E0E0;
        --media-search-handle-color: #4F4545;
        --media-search-outline-color: #7E7474;
      `,'Scarlet Dark':`
        --media-search-color: #3B3434;
        --media-search-handle-color: #998F8F;
        --media-search-outline-color: #998F8F;
      `,'Default':`
        --media-search-color: #ffffff;
        --media-search-handle-color: #000000;
        --media-search-outline-color: rgba(94, 94, 94, .5);
      `,'Default Light':`
        --media-search-color: #ffffff;
        --media-search-handle-color: #000000;
        --media-search-outline-color: rgba(94, 94, 94, .5);
      `,'Default Dark':`
        --media-search-color: #000000;
        --media-search-handle-color: #ffffff;
        --media-search-outline-color: rgba(255, 255, 255, .5);
      `};this.themeStyles=themes[this.theme]||null;this.updateStyles()}
applyDefaultTheme(){this.themeStyles=null;this.updateStyles()}
updateStyles(){let styles='';if(this.themeStyles){styles+=this.themeStyles}
if(this.customStyles){styles+=`;${this.customStyles}`}
this.style.cssText=styles||`
      --media-search-color: #ffffff;
      --media-search-handle-color: #000000;
      --media-search-outline-color: rgba(94, 94, 94, .5);
    `}}
customElements.define('media-search',MediaSearch)
