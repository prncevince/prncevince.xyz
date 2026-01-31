s = document.querySelector('nav#quarto-sidebar')
sm = s.querySelector('.sidebar-menu-container')
ss = s.querySelector('div.sidebar-search > div#quarto-search')
ss.insertAdjacentHTML(
  'afterbegin',
  '<input type="text" placeholder="Filter Problems ..." id="sidebar-input", onkeyup="linkFilter()">'
)
ss.insertAdjacentHTML('beforeend', '<span class="clear-icon" id="clearBtn">×</span>')
ssi = ss.querySelector('#sidebar-input')
ssx = ss.querySelector('#clearBtn')

// first 2 links are Euler page & section toggle
a = sm.getElementsByTagName('a')
a = [...a].slice(2)
var  x= [];
[...a].forEach(n => x.push(n.innerText))

function linkFilter() {
  var filter, i;
  filter = ssi.value.toUpperCase();
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].innerText
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].parentElement.parentElement.style.display = ""
    } else {
      a[i].parentElement.parentElement.style.display = "none"
    }
  }
}
ssi.addEventListener('input', function() {
  // Show the 'x' only when there is text
  if (ssi.value.length > 0) {
    ssx.style.display = 'block';
  } else {
    ssx.style.display = 'none';
  }
});
ssx.addEventListener('click', function() {
  // Clear the input value
  ssi.value = '';
  ssx.style.display = 'none';
  // Manually trigger an input event if your filter logic depends on it
  ssi.dispatchEvent(new Event('keyup')); 
});