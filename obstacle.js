class Obstacle {
  constructor(x, y, r, couleur) {
    this.pos = createVector(x, y);
    this.r = r;
    this.color = couleur;
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y);
    imageMode(CENTER);
    image(obstaclesImg, 0, 0, this.r * 2, this.r * 2); // Draw the obstacle image with the specified size
    pop();
  }
}