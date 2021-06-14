const searchTermEls = document.querySelectorAll('span.searchTerm')
const searchTermElsContent = decodeURI(window.location.href).split(/(?<==)/)[1]

const searchTermElsContentLen = searchTermElsContent.length
console.log(searchTermElsContent)

if (searchTermElsContentLen <= 10) {
  searchTermEls.forEach(searchTermEl => {
    searchTermEl.textContent = searchTermElsContent
  })
} else if (searchTermElsContentLen <= 30 && searchTermElsContentLen > 10 ) {
  searchTermEls[0].textContent = `${searchTermElsContent.slice(0, 10)}...`
  searchTermEls[1].textContent = `${searchTermElsContent.slice(0, 30)}`
} else {
  searchTermEls[0].textContent = `${searchTermElsContent.slice(0, 10)}...`
  searchTermEls[1].textContent = `${searchTermElsContent.slice(0, 30)}...`
}