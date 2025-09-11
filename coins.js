// coins.js
// 화면에 금색 코인 떨어지게 만드는 스크립트

const numCoins = 30; // 떨어지는 코인 개수
for (let i = 0; i < numCoins; i++) {
  const coin = document.createElement("div");
  coin.className = "coin";
  coin.style.left = Math.random() * 100 + "vw";
  coin.style.animationDuration = (3 + Math.random() * 5) + "s"; // 속도 다양화
  coin.style.opacity = (0.5 + Math.random() * 0.5); // 투명도 랜덤
  document.body.appendChild(coin);
}
