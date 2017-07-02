function Block() {
  this.initialize.apply(this, arguments);
}

Block.prototype.initialize = function(option) {
  this.block = option.block;
  this.x = option.x;
  this.y = option.y;
  this.w = option.w;
  this.h = option.h;
  this.fill = option.fill;
};

Block.prototype.draw = function() {
  this.block.setAttribute('x',      String(this.x));
  this.block.setAttribute('y',      String(this.y));
  this.block.setAttribute('width',  String(this.w));
  this.block.setAttribute('height', String(this.h));
  this.block.setAttribute('fill',   this.fill);
  game.stage.base.appendChild(this.block);
};

function initBlocks() {
  var
    blocks = [],
    count  = 0;

  for (var i = 0; i < game.block.col; i++) {
    for (var j = 0; j < game.block.row; j++) {
      blocks[count] = new Block({
        block: document.createElementNS(game.stage.svgns, 'rect'),
        x: game.block.x + j * game.block.w,
        y: game.block.y + i * game.block.h,
        w: game.block.w,
        h: game.block.h
      });
      blocks[count].draw();
      count++;
    }
  }
  return blocks;
}