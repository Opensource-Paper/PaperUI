// Find all elements with the specified classes
const Fabs = document.querySelectorAll('media-fab-filled, media-fab-text, media-fab-outlined');

// Function to apply or remove size based on the value of the size attribute
const applySize = (fab) => {
  const size = fab.getAttribute('size');
  let height, width;

  if (size === 'small') {
    height = '35px';
    width = '35px';
  } else if (size === 'large') {
    height = '65px';
    width = '65px';
  } else {
    // Default to normal size if size attribute is not specified or invalid
    height = '50px';
    width = '50px';
  }

  fab.style.minHeight = height;
  fab.style.minWidth = width;
  fab.style.maxHeight = height;
  fab.style.maxWidth = width;
};

// Function to handle mutations in the DOM
const handleMutations = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'size') {
      const fab = mutation.target;
      applySize(fab);
    }
  }
};

// Create a new mutation observer
const observer = new MutationObserver(handleMutations);

// Apply size and start observing mutations for each fab
Fabs.forEach(fab => {
  applySize(fab);
  observer.observe(fab, { attributes: true });
});
