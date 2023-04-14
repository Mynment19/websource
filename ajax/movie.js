// 오늘 날짜 확인 - 1 : 어제 날짜를 화면에 보여주기
function init() {
  const today = new Date();

  const txtYear = document.querySelector("#txtYear");
  const selMon = document.querySelector("#selMon");
  const selDay = document.querySelector("#selDay");

  // 년
  let year = today.getFullYear();
  // 월(0부터 시작하기 때문에 +1)
  let month = today.getMonth + 1;
  // 일-1
  let day = today.Date() - 1;

  // 뽑은 날짜 바인딩하기
  txtYear.value = year;

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  selMon.value = month; // 4 ==> 04

  selDay.value = day;
}

init();
