const res = JSON.parse(localStorage.getItem('res')).data.Search
const resLen = res.length

const movieSearchRes = document.querySelector('.result')

const searchTerm = decodeURI(window.location.href).split(/(?=\&)/)[0].split(/(?<=\=)/)[1]
const searchResLen = decodeURI(window.location.href).split(/(?=\&)/)[1].split(/(?<=\=)/)[1]
const pageIdx = decodeURI(window.location.href).split(/(?=\&)/)[2].split(/(?<=\=)/)[1]

movieSearchRes.innerHTML = "<p><span>\"" + searchTerm + "\"</span> 검색 결과 총 <span>" + searchResLen + " </span>개</p>"

const movieListEl = document.getElementById('movieList')


for (let i = (pageIdx * 8) - 7; i <= (pageIdx * 8); i++) {
  let movieEl = document.createElement('div')
  movieEl.classList.add('movie')
  movieEl.innerHTML =
    "<img src=" + res[i-1].Poster + " class=\"moviePoster\" />" +
    "<p class=\"movieTitle\">" + res[i-1].Title + "</p>" +
    "<div class=\"movieYear\">" + res[i-1].Year + "</div>"
  
  movieListEl.appendChild(movieEl)

  if (i === resLen) break
}


// Pagination
const paginationEl = document.querySelector('.pagination')

for (let i = 1; i <= parseInt(resLen / 8) + 1; i++) {
  paginationEl.innerHTML += 
    "<a href=\"../movieSearchSucc/success.html?searchTerm=" + searchTerm + "&resLen=" + searchResLen + "&page=" + i + "\">" + i + "</a>"
}
