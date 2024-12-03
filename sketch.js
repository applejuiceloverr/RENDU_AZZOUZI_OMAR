let pursuer1, pursuer2;
let target;
let obstacles = [];
let vehicules = [];
let mode = "snake";
let prey = null;
let vehicleImg,
  preyImg,
  wandererImg,
  bgImg,
  obstaclesImg,
  fisherImg,
  bubbleImage;
const flock = [];
let staticGraphics;
let alignSlider, cohesionSlider, separationSlider;

async function preload() {
  vehicleImg = loadImage("vehicle.png");
  preyImg = loadImage("prey.png");
  wandererImg = loadImage("wanderer.png");
  bgImg = loadImage("bg.png");
  obstaclesImg = loadImage("obstacle.png");
  fisherImg = loadImage("fisher.png");
  bubbleImage = loadImage("bubble.png");}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(width / 2, height / 2);

  //off-screen graphics buffer pour eviter le lag
  staticGraphics = createGraphics(windowWidth, windowHeight);
  staticGraphics.background(bgImg); // Draw the background image on the buffer

  // dessine le bubbles pour mon nom
  staticGraphics.imageMode(CENTER); // centrer image

  pursuer1 = new Vehicle(100, 100);
  pursuer2 = new Vehicle(random(width), random(height));
  pursuer3 = new Vehicle(random(width), random(height));
  pursuer4 = new Vehicle(random(width), random(height));
  pursuer5 = new Vehicle(random(width), random(height));

  vehicules.push(pursuer1);
  vehicules.push(pursuer2);
  vehicules.push(pursuer3);
  vehicules.push(pursuer4);
  vehicules.push(pursuer5);

  obstacles.push(new Obstacle(width / 2, height / 2, 100, "green"));
  alignSlider = createSlider(0, 2, 1.5, 0.1);
  cohesionSlider = createSlider(0, 2, 1, 0.1);
  separationSlider = createSlider(0, 2, 2, 0.1);

  alignSlider.position(10, 10);
  cohesionSlider.position(10, 40);
  separationSlider.position(10, 70);

  for (let i = 0; i < 200; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  image(staticGraphics, 0, 0);
  target = createVector(mouseX, mouseY);

  fill(255, 0, 0);
  noStroke();
  circle(target.x, target.y, 32);
  prevTime = currTime;
  currTime = millis();
  const delta = currTime - prevTime;

  player.update(delta);
  player.draw();

  shoot(delta);

  bullets = bullets.filter((bullet) => {
    const dead = bullet.update(delta);
    bullet.draw(delta);

    // Check if bullet hits any prey
    vehicules = vehicules.filter((vehicle) => {
      if (vehicle.isPrey && vehicle.isHit(bullet)) {
        prey = null;
        return false; // Remove the prey
      }
      return true;
    });

    return !dead;
  });

  obstacles.forEach((o) => {
    o.show();
  });

  vehicules.forEach((vehicle, index) => {
    let steeringForce;

    if (mode == "snake") {
      vehicle.r = 16;
      if (index === 0) {
        steeringForce = vehicle.arrive(target);
      } else if (vehicle.isFisher) {
        wanderForce = vehicle.wander();
        vehicle.applyForce(wanderForce);
      } else if (vehicle.isWanderer) {
        if (prey) {
          steeringForce = vehicle.seek(prey.pos);
        } else {
          let wanderForce = vehicle.wander();
          vehicle.applyForce(wanderForce);
        }
      } else if (vehicle.isPrey) {
        let preyForce = vehicle.prey();
        vehicle.applyForce(preyForce);
      } else {
        let vehiculePrecedent = vehicules[index - 1];
        const distanceEntreVehicules = 60;
        steeringForce = vehicle.arrive(
          vehiculePrecedent.pos,
          distanceEntreVehicules
        );
      }
    }
    vehicle.applyForce(steeringForce);

    vehicle.applyBehaviors(target, obstacles, vehicules);
    vehicle.applyForce(steeringForce);

    vehicle.update();
    vehicle.show();
  });
  //boids
  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }
  //affichage des instructions
  fill("red");
  textSize(16);
  textAlign(RIGHT, TOP);
  text(
    "Instructions:\nRightclick to spawn an Obstacle\nUse sliders to adjust boids values\nW to spawn a wandering shark\nP to spawn a prey\nH to spawn a fisherman\nSpace to shoot the prey",
    width - 10,
    10
  );
}

function mousePressed() {
  obstacles.push(new Obstacle(mouseX, mouseY, random(20, 100), "green"));
}

function keyPressed() {
  if (key == "v") {
    vehicules.push(new Vehicle(random(width), random(height)));
  }
  if (key == "d") {
    Vehicle.debug = !Vehicle.debug;
  }
  if (key === "s") {
    mode = "snake";
  }
  if (key === "h") {
    let v = new Vehicle(mouseX, mouseY);
    v.isFisher = true;
    v.r = 30;
    v.wanderWeight = 2;
    vehicules.push(v);
  }
  if (key === "w") {
    let v = new Vehicle(mouseX, mouseY);
    v.isWanderer = true;
    v.wanderWeight = 0.8;
    v.followPathWeight = 0;
    v.separateWeight = 0;
    v.r = 30;
    vehicules.push(v);
  }
  if (key === "p") {
    let p = new Vehicle(mouseX, mouseY);
    p.isPrey = true;
    p.followPathWeight = 0;
    p.separateWeight = 0;
    p.wanderWeight = 8;
    p.r = 20;
    vehicules.push(p);
    prey = p;
  }
  if (key == "f") {
    for (let i = 0; i < 10; i++) {
      let v = new Vehicle(20, 300);
      v.vel = new p5.Vector(random(1, 5), random(1, 5));
      vehicules.push(v);
    }
  }
}
