'use strict';

var game = {
  start: false,
  fps: 60,
  pos: {
    x: 0
  },
  stage : {
    base  : document.getElementById('stage'),
    svgns : 'http://www.w3.org/2000/svg',
    w : 500,
    h : 500
  },
  paddle : {
    x: 250,
    y: 450,
    w: 60,
    h: 10,
    fill: '#000'
  },
  ball : {
    r : 5,
    cx: 250,
    cy: 400,
    dx: 3,
    dy: -3,
    fill: '#00f'
  },
  block : {
    row: 5,
    col: 10,
    x: 40,
    y: 40,
    w: 40,
    h: 20,
    fill: '#000',
    stroke: '#fff'
  }
};

game.stage.base.setAttribute('xmlns',  game.stage.svgns);
game.stage.base.setAttribute('width',  String(game.stage.w));
game.stage.base.setAttribute('height', String(game.stage.h));

window.addEventListener('mousedown', function () {
  if (game.start === false) {
    game.start = true;
  }
}, false);
window.addEventListener('mousemove', function (e) {
  var rect = e.target.getBoundingClientRect();
  game.pos.x = e.clientX - rect.left;
}, false);