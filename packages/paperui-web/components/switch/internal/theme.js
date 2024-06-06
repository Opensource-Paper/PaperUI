class MediaSwitch extends HTMLElement {
    static get observedAttributes() {
      return ['theme', 'style'];
    }
  
    constructor() {
      super();
      this.theme = null;
      this.themeStyles = null;
      this.customStyles = null;
    }
  
    connectedCallback() {
      this.applyTheme();
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'theme') {
        this.theme = newValue;
        this.applyTheme();
      } else if (name === 'style') {
        this.customStyles = newValue;
        this.updateStyles();
      }
    }
  
    applyTheme() {
      if (this.hasAttribute('theme')) {
        this.applyCustomTheme();
      } else if (paperui && paperui.mediaswitch && paperui.mediaswitch.theme) {
        this.theme = paperui.mediaswitch.theme;
        this.applyCustomTheme();
      } else {
        this.applyDefaultTheme();
      }
    }
  
    applyCustomTheme() {
      const themes = {
        'Material Green': `
          --media-switch-color: #e3e9e9;
          --media-switch-handle-color: #006a6a;
          --media-switch-outline-color: rgba(94, 94, 94, .5);
          --media-switch-checked-color: #006a6a;
          --media-switch-checked-handle-color: #e3e9e9;
          --media-switch-checked-outline-color: #006a6a;
        `,
        'Indigo': `
          --media-switch-color: #E6E0E9;
          --media-switch-handle-color: #49454F;
          --media-switch-outline-color: #79747E;
          --media-switch-checked-color: #6750A4;
          --media-switch-checked-handle-color: #EADDFF;
          --media-switch-checked-outline-color: #6750A4;
        `,
        'Indigo Light': `
          --media-switch-color: #E6E0E9;
          --media-switch-handle-color: #49454F;
          --media-switch-outline-color: #79747E;
          --media-switch-checked-color: #6750A4;
          --media-switch-checked-handle-color: #EADDFF;
          --media-switch-checked-outline-color: #6750A4;
        `,
        'Indigo Dark': `
          --media-switch-color: #36343B;
          --media-switch-handle-color: #938F99;
          --media-switch-outline-color: #938F99;
          --media-switch-checked-color: #D0BCFF;
          --media-switch-checked-handle-color: #4F378B;
          --media-switch-checked-outline-color: #D0BCFF;
        `,
        'Scarlet': `
          --media-switch-color: #E9E0E0;
          --media-switch-handle-color: #4F4545;
          --media-switch-outline-color: #7E7474;
          --media-switch-checked-color: #A45050;
          --media-switch-checked-handle-color: #FFDDDD;
          --media-switch-checked-outline-color: #A45050;
        `,
        'Scarlet Light': `
          --media-switch-color: #E9E0E0;
          --media-switch-handle-color: #4F4545;
          --media-switch-outline-color: #7E7474;
          --media-switch-checked-color: #A45050;
          --media-switch-checked-handle-color: #FFDDDD;
          --media-switch-checked-outline-color: #A45050;
        `,
        'Scarlet Dark': `
          --media-switch-color: #3B3434;
          --media-switch-handle-color: #998F8F;
          --media-switch-outline-color: #998F8F;
          --media-switch-checked-color: #FFBCBC;
          --media-switch-checked-handle-color: #8B3737;
          --media-switch-checked-outline-color: #FFBCBC;
        `,
        'Default': `
          --media-switch-color: #ffffff;
          --media-switch-handle-color: #000000;
          --media-switch-outline-color: rgba(94, 94, 94, .5);
          --media-switch-checked-color: #000000;
          --media-switch-checked-handle-color: #ffffff;
          --media-switch-checked-outline-color: rgba(0, 0, 0, 1);
        `,
        'Default Light': `
          --media-switch-color: #ffffff;
          --media-switch-handle-color: #000000;
          --media-switch-outline-color: rgba(94, 94, 94, .5);
          --media-switch-checked-color: #000000;
          --media-switch-checked-handle-color: #ffffff;
          --media-switch-checked-outline-color: rgba(0, 0, 0, 1);
        `,
        'Default Dark': `
          --media-switch-color: #000000;
          --media-switch-handle-color: #ffffff;
          --media-switch-outline-color: rgba(255, 255, 255, .5);
          --media-switch-checked-color: #ffffff;
          --media-switch-checked-handle-color: #000000;
          --media-switch-checked-outline-color: #ffffff;
        `
      };
  
      this.themeStyles = themes[this.theme] || null;
      this.updateStyles();
    }
  
    applyDefaultTheme() {
      this.themeStyles = null;
      this.updateStyles();
    }
  
    updateStyles() {
      let styles = '';
      if (this.themeStyles) {
        styles += this.themeStyles;
      }
      if (this.customStyles) {
        styles += `;${this.customStyles}`;
      }
      this.style.cssText = styles || `
        --media-switch-color: #ffffff;
        --media-switch-handle-color: #000000;
        --media-switch-outline-color: rgba(94, 94, 94, .5);
        --media-switch-checked-color: #000000;
        --media-switch-checked-handle-color: #ffffff;
        --media-switch-checked-outline-color: rgba(0, 0, 0, 1);
      `;
    }
  }
  
  customElements.define('media-switch', MediaSwitch);