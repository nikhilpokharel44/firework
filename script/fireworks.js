const c = document.querySelector("canvas"),
  ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;

let bang = {},
  bIndex = 0,
  change = 1;
class fireworks {
  constructor(x, y, gravity) {
    this.x = x;
    this.y = y;
    this.xv = (Math.random() - 0.5) * 6;
    this.yv = (Math.random() - 0.5) * 4;
    this.gravity = gravity;
    this.color = `hsl(${change}, 100%, 50%)`;
    bIndex++;
    this.id = bIndex;
    this.timeSpan = Math.random() * 50;
    this.timeTaken = 0;
    bang[bIndex] = this;
  }
  show() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, 1, 0, Math.PI * 2, false);
    ctx.fill();
  }
  update() {
    this.timeTaken++;
    this.x += this.xv;
    this.y += this.yv;
    this.y += this.gravity;
    this.gravity += 0.09;
    change += 5;
    if (change > 255) {
      change = 5;
    }
    if (this.timeTaken > this.timeSpan) {
      delete bang[this.id];
    }
  }
}
