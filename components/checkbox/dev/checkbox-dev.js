// Get all media-checkbox elements
const mediaCheckboxes = document.querySelectorAll('media-checkbox');

// Create the label, input, and span elements outside the loop
const Checkboxlabel = document.createElement('label');
Checkboxlabel.classList.add('cl-checkbox');

const CheckboxSpan = document.createElement('span');

// Create a mutation observer configuration
const observerConfig = {
  attributes: true, // Observe attribute changes
  attributeFilter: ['disabled', 'checked'] // Only observe 'disabled' and 'checked' attributes
};

// Create a mutation observer callback function
const observerCallback = (mutationsList, observer) => {
  mutationsList.forEach(mutation => {
    const mediaCheckbox = mutation.target;

    // Check if the 'disabled' attribute has changed
    if (mutation.attributeName === 'disabled') {
      const clonedLabel = mediaCheckbox.querySelector('.cl-checkbox');

      if (mediaCheckbox.hasAttribute('disabled')) {
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
      const clonedInput = mediaCheckbox.querySelector('input[type="checkbox"]');

      if (mediaCheckbox.hasAttribute('checked')) {
        clonedInput.checked = true;
      } else {
        clonedInput.checked = false;
      }
    }
  });
};

// Iterate over each media-checkbox element
mediaCheckboxes.forEach(mediaCheckbox => {
  // Clone the label and span elements for each media-checkbox element
  const clonedLabel = label.cloneNode(true);
  const clonedSpan = span.cloneNode(true);

  // Create an input element
  const clonedInput = document.createElement('input');
  clonedInput.setAttribute('type', 'checkbox');

  // Append the cloned input and span elements to the cloned label
  clonedLabel.appendChild(clonedInput);
  clonedLabel.appendChild(clonedSpan);

  // Append the cloned label to the media-checkbox element
  mediaCheckbox.appendChild(clonedLabel);

  // Check if the media-checkbox element has the disabled attribute
  if (mediaCheckbox.hasAttribute('disabled')) {
    // Apply opacity and pointer-events styles to the cloned label
    clonedLabel.style.opacity = '0.25';
    clonedLabel.style.pointerEvents = 'none';
  }

  // Check if the media-checkbox element has the checked attribute
  if (mediaCheckbox.hasAttribute('checked')) {
    clonedInput.checked = true;
  }

  // Create a new mutation observer
  const observer = new MutationObserver(observerCallback);

  // Observe changes on the media-checkbox element
  observer.observe(mediaCheckbox, observerConfig);
});
