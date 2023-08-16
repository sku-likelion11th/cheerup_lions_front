const submitTime = document.getElementById('submitTime');
const timeDisplay = document.getElementById('timedisplay');

// 게시하기 버튼 눌렀을 때 시간
clickButton.addEventListener('click', () => {
    const clickedTime = new Date();
    updateTime(clickedTime);
});

function updateTime(clickedTime) {
    const hours = clickedTime.getHours();
    const minutes = clickedTime.getMinutes();
    const seconds = clickedTime.getSeconds();

    const timeString = `${hours}:${minutes}:${seconds}`;
    timeDisplay.textContent = `${timeString}`;
}