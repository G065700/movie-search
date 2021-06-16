# MOVIE-SEARCH

## netlify를 이용한 지속적 배포
<a href="https://pedantic-lovelace-70825b.netlify.app/" title="완성 페이지로 이동" target="_blank">완성 페이지로 이동</a> 
<br/><br/> 

## 프로젝트 개요
```plaintext
html, css, JS 그리고 axios 모듈을 사용하여 OMDb API로 부터 제공받은 데이터를 이용하는 목적의 외국 영화 검색 웹 사이트를 만드는 프로젝트
```

## 프로젝트 구성
```plaintext
- MOVIE-SEARCH
  - index.html
  - main.css
  - main.js
  - movieSearchFail
    - fail.css
    - fail.html
    - fail.js
  - movieSearchSucc
    - success.css
    - success.html
    - success.js
```

## 프로젝트에 사용된 기술
```plaintext
html, css, JS
```
```html
<!-- axios -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```
<a href="https://www.omdbapi.com/" title="OMDb API">OMDb(The Open Movie Database) API 로 이동</a>

```javascript
// OMDb로부터의 데이터 수신 여부에 따른 페이지 이동 처리
searchIconEl.addEventListener('click', () => {
  if (searchEl.value.trim().length === 0) { 
    pEl.classList.add('visible') 
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
```
```html
<!-- 동일한 사용자 경험을 위한 CSS 초기화 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```