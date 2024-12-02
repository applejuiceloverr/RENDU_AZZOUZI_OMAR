//tableau pour stocker les bullets
let bullets = [];
//cadence de tir
let fireTimerMS = 0;
const fireTimerMSMax = 100;
//vitess des bullets
const bulletSpeed = 500;
//vars pour tracker pos et temps actuels
let currTime = 0,
  prevTime = 0;

let prevMouseX = 0,
  prevMouseY = 0;
//joueur (sous-marin)
let player;

//fontion de tir
function shoot(delta) {
  if (fireTimerMS > 0) {
    fireTimerMS -= delta;
  }

  if (canFire()) {
    fire();
  }
}
//si le joueur peut tirer
function canFire() {
  return keyIsDown(32) && fireTimerMS <= 0;
}
//fct de tir
function fire() {
  //copie de la vitesse du joueur
  const vel = player.vel.copy();
  vel.setMag(bulletSpeed);
  // Ajoute une nouvelle balle au tableau des bullets
  bullets.push(new Bullet(player.x, player.y, vel.x, vel.y));
  fireTimerMS = fireTimerMSMax;
}
