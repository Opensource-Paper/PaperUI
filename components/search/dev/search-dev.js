// Get all media-search elements
const mediaSearchList = document.querySelectorAll('media-search');

// Iterate over each media-search element
mediaSearchList.forEach(mediaSearch => {
  // Create the label, input, and svg elements
  const searchInput = document.createElement('input');
  searchInput.setAttribute('type', 'search');
  searchInput.setAttribute('name', 'search');
  searchInput.setAttribute('placeholder', 'Search');
  searchInput.setAttribute('required', '');

  const searchSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  searchSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  searchSvg.setAttribute('width', '24');
  searchSvg.setAttribute('height', '24');
  searchSvg.setAttribute('viewBox', '0 0 24 24');
  searchSvg.setAttribute('fill', 'none');
  searchSvg.setAttribute('stroke', 'currentColor');
  searchSvg.setAttribute('stroke-width', '2');
  searchSvg.setAttribute('stroke-linecap', 'round');
  searchSvg.setAttribute('stroke-linejoin', 'round');
  searchSvg.classList.add('lucide', 'lucide-search');

  const searchCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  searchCircle.setAttribute('cx', '11');
  searchCircle.setAttribute('cy', '11');
  searchCircle.setAttribute('r', '8');

  const searchPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  searchPath.setAttribute('d', 'm21 21-4.3-4.3');

  searchSvg.appendChild(searchCircle);
  searchSvg.appendChild(searchPath);

  // Append the input and svg elements to the label
  mediaSearch.appendChild(searchSvg);
  mediaSearch.appendChild(searchInput);
});
