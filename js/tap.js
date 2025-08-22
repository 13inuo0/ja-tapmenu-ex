window.addEventListener("load", function () {
  const popupBtn = this.document.querySelector(".popup-btn");
  const popupText = this.document.querySelector(".popup-txt");
  const btnLinks = this.document.querySelector(".popup-btn .inner a");

  popupBtn.addEventListener("click", function () {
    // popupText.style.display = "none";

    // // 삼항연산자
    // popupText.style.display =
    //   popupText.style.display === "none" ? "block" : "none";

    // if문
    if (popupText.style.display === "none") {
      popupText.style.display = "block";
      btnLinks.classList.remove("active");
    } else {
      popupText.style.display = "none";
      btnLinks.classList.add("active");
    }
  });
  // 탭 기능
  const tapTitles = this.document.querySelectorAll(".tap-nav > li > a");
  const tapItems = this.document.querySelectorAll(".tapItem");

//   처음 탭 내용 활성화
tapTitles[0].classList.add("active")
tapItems[0].style.display = "block"


  // console.log(tapTitles);
  tapTitles.forEach((element, index) => {
    // console.log(element);

    element.addEventListener("click", () => {


// 모든 탭과 내용을 초기화하는 코드
tapTitles.forEach((item)=>{
    item.classList.remove("active")
})
tapItems.forEach((tap)=>{
tap.style.display = "none"
})


// 모든 탭과 내용을 보이게하는 코드
      element.classList.add("active");
      tapItems[index].style.display = "block";
    });
  });

//   gotop Btn
const goTopBtn = this.document.querySelector("#goTop")
goTopBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
});
