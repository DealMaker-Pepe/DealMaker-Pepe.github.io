const numCoins = 30;
for (let i = 0; i < numCoins; i++) {
  const coin = document.createElement("div");
  coin.className = "coin";
  coin.style.left = Math.random() * 100 + "vw";
  coin.style.animationDuration = (3 + Math.random() * 5) + "s";
  coin.style.opacity = (0.5 + Math.random() * 0.5);
  document.body.appendChild(coin);
}