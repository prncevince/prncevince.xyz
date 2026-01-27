// This is located in the quarto html template at:
//  _quarto-cli/quarto-x.x.xxx-macos/share/formats/html/templates/quarto-html.ejs
// It's been extracted here because it's been edited in the template directly
// ... which usually is not prefered b/c changes are not tracked to the quarto directory
// to fix this, quarto html templates (different than Pandoc) should be able to be edited outside of the quarto directory

const onCopySuccess = function(e) {
  // button target
  const button = e.trigger;
  // don't keep focus
  button.blur();
  // flash "checked"
  button.classList.add('code-copy-button-checked');
  var currentTitle = button.getAttribute("title");
  button.setAttribute("title", "<%- language['copy-button-tooltip-success'] %>");


  let tooltip;
  if (window.bootstrap) {
    button.setAttribute("data-bs-toggle", "tooltip");
    button.setAttribute("data-bs-placement", "left");
    button.setAttribute("data-bs-title", "<%- language['copy-button-tooltip-success'] %>");

    tooltip = new bootstrap.Tooltip(button, 
      { trigger: "manual", 
        customClass: "code-copy-button-tooltip",
        // Edit 2026/01/26
        offset: [0, 0]});
    tooltip.show();    
  }

  setTimeout(function() {
    if (tooltip) {
      tooltip.hide();
      button.removeAttribute("data-bs-title");
      button.removeAttribute("data-bs-toggle");
      button.removeAttribute("data-bs-placement");
    }
    button.setAttribute("title", currentTitle);
    button.classList.remove('code-copy-button-checked');
  }, 1000);
  // clear code selection
  e.clearSelection();
}

// Edit 2025/12/10 & 2026/01/26
// with button placement moved from original sibling of <code> element - need update to find <code> element
const getTextToCopy = function(trigger) {
    // const codeEl = trigger.previousElementSibling.cloneNode(true);
    const id_codeEl = trigger.parentElement.previousElementSibling.getAttribute('id');
    const codeEl = document.querySelector('#'+id_codeEl+' code.sourceCode').cloneNode(true);
    for (const childEl of codeEl.children) {
      if (isCodeAnnotation(childEl)) {
        childEl.remove();
      }
    }
    return codeEl.innerText;
}

// Edit 2025/12/07-08
// To allow for div.sourceCode-container wrapper used in sourceCode.css / sourceCode.js
function toggleCodeHandler(show) {
  return function(e) {
    // const detailsSrc = window.document.querySelectorAll(".cell > details > .sourceCode");
    // const detailsSrc = window.document.querySelectorAll(".cell > details .sourceCode.cell-code");
    // const detailsSrc = window.document.querySelectorAll('.cell > details div[class="sourceCode"], .cell > details .sourceCode.cell-code');
    const detailsSrc = window.document.querySelectorAll('.cell > details div.sourceCode');
    for (let i=0; i<detailsSrc.length; i++) {
      // const details = detailsSrc[i].parentElement.parentElement;
      const codeDiv = detailsSrc[i];
      const details = codeDiv.parentElement.parentElement.parentElement;
      const fromCls = show ? "hidden" : "unhidden";
      const toCls = show ? "unhidden" : "hidden";
      if (show) {
        details.open = true;
      } else {
        details.removeAttribute("open");
      }
      // below simply ruins the logic - it's unneccsary 
      // believe that Bootstrap handles hiding/not hiding <div> element inside <details> element
      // codeDiv.classList.remove(fromCls);
      // codeDiv.classList.add(toCls);
    }
    // const cellCodeDivs = window.document.querySelectorAll(".cell > .sourceCode");
    // const cellCodeDivs = window.document.querySelectorAll(".cell > .sourceCode.cell-code");
    // const cellCodeDivs = window.document.querySelectorAll(".cell > .sourceCode");
    // const cellCodeDivs = window.document.querySelectorAll('.cell div[class="sourceCode"]');
    // unnecessary?
    // const cellCodeDivs = window.document.querySelectorAll('.cell .sourceCode');
    // const fromCls = show ? "hidden" : "unhidden";
    // const toCls = show ? "unhidden" : "hidden";
    // for (let i=0; i<cellCodeDivs.length; i++) {
    //   const codeDiv = cellCodeDivs[i];
    // for (let i=0; i<detailsSrc.length; i++) {
    //   const codeDiv = detailsSrc[i];
    //   // always == false ... so needs to be editted to reflect in DOM
    //   if (codeDiv.classList.contains(fromCls)) {
    //     codeDiv.classList.remove(fromCls);
    //     codeDiv.classList.add(toCls);
    //   }
    // }
    return false;
  }
}
const hideAllCode = window.document.getElementById("quarto-hide-all-code");
if (hideAllCode) {
  hideAllCode.addEventListener("click", toggleCodeHandler(false));
}
const showAllCode = window.document.getElementById("quarto-show-all-code");
if (showAllCode) {
  showAllCode.addEventListener("click", toggleCodeHandler(true));
}