// Changing Code summary text
document.querySelectorAll('div[data-code-filename]').forEach(div => {
  let filename = div.getAttribute('data-code-filename');
  let summary = div.querySelector('summary');
  summary.innerText = filename;
  // Edit 2025/12/07
  // gives code file divs added with the quarto-html add-code-files filter the cell class so that they are able to be toggled
  div.classList.add('cell')
})
