// Find all elements with the specified classes
const buttons = document.querySelectorAll('media-button-filled, media-button-text, media-button-outlined');

// Function to apply or remove text decoration based on link existence
const applyTextDecoration = (button) => {
  const link = button.getAttribute('link');
  if (link) {
    button.style.textDecoration = 'underline';
  } else {
    button.style.textDecoration = 'none';
  }
};

// Function to handle mutations in the DOM
const handleMutations = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'link') {
      const button = mutation.target;
      applyTextDecoration(button);
    }
  }
};

// Create a new mutation observer
const observer = new MutationObserver(handleMutations);

// Add click event listener and start observing mutations for each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const link = button.getAttribute('link');
    if (link) {
      window.location.href = link;
    } else {
      console.log('Button clicked');
    }
  });

  applyTextDecoration(button);
  observer.observe(button, { attributes: true });
});
