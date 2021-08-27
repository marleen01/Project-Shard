let svgimg;
let shards = [];
let color;
let poly;
function preload() {
 svgimg = loadJSON('svg/image.json');
}

function setup() {
  createCanvas(2000, 2000);
  for (var i = 0; i < 10; i++) {
    poly = getPoly(i);
    shards[i] = new Shard(poly[6], poly[0], poly[1],
    poly[2], poly[3], poly[4], poly[5])
  }
}

function draw() {
  for (var i = 0; i < shards.length; i++) {
    shards[i].show();
    shards[i].move();
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
