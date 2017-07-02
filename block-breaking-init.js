'use strict';

var game = {
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
    x: 300,
    y: 450,
    w: 60,
    h: 10,
    fill: '#f0f'
  },
  ball : {
    r : 5,
    cx: 250,
    cy: 250,
    dx: 5,
    dy: 5,
    fill: '#00f'
  },
  block : {
    row: 10,
    col: 5,
    x: 40,
    y: 40,
    w: 40,
    h: 20
  }
};

game.stage.base.setAttribute('xmlns',  game.stage.svgns);
game.stage.base.setAttribute('width',  game.stage.w);
game.stage.base.setAttribute('height', game.stage.h);

window.addEventListener('mousedown', function (e) {}, false);
window.addEventListener('mousemove', function (e) {
  var rect = e.target.getBoundingClientRect();
  game.pos.x = e.clientX - rect.left;
}, false);