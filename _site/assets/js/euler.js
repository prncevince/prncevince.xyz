linkEuler = document.querySelector('a.link-euler')
quartoTitleMeta = document.querySelector('div.quarto-title-meta')
quartoTitleMetaLink = document.createElement('div')
quartoTitleMetaLink.innerHTML = '<div class="quarto-title-meta-heading">Project Euler Link</div><div class="quarto-title-meta-contents"></div>'
quartoTitleMetaLink.querySelector('.quarto-title-meta-contents').insertAdjacentElement('afterbegin', linkEuler)
quartoTitleMeta.children[0].insertAdjacentElement('afterend', quartoTitleMetaLink)