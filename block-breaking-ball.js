var circle = document.createElementNS(svgns, 'circle');
var ball = new Ball({
  r: 5,
  cx: 250,
  cy: 250,
  dx: 5,
  dy: 5,
  fill: '#00f'
});

function Ball() {
  this.r  = 0;
  this.cx = 0;
  this.cy = 0;
  this.dx = 0;
  this.dy = 0;
  this.fill = '';
  this.initialize.apply(this, arguments);
}

Ball.prototype.initialize = function(option) {
  this.r  = option.r;
  this.cx = option.cx;
  this.cy = option.cy;
  this.dx = option.dx;
  this.dy = option.dy;
  this.fill = option.fill;
};

Ball.prototype.draw = function() {
  circle.setAttribute('r',  String(this.r));
  circle.setAttribute('cx', String(this.cx));
  circle.setAttribute('cy', String(this.cy));
  circle.setAttribute('fill', this.fill);
  stage.appendChild(circle);
};

Ball.prototype.position = function() {
  return {
    cx: this.cx + this.dx,
    cy: this.cy + this.dy
  };
};

Ball.prototype.move = function() {
  var pos = this.position();
  if (pos.cx < this.r || pos.cx > 500 - this.r) {
    this.dx *= -1;
  }
  if (pos.cy < this.r || pos.cy > 500 - this.r) {
    this.dy *= -1;
  }
  this.cx += this.dx;
  this.cy += this.dy;
  circle.setAttribute('cx', String(this.cx));
  circle.setAttribute('cy', String(this.cy));
};

ball.draw();

setInterval(function() {
  ball.move();
}, parseInt(1000 / 60));