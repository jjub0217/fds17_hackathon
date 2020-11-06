// clock 구현
const clock = () => {
  const $timerDay = document.querySelector(".timer-day");
  const $timerNow = document.querySelector(".timer-now");
  const $greeting = document.querySelector(".greeting");

  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDay();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  $timerDay.textContent = `${year}년 ${month}월 ${date}일`;
  $timerNow.textContent = `${hour < 10 ? "0" + hour : hour} : ${
    minute < 10 ? "0" + minute : minute
  } : ${second < 10 ? "0" + second : second}`;

  const greetingText =
    hour > 6 && hour < 12
      ? "Good Morning!"
      : hour > 12 && hour < 18
      ? "Good Afternoon!"
      : hour > 18 && hour < 21
      ? "Good Evening!"
      : "Good Night!";

  $greeting.textContent = `${greetingText}`;
  setTimeout(clock, 1000);
};

clock();
