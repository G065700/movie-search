const searchEl = document.querySelector('.main .search')
const searchIconEl = document.querySelector('.main .searchIcon')
const pEl = document.querySelector('p')

// searchEl.addEventListener('focus', () => {
//   if(searchEl.value.trim().length !== 0) {
//     searchIconEl.classList.add('navy')
//     pEl.classList.remove('visible')
//   } else {
//     searchIconEl.classList.remove('navy')
//   }
// })

setInterval(() => {
  if (searchEl.value.trim().length !== 0) {
    pEl.classList.remove('visible')
    // searchIconEl.classList.add('navy')
  }
}, 100)

searchIconEl.addEventListener('click', () => {
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
})

searchEl.addEventListener('keyup', e => {
  if (e.keyCode === 13) {
    // alert('123')
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

// document.addEventListener("DOMContentLoaded", () => {
//   alert(searchEl.value)
//   searchEl.value = ""
// })