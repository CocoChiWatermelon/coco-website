// 顯示或隱藏按鈕
window.onscroll = function () {
  const topButton = document.getElementById("topButton");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

// 滾動到頂部
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
