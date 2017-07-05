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
console.log(blocks);
function main() {
  paddle.draw();
  ball.draw();

  var setId = setInterval(function() {
    paddle.move(game.pos.x);
    blocks = hitBlocks(blocks, ball);

    if (game.start) {
      ball.move(paddle);
    }
  }, parseInt(1000 / game.fps));
}

main();