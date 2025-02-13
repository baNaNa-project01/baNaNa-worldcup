document.addEventListener("DOMContentLoaded", function () {
  // .category-buttons 내의 모든 버튼을 선택합니다.
  const regionButtons = document.querySelectorAll(".category-buttons button");

  // for...of 루프를 이용해 각 버튼에 이벤트 핸들러를 할당합니다.
  for (const button of regionButtons) {
    // 버튼의 텍스트(예: "서울", "부산" 등)를 지역명으로 사용합니다.
    const region = button.textContent.trim();

    button.addEventListener("click", function () {
      // 버튼 클릭 시 game.html?region=지역명 으로 이동합니다.
      window.location.href = "./game.html?region=" + encodeURIComponent(region);
    });
  }
});
