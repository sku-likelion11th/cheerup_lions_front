const submitTime = document.getElementById('submitTime');
const timeDisplay = document.getElementById('timedisplay');

// 게시하기 버튼 눌렀을 때 시간
// clickButton.addEventListener('click', () => {
//     const clickedTime = new Date();
//     updateTime(clickedTime);
// });

// function updateTime(clickedTime) {
//     const hours = clickedTime.getHours();
//     const minutes = clickedTime.getMinutes();
//     const seconds = clickedTime.getSeconds();

//     const timeString = `${hours}:${minutes}:${seconds}`;
//     timeDisplay.textContent = `${timeString}`;
// }


// 해커톤 종료 카운트 다운
const countdownElement = document.getElementById('countdown'); // display

const targetDate = new Date(2023, 7, 19, 7, 0, 0); // 종료 시각

function updateCountdown() {
    const now = new Date(); // 현 시각
    const timeLeft = targetDate - now; // 남은 시각 

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}일 ${hours} : ${minutes} : ${seconds}`;

        setTimeout(updateCountdown, 1000); // Update every 1 second
    } else {
        countdownElement.textContent = "해커톤 종료";
    }
}

updateCountdown();