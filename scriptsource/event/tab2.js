// tab.js ==> forEach(== for) 변경

// const arr = [1, 2, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//   // 첫번째 요소 가져오기
//   let 가져온요소 = 배열명[i];
//   console.log(가져온요소);
// }

// arr.forEach((item, i) => {
//   console.log(item);
// });

// tab-button 찾기
const tabBtns = document.querySelectorAll(".tab-button");
// tab-content 찾기
const tabCnts = document.querySelectorAll(".tab-content");

tabBtns.forEach((tabBtn, idx) => {
  tabBtn.addEventListener("click", (e) => {
    //모든 tab-button 의 orange 제거
    tabBtns.forEach((item) => {
      item.classList.remove("orange");
    });
    //현재 클릭이 된 tab-button 만 orange 부착
    e.target.classList.add("orange");

    //모든 tab-content 의 show 제거
    tabCnts.forEach((tabCnt) => {
      tabCnt.classList.remove("show");
    });
    //현재 클릭이 된 tab-button 순서에 맞는 tab-content 보여주기
    tabCnts[idx].classList.add("show");
  });
});
