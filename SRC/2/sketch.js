function collision(a, b, c, d, e, x0, tolerance, maxIterations) {
  for (let i = 0; i < maxIterations; i++) {
    let fx = a * x0 * x0 + b * x0 + c;
    let gx = d * x0 + e;
    if (Math.abs(fx - gx) < tolerance) {
      return x0;
    }
    let fpx = 2 * a * x0 + b;
    let gpx = d;
    let x1 = x0 - (fx - gx) / (fpx - gpx);
    x0 = x1;
  }
  return null;
}

function setup() {
  background(150)
  collision(0.01, 0, 0, 1, 1, 8, 0.0001, 1000)
  print (collision(0.01, 0, 0, 1, 1, -4, 0.0001, 1000))
}