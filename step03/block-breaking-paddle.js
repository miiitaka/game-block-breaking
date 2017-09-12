function Paddle() {
  this.initialize.apply(this, arguments);
}

Paddle.prototype.initialize = function(option) {
  this.paddle = option.paddle;
  this.x = option.x;
  this.y = option.y;
  this.w = option.w;
  this.h = option.h;
  this.fill = option.fill;
};

Paddle.prototype.draw = function() {
  this.paddle.setAttribute('x',      String(this.x));
  this.paddle.setAttribute('y',      String(this.y));
  this.paddle.setAttribute('width',  String(this.w));
  this.paddle.setAttribute('height', String(this.h));
  this.paddle.setAttribute('fill',   this.fill);
  game.stage.base.appendChild(this.paddle);
};