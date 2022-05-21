// Detection Onresize 
let body_height;
let body_width;

$(document).ready(function () {
  body_height = $("#body_height").height();
  body_width = $("#body_height").width();
  console.log(body_height);
  console.log(body_width);
});

let canvas;


$(window).resize(function() {
  //resize just happened, pixels changed
  body_height = $("#body_height").height();
  body_width = $("#body_height").width();
  setup();
});



// this class describes the properties of a single particle.
class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,6);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

  // creation of a particle.
  createParticle() {
    noStroke();
    fill('rgba(60, 110, 113,1)');
    circle(this.x,this.y,this.r);
  }

  // setting the particle in motion.
  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

  // this function creates the connections(lines)
  // between particles which are less than a certain distance apart
   
  joinParticles(particles) {
      particles.forEach(element =>{
        let dis = dist(this.x,this.y,element.x,element.y);
        if(dis<120) {
          stroke('rgba(60, 110, 113,0.25)');
          line(this.x,this.y,element.x,element.y);
        }
      });  
  }
}

// an array to add multiple particles
let particles = [];


function setup() {
  // put setup code here
  canvas = createCanvas(body_width, body_height);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  if(particles.length <= 10) {
    for(let i = 0;i<10;i++){
      particles.push(new Particle());
    }
  }
}
  
function draw() {
  // put drawing code here
  background('#353535');
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
}
