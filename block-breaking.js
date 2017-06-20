'use strict';

var stage = document.getElementById('stage');
var svgns = 'http://www.w3.org/2000/svg';

stage.setAttribute('xmlns', svgns);

function Block() {
  this.initialize.apply(this, arguments);
}

Block.prototype = {
  x: 0,
  y: 0,
  w: 0,
  h: 0,
  life: 1,
  initialize: function(option) {
    this.x = option.x;
    this.y = option.y;
    this.w = option.w;
    this.h = option.h;
  },
  draw: function() {
    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttribute('x', String(this.x));
    rect.setAttribute('y', String(this.y));
    rect.setAttribute('width', String(this.w));
    rect.setAttribute('height', String(this.h));
    stage.appendChild(rect);
  }
};

var block = new Block({
  x: 5,
  y: 5,
  w: 40,
  h: 20
});

block.draw();