// localStorage에 저장된, OMDb로부터 수신된 데이터 할당
const res = JSON.parse(localStorage.getItem('res')).data.Search

// localStorage에 저장된, OMDb로부터 수신된 데이터의 크기
const resLen = res.length

// URI로부터 전달된 검색어, 데이터 크기가 노출될 요소
const movieSearchRes = document.querySelector('.result')

// URI로부터 전달된 검색어 추출
const searchTerm = decodeURI(window.location.href).split(/(?=\&)/)[0].split(/(?<=\=)/)[1]
// URI로부터 전달된 데이터 크기 추출
const searchResLen = decodeURI(window.location.href).split(/(?=\&)/)[1].split(/(?<=\=)/)[1]
// URI로부터 전달된 페이지 번호 추출
const pageIdx = decodeURI(window.location.href).split(/(?=\&)/)[2].split(/(?<=\=)/)[1]

// 검색 결과 영역에 URI로부터 전달된 검색어, 데이터 크기 노출 처리
movieSearchRes.innerHTML = "<p><span>\"" + searchTerm + "\"</span> 검색 결과 총 <span>" + searchResLen + " </span>개</p>"

// 영화 목록이 노출될 요소
const movieListEl = document.getElementById('movieList')

// 페이지 번호에 따른 영화 목록 노출 처리
for (let i = (pageIdx * 8) - 7; i <= (pageIdx * 8); i++) { // 하나의 화면에 8개의 영화 목록 노출
  let movieEl = document.createElement('div')
  movieEl.classList.add('movie')

  let innerHtmlStr1 = null

  // 영화 포스터 존재 유무에 따른 포스터 노출 분기 처리
  if (res[i-1].Poster === "N/A") {
    innerHtmlStr1 = "<div class=\"noMoviePoster\"><p>해당 영화는<br/>포스터가<br/>없습니다.</p></div>"
  } else {
    innerHtmlStr1 = "<img src=" + res[i-1].Poster + " class=\"moviePoster\" />"
  }
  // 영화 제목, 개봉 연도 노출을 위한 처리
  const innerHtmlStr2 = "<p class=\"movieTitle\">" + res[i-1].Title + "</p>" +
  "<div class=\"movieYear\">" + res[i-1].Year + "</div>"

  // 영화 포스터, 제목, 개봉 연도 정보를 movieEl 안에 생성
  movieEl.innerHTML = innerHtmlStr1 + innerHtmlStr2

  // movieEl을 movieListEl의 자식 요소로 추가
  movieListEl.appendChild(movieEl)

  // 데이터의 크기 만큼만 실행
  if (i === resLen) break
}

// 페이지 번호가 노출될 요소
const paginationEl = document.querySelector('.pagination')

// 페이징 처리
for (let i = 1; i <= parseInt(resLen / 8) + 1; i++) {
  paginationEl.innerHTML += 
    "<a href=\"../movieSearchSucc/success.html?searchTerm=" + searchTerm + "&resLen=" + searchResLen + "&page=" + i + "\">" + i + "</a>"
}
