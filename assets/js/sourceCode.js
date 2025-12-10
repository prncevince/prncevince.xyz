// wraps div.sourceCode elements in grid containers to:
// appropriately set width of container to max-content
// allows source code blocks to fill page on small screens
// and to position source code copy button correctly
sourceCodes = document.querySelectorAll('div.sourceCode')
function wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}
function wrapIn(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.childNodes[0].appendChild(el);
}
if (sourceCodes.length > 0) {
  // wrapper.setAttribute('class', 'sourceCode-container')
  sourceCodes.forEach(n => {
    wrapper_outer = document.createElement('div')
    wrapper_outer.classList.add('sourceCode-container-outer')
    wrapper_inner = document.createElement('div')
    wrapper_inner.classList.add('sourceCode-container-inner')
    wrapper_outer.appendChild(wrapper_inner)
    wrapIn(n, wrapper_outer)
  });
  copyButtons = document.querySelectorAll('pre.sourceCode > button.code-copy-button')
  sCodeInContainers = document.querySelectorAll('.sourceCode-container-inner')
  copyButtons.forEach(n => {
    pre = document.createElement('pre')
    pre.classList.add('sourceCode', 'copy-button')
    wrap(n, pre)
  });
  preCopyButtons = document.querySelectorAll('.sourceCode.copy-button')
  sCodeInContainers.forEach((n, i) => n.appendChild(preCopyButtons[i]))
}
