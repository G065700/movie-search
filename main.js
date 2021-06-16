// 검색어 입력(input) 요소
const searchEl = document.querySelector('.main .search')

// 돋보기 아이콘 요소
const searchIconEl = document.querySelector('.main .searchIcon')

// 검색어 미입력 상태에서 Enter key 누르거나 돋보기 아이콘 요소 클릭 시 노출될 요소 
const pEl = document.querySelector('p')

// 검색어 입력 여부에 따른 분기 처리
setInterval(() => {
  if (searchEl.value.trim().length !== 0) {   // 검색어 입력한 상태
    searchIconEl.classList.add('navy')        // - 돋보기 아이콘의 색상을 변경하기 위한 클래스 add
    pEl.classList.remove('visible')           // - pEl 요소 미노출하기 위한 클래스 remove
  } else {                                    // 검색어 미입력 상태
    searchIconEl.classList.remove('navy')     // - 돋보기 아이콘의 색상을 되돌리기 위한 클래스 remove
  }
}, 100)   // 0.1초마다 실행

// OMDb로부터의 데이터 수신 여부에 따른 페이지 이동 처리
searchIconEl.addEventListener('click', () => {    // 돋보기 아이콘 클릭 시 실행
  if (searchEl.value.trim().length === 0) {       // - 검색어 미입력 상태
    pEl.classList.add('visible')                  //   - pEl 요소를  노출하기 위한 클래스 add
  } else {                                        // - 검색어 입력한 상태
    axios                                         //   - axios 모듈 사용하여 OMDb로부터 데이터 수신(response)
      .get(`https://www.omdbapi.com/?apikey=f1b5abfc&s=${searchEl.value}`)
      .then((response) => {
        if (response.data.Response === "False") {                                     // 수신된 데이터(response)의 data.Response의 값이 "False"(검색어로 검색된 결과 미존재)
          location.href = `./movieSearchFail/fail.html?searchTerm=${searchEl.value}`  // - ./movieSearchFail/fail.html로 이동하며 검색어 전달
        } else {                                                                      // 수신된 데이터(response)의 data.Response의 값이 "False"가 아닌 경우 (검색어로 검색된 결과 존재)
          localStorage.setItem('res', JSON.stringify(response))                       // 수신된 데이터(response)를 localStorage에 저장
          location.href =                                                             // - ./movieSearchSucc/success.html로 이동하며 검색어, 검색 결과 수, 페이지 번호 전달
            `./movieSearchSucc/success.html?searchTerm=${searchEl.value}&resLen=${response.data.Search.length}&page=1`
        }
      })
  }
})

// OMDb로부터의 데이터 수신 여부에 따른 페이지 이동 처리
searchEl.addEventListener('keyup', e => {
  // Enter key 눌렀을 때 실행
  if (e.keyCode === 13) {
    if (searchEl.value.trim().length === 0) {
      document.querySelector('p').classList.add('visible')
    } else {
      axios
        .get(`https://www.omdbapi.com/?apikey=f1b5abfc&s=${searchEl.value}`)
        .then((response) => {
          if (response.data.Response === "False") {
            location.href = `./movieSearchFail/fail.html?searchTerm=${searchEl.value}`
          } else {
            localStorage.setItem('res', JSON.stringify(response))
            location.href = `./movieSearchSucc/success.html?searchTerm=${searchEl.value}&resLen=${response.data.Search.length}&page=1`
          }
        })
    }
  }
})