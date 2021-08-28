let svgimg;
let shards = [];
let color;
let poly;
let polys = [];
let timer = 0;
function preload() {
 svgimg = loadJSON('svg/image.json');
}

function setup() {
  createCanvas(2000, 2000);
  for (var p = 0; p < svgimg.children.length; p++) {
    polys.push(getPoly(p));
  }
}

function draw() {
  background(255);
  spawnPoly();
  timer++;
  for (var i = 0; i < shards.length; i++) {
    shards[i].show();
    shards[i].move();
    shards[i].checkPos();
  }
}

function getPoly(n) {
  let points = svgimg.children[n].attributes.points;
  color = svgimg.children[n].attributes.fill;
  points = points.replace(/\s/g, ',');
  points = points.split(",");
  points = points.map(Number);
  points.push(color);
  return points;
}

function spawnPoly() {
  for (var p = 0; p < 5; p++) {
    shards.push(new Shard(polys[p][6], polys[p][0], polys[p][1],
    polys[p][2], polys[p][3], polys[p][4], polys[p][5]));
    polys.shift();
  }

}
