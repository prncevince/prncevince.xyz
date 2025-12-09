// Edit 2025/12/07-08
// This is located in the quarto html template at:
//  _quarto-cli/quarto-x.x.xxx-macos/share/formats/html/templates/quarto-html.ejs
// It's been extracted here because it's been edited in the template directly 
// ... which usually is not prefered b/c changes are not tracked to the quarto directory
// to fix this, quarto html templates (different than Pandoc) should be able to be edited outside of the quarto directory

// To allow for div.sourceCode-container wrapper used in sourceCode.css / sourceCode.js
function toggleCodeHandler(show) {
  return function(e) {
    // const detailsSrc = window.document.querySelectorAll(".cell > details > .sourceCode");
    // const detailsSrc = window.document.querySelectorAll(".cell > details .sourceCode.cell-code");
    const detailsSrc = window.document.querySelectorAll('.cell > details div[class="sourceCode"], .cell > details .sourceCode.cell-code');
    for (let i=0; i<detailsSrc.length; i++) {
      const details = detailsSrc[i].parentElement.parentElement;
      if (show) {
        details.open = true;
      } else {
        details.removeAttribute("open");
      }
    }
    // const cellCodeDivs = window.document.querySelectorAll(".cell > .sourceCode");
    // const cellCodeDivs = window.document.querySelectorAll(".cell > .sourceCode.cell-code");
    const cellCodeDivs = window.document.querySelectorAll(".cell > .sourceCode");
    const fromCls = show ? "hidden" : "unhidden";
    const toCls = show ? "unhidden" : "hidden";
    for (let i=0; i<cellCodeDivs.length; i++) {
      const codeDiv = cellCodeDivs[i];
      if (codeDiv.classList.contains(fromCls)) {
        codeDiv.classList.remove(fromCls);
        codeDiv.classList.add(toCls);
      } 
    }
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