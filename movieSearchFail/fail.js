// 전달된 검색어가 노출될 요소들
const searchTermEls = document.querySelectorAll('span.searchTerm')
console.log(searchTermEls)

// URI로부터 전달된 검색어 추출
const searchTermElsContent = decodeURI(window.location.href).split(/(?<==)/)[1]

// URI로부터 추출된 검색어의 길이 계산
const searchTermElsContentLen = searchTermElsContent.length

// 검색어의 길이에 따른 노출 처리
if (searchTermElsContentLen <= 10) {        // 검색어의 길이 <= 10 인 경우
  searchTermEls.forEach(searchTermEl => {   // searchTermEls 요소의 content로 검색어 set
    searchTermEl.textContent = searchTermElsContent
  })
  // 10 < 검색어의 길이 <= 30 인 경우
} else if (searchTermElsContentLen <= 30 && searchTermElsContentLen > 10 ) {
  // class="searchRes" > class="searchTerm" 인 요소에 검색어 10자까지 노출하고 말줄임 처리
  searchTermEls[0].textContent = `${searchTermElsContent.slice(0, 10)}...`
  // class="description1" > class="searchTerm" 인 요소에 검색어 그대로 노출
  searchTermEls[1].textContent = `${searchTermElsContent.slice(0, 30)}`
  // 30 < 검색어의 길이 인 경우
} else {
  // class="searchRes" > class="searchTerm" 인 요소에 검색어 10자까지 노출하고 말줄임 처리
  searchTermEls[0].textContent = `${searchTermElsContent.slice(0, 10)}...`
  // class="description1" > class="searchTerm" 인 요소에 검색어 13자까지 노출하고 말줄임 처리
  searchTermEls[1].textContent = `${searchTermElsContent.slice(0, 30)}...`
}