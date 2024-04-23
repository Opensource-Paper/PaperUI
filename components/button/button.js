// Find all elements with the specified classes
const buttons = document.querySelectorAll('media-button-filled, media-button-text, media-button-outlined');

// Add click event listener to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Retrieve the specified link from the button's attribute
    const link = button.getAttribute('link');

    // Redirect to the specified link or perform default action
    if (link) {
      window.location.href = link;
    } else {
      console.log('Button clicked');
    }
  });

  // Apply text style if link is present
  const link = button.getAttribute('link');
  if (link) {
    button.style.textDecoration = 'underline';
  }
});
