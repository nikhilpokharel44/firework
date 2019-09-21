let shooters = {},
  index = 0;
class particles {
  constructor() {
    this.x = Math.random() * c.width;
    this.radi = 1;
    this.y = c.height - this.radi;
    this.yv = 0;
    this.gravity = 0.05;
    this.show = Math.random();
    index++;
    this.id = index;
    shooters[index] = this;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = `hsl(${change}, 50%, 50%)`;
    ctx.arc(this.x, this.y, this.radi, 0, Math.PI * 2, false);
    ctx.fill();
  }
  setup() {
    this.y -= this.yv;
    this.yv += this.gravity;
    if (this.y < Math.random()*c.height-c.height/2) {
      this.gravity -= 0.05;
    }
    if (this.gravity < 0) {
      delete shooters[this.id];
    }
  }
}
const animate = () => {
  ctx.fillStyle = "rgba(0, 0, 0,0.1)";
  ctx.fillRect(0, 0, c.width, c.height);

  requestAnimationFrame(animate);
  for (let i = 0; i < 1; i++) {
    new particles();
  }
  for (var i in shooters) {
    if (shooters[i].gravity === 0) {
      for (var j = 0; j < 20; j++) {
        new fireworks(shooters[i].x, shooters[i].y, 0);
      }
    }
    if (shooters[i].show < 0.02) {
      shooters[i].draw();
      shooters[i].setup();
    }
  }
  for (var j in bang) {
    bang[j].show();
    bang[j].update();
  }
};
animate();
