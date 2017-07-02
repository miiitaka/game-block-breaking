function Ball() {
  this.initialize.apply(this, arguments);
}

Ball.prototype.initialize = function(option) {
  this.ball = option.ball;
  this.r  = option.r;
  this.cx = option.cx;
  this.cy = option.cy;
  this.dx = option.dx;
  this.dy = option.dy;
  this.fill = option.fill;
};

Ball.prototype.draw = function() {
  this.ball.setAttribute('r',  String(this.r));
  this.ball.setAttribute('cx', String(this.cx));
  this.ball.setAttribute('cy', String(this.cy));
  this.ball.setAttribute('fill', this.fill);
  game.stage.base.appendChild(this.ball);
};

Ball.prototype.position = function() {
  return {
    cx: this.cx + this.dx,
    cy: this.cy + this.dy
  };
};

Ball.prototype.move = function() {
  var pos = this.position();
  if (pos.cx < this.r || pos.cx > game.stage.w - this.r) {
    this.dx *= -1;
  }
  if (pos.cy < this.r || pos.cy > game.stage.h - this.r) {
    this.dy *= -1;
  }
  this.cx += this.dx;
  this.cy += this.dy;
  this.ball.setAttribute('cx', String(this.cx));
  this.ball.setAttribute('cy', String(this.cy));
};