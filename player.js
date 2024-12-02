class Player {
  constructor(x, y) {
    //pos x et y du joueur
    this.x = x;
    this.y = y;
    //vitesse x et y du joueur
    this.vel = createVector(0, 0);
    //vitesse max et force max
    this.maxVel = 2;
    this.maxForce = 1;
  }

  update(delta) {
    //mise a jour de la position du joueur en fct de la souris
    const desired = createVector(mouseX - this.x, mouseY - this.y);
    desired.setMag(this.maxVel);
    const steering = desired.copy().sub(this.vel);
    //limite la force de steering
    if (steering.mag() > this.maxForce) {
      steering.setMag(this.maxForce);
    }
    //ajoute la force de steering a la vitesse du joueur
    this.vel = this.vel.add(steering);
    this.x += this.vel.x;
    this.y += this.vel.y;
  }

  draw() {
    //dessine le joueur (sous-marin)
    push();
    translate(this.x, this.y);
    rotate(this.vel.heading());
    fill(255, 204, 0);
    rectMode(CENTER);
    rect(0, 0, 60, 30, 10);

    fill(0, 153, 255);
    ellipse(-20, 0, 10, 10);
    ellipse(0, 0, 10, 10);
    ellipse(20, 0, 10, 10);

    fill(255, 204, 0);
    rect(-10, -20, 10, 20);
    rect(-10, -30, 20, 10);

    fill(255, 204, 0);
    triangle(-35, -10, -35, 10, -45, 0);

    pop();
  }
}
