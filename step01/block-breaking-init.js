'use strict';

var game = {
  stage : {
    base  : document.getElementById('stage'),
    svgns : 'http://www.w3.org/2000/svg',
    w : 500,
    h : 500
  }
};

game.stage.base.setAttribute('xmlns',  game.stage.svgns);
game.stage.base.setAttribute('width',  String(game.stage.w));
game.stage.base.setAttribute('height', String(game.stage.h));