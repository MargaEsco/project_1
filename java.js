function positionCandle() {
  const cakePosition = cake.getBoundingClientRect();

  candle.style.left =
    (cakePosition.left + cakePosition.width / 2) + 'px';

  // Place the candle on top of the cake,
  // with its bottom slightly inserted into the cake.
  candle.style.top =
    (cakePosition.top + cakePosition.height * 0.79 - 30) + 'px';
}