const searchEl = document.querySelector('.main .search')
const searchIconEl = document.querySelector('.main .searchIcon')

searchIconEl.addEventListener('click', () => {
  if(searchEl.value.trim().length === 0) {
    alert("검색어를 입력해 주세요")
  } else {
    axios
      .get(`https://www.omdbapi.com/?apikey=f1b5abfc&s=${searchEl.value}`)
      .then((response) => {
        if (response.data.Response === "False") {
          location.href = `./movieSearchFail/fail.html?searchTerm=${searchEl.value}`
        } else {
          location.href = `./movieSearchSucc/success.html?res=${response}`
        }
      })
  }
})