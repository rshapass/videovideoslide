var video;

function setup() {
  createCanvas(640, 480);
  // if you work on Hi-density display you need to add the following line
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  slider = createSlider(0,1, .25, .1);
  slider.position (0, 500);
  slider.style('width','80px')
}

function draw() {
  background(51);
  var val =slider.value()
    pixelDensity(val);

  video.loadPixels();
  loadPixels();

for (var y = 0; y < height; y++){
  for (var x = 0; x < width; x++){
   var indexLoc = (x + y * width) * 4; 
   var r = video.pixels[indexLoc + 0]; // r value from the video
   var g = video.pixels[indexLoc + 1]; // g value from the video
   var b = video.pixels[indexLoc + 2]; // b value from the video
   pixels[indexLoc + 0] = r; 
   pixels[indexLoc + 1] = g;
   pixels[indexLoc + 2] = b; 
   pixels[indexLoc + 3] = random(255); // alpha value 
  }
}
  updatePixels();
}