const mediaSwitches = document.querySelectorAll('media-switch');

// Create the label, input, and span elements outside the loop
const label = document.createElement('label');
label.classList.add('switch');

const span = document.createElement('span');
span.classList.add('slider');

// Create a mutation observer configuration
const observerConfig = {
  attributes: true, // Observe attribute changes
  attributeFilter: ['disabled', 'checked'] // Only observe 'disabled' and 'checked' attributes
};

// Create a mutation observer callback function
const observerCallback = (mutationsList, observer) => {
  mutationsList.forEach(mutation => {
    const mediaSwitch = mutation.target;

    // Check if the 'disabled' attribute has changed
    if (mutation.attributeName === 'disabled') {
      const clonedLabel = mediaSwitch.querySelector('label.switch');

      if (mediaSwitch.hasAttribute('disabled')) {
        // Apply opacity and pointer-events styles to the cloned label
        clonedLabel.style.opacity = '0.25';
        clonedLabel.style.pointerEvents = 'none';
      } else {
        clonedLabel.style.opacity = '';
        clonedLabel.style.pointerEvents = '';
      }
    }

    // Check if the 'checked' attribute has changed
    if (mutation.attributeName === 'checked') {
      const clonedInput = mediaSwitch.querySelector('input[type="checkbox"]');

      if (mediaSwitch.hasAttribute('checked')) {
        clonedInput.checked = true;
      } else {
        clonedInput.checked = false;
      }
    }
  });
};

// Iterate over each media-switch element
mediaSwitches.forEach(mediaSwitch => {
  // Clone the label and span elements for each media-switch element
  const clonedLabel = label.cloneNode(true);
  const clonedSpan = span.cloneNode(true);

  // Create an input element
  const clonedInput = document.createElement('input');
  clonedInput.setAttribute('type', 'checkbox');

  // Append the cloned input and span elements to the cloned label
  clonedLabel.appendChild(clonedInput);
  clonedLabel.appendChild(clonedSpan);

  // Append the cloned label to the media-switch element
  mediaSwitch.appendChild(clonedLabel);

  // Check if the media-switch element has the disabled attribute
  if (mediaSwitch.hasAttribute('disabled')) {
    // Apply opacity and pointer-events styles to the cloned label
    clonedLabel.style.opacity = '0.25';
    clonedLabel.style.pointerEvents = 'none';
  }

  // Check if the media-switch element has the checked attribute
  if (mediaSwitch.hasAttribute('checked')) {
    clonedInput.checked = true;
  }

  // Create a new mutation observer
  const observer = new MutationObserver(observerCallback);

  // Observe changes on the media-switch element
  observer.observe(mediaSwitch, observerConfig);
});
