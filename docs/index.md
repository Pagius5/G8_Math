# 欢迎来到 可爱奶龙数学培训

<!-- For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files. -->

嘟嘟嘟

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe 
    src="//player.bilibili.com/player.html?isOutside=true&aid=113960296647644&bvid=BV1RCNxeTEmL&cid=28254733095&p=1" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    title="3Blue1Brown - Essence of Calculus Playlist" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

<!-- <div id="polysketch" style="width: 100%; height: 500px; background: #000; position: relative; overflow: hidden; border-radius: 8px;"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js"></script>

<script>
new p5((p) => {
  var palette;
  var maxColNum = 50;
  var col_1, col_2, col_3;
  var bgColor;
  var howMany = 30;
  var polygons = [];
  var noSidesPoly = false;
  let w, h;

  // --- 内部补全：原代码缺失的调色板生成逻辑 ---
  function GeneratePalette() {
    palette = [];
    for (let i = 0; i < maxColNum; i++) {
      // 模拟原作者的混合配色逻辑
      let r = p.lerp(p.red(col_1), p.red(col_2), p.random());
      let g = p.lerp(p.green(col_2), p.green(col_3), p.random());
      let b = p.lerp(p.blue(col_3), p.blue(col_1), p.random());
      palette.push(p.color(r, g, b, 150));
    }
  }

  p.setup = () => {
    const elt = p.select("#polysketch");
    w = elt.width;
    h = elt.height;
    
    let canvas = p.createCanvas(w, h);
    canvas.parent('polysketch');
    
    var elementsScaler = p.min(p.width, p.height);
    p.smooth();
    p.noFill();

    if (noSidesPoly) p.strokeWeight(elementsScaler / 100);
    else p.strokeWeight(elementsScaler / 400);

    // 颜色初始化
    bgColor = p.color(0, 8);
    col_1 = p.color(30, 67, 130);
    col_2 = p.color(0, 255, 51);
    col_3 = p.color(51, 78, 210);

    GeneratePalette();

    // 初始化多边形对象
    polygons = [];
    for (var j = 0; j < howMany; j++) {
      let sides = noSidesPoly ? 0 : p.random(1, 7);
      polygons[j] = new AnimPoly(
        p.random(p.width), 
        p.random(p.height), 
        sides, 
        p.random(elementsScaler / 15, elementsScaler / 3), 
        palette[p.int(p.random(maxColNum))]
      );
    }
    p.background(0);
  };

  p.draw = () => {
    // 关键：半透明背景产生拖尾效果
    p.fill(0, 8); 
    p.noStroke();
    p.rect(0, 0, p.width, p.height);

    for (var i = 0; i < howMany; i++) {
      polygons[i].animate();
      polygons[i].draw();
    }
  };

  p.windowResized = () => {
    const elt = p.select("#polysketch");
    p.resizeCanvas(elt.width, elt.height);
  };

  // --- 多边形类定义 ---
  class AnimPoly {
    constructor(_x, _y, _n, _scale, _col) {
      this.posX = _x;
      this.posY = _y;
      this.speedX = p.random(-0.5, 0.5);
      this.speedY = p.random(-0.5, 0.5);
      this.nSides = _n;
      this.rotAngle = 0.0;
      this.col = _col;
      this.dim = _scale;
      this.startDim = this.dim;
      this.timeOffset = p.random(1000);
      this.pulseSpeed = p.random(0.01, 0.02);
      this.rotSpeed = p.random(0.001, 0.003);
      this.polyAngle = p.TWO_PI / this.nSides;
    }

    draw() {
      p.push();
      p.translate(this.posX, this.posY);
      p.rotate(this.rotAngle);
      p.stroke(this.col);
      p.noFill();
      p.beginShape();
      if (this.nSides > 0) {
        for (var a = 0; a < p.TWO_PI; a += this.polyAngle) {
          var sx = p.cos(a) * this.dim;
          var sy = p.sin(a) * this.dim;
          p.vertex(sx, sy);
        }
      } else {
        p.ellipse(0, 0, this.dim, this.dim);
      }
      p.endShape(p.CLOSE);
      p.pop();
    }

    animate() {
      // 旋转
      this.rotAngle = p.sin(this.rotSpeed * 25 * (p.frameCount + this.timeOffset));
      // 脉动
      let dimMult = p.sin(this.pulseSpeed * (p.frameCount + this.timeOffset));
      this.dim = (dimMult * this.startDim + this.startDim) * 0.5;
      // 移动
      this.posX += this.speedX;
      this.posY += this.speedY;

      // 边界检查
      if (this.posX < 0 || this.posX > p.width) this.speedX *= -1;
      if (this.posY < 0 || this.posY > p.height) this.speedY *= -1;

      // 缩小到一定程度重新随机位置
      if (this.dim <= 1) {
        this.posX = p.random(p.width);
        this.posY = p.random(p.height);
        this.col = palette[p.int(p.random(maxColNum))];
      }
    }
  }
}, 'polysketch');
</script> -->