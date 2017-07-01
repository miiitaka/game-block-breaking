function Block() {
  this.x = 0;
  this.y = 0;
  this.w = 0;
  this.h = 0;
  this.fill = '';
  this.initialize.apply(this, arguments);
}

Block.prototype.initialize = function(option) {
  this.x = option.x;
  this.y = option.y;
  this.w = option.w;
  this.h = option.h;
  this.fill = option.fill;
};

Block.prototype.draw = function() {
  var rect = document.createElementNS(svgns, 'rect');
  rect.setAttribute('x',      String(this.x));
  rect.setAttribute('y',      String(this.y));
  rect.setAttribute('width',  String(this.w));
  rect.setAttribute('height', String(this.h));
  rect.setAttribute('fill',   this.fill);
  stage.appendChild(rect);
};

var block = new Block({
  x: 5,
  y: 5,
  w: 40,
  h: 20,
  fill: '#f00'
});

block.draw();