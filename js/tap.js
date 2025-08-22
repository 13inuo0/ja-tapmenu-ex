window.addEventListener("load", function () {
  const popupBtn = this.document.querySelector(".popup-btn");
  const popupText = this.document.querySelector(".popup-txt");
  popupBtn.addEventListener("click", function () {
    // popupText.style.display = "none";

    // // 삼항연산자
    // popupText.style.display =
    //   popupText.style.display === "none" ? "block" : "none";

    // if문
    if (popupText.style.display === "none") {
      popupText.style.display = "block";
    } else {
      popupText.style.display = "none";
    }
  });
});
