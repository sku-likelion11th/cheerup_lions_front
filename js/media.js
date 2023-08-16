const inputpw = document.querySelector('.input-pw');
const submitbtn = document.querySelector('.input-submit');

// 미디어 쿼리 감지 함수
function checkMediaQuery() {
    if (window.matchMedia('(max-width: 650px)').matches) {
        inputpw.placeholder = '비번';
        submitbtn.value = '게시';
    } else {
        inputpw.placeholder = '비밀번호 입력';
        submitbtn.value = '게시하기';
    }
}

// 페이지 로드시 및 리사이즈 이벤트 시 미디어 쿼리 감지 함수 호출
window.addEventListener('load', checkMediaQuery);
window.addEventListener('resize', checkMediaQuery);