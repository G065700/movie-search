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

  let innerHtmlStr1 = null

  if (res[i-1].Poster === "N/A") {
    innerHtmlStr1 = "<div class=\"noMoviePoster\"><p>해당 영화는<br/>포스터가<br/>없습니다.</p></div>"
  } else {
    innerHtmlStr1 = "<img src=" + res[i-1].Poster + " class=\"moviePoster\" />"
  }

  const innerHtmlStr2 = "<p class=\"movieTitle\">" + res[i-1].Title + "</p>" +
  "<div class=\"movieYear\">" + res[i-1].Year + "</div>"

  movieEl.innerHTML = innerHtmlStr1 + innerHtmlStr2

  movieListEl.appendChild(movieEl)

  if (i === resLen) break
}


// Pagination
const paginationEl = document.querySelector('.pagination')

for (let i = 1; i <= parseInt(resLen / 8) + 1; i++) {
  paginationEl.innerHTML += 
    "<a href=\"../movieSearchSucc/success.html?searchTerm=" + searchTerm + "&resLen=" + searchResLen + "&page=" + i + "\">" + i + "</a>"
}
