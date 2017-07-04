var paddle = new Paddle({
  paddle: document.createElementNS(game.stage.svgns, 'rect'),
  x: game.paddle.x,
  y: game.paddle.y,
  w: game.paddle.w,
  h: game.paddle.h,
  fill: game.paddle.fill
});

var ball = new Ball({
  ball: document.createElementNS(game.stage.svgns, 'circle'),
  r : game.ball.r,
  cx: game.ball.cx,
  cy: game.ball.cy,
  dx: game.ball.dx,
  dy: game.ball.dy,
  fill: game.ball.fill
});

var blocks = initBlocks();

function main() {
  paddle.draw();
  ball.draw();

  setInterval(function() {
    paddle.move(game.pos.x);
    ball.move(paddle);
  }, parseInt(1000 / game.fps));
}

main();