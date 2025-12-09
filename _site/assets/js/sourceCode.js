// wraps div.sourceCode elements in grid containers to appropriately set width of container to max-content
// allows source code blocks to fill page on small screens
sourceCodes = document.querySelectorAll('div.sourceCode')
function wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}
if (sourceCodes.length > 0) {
  // wrapper.setAttribute('class', 'sourceCode-container')
  sourceCodes.forEach(n => {
    wrapper = document.createElement('div')
    wrapper.classList.add('sourceCode-container')
    wrap(n, wrapper)
  });
}