import imagen from "./extension/image.js";
export default class Player {
  rightPressed = false;
  leftPressed = false;
  shootPressed = false;

  constructor(canvas, velocity, bulletController,imageCreation=true,documento=true){
    this.canvas = canvas;
    this.velocity = velocity;
    this.bulletController = bulletController;

    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 75;
    this.width = 50;
    this.height = 48;

    if(imageCreation){
      this.image = new Image();
      this.image.src = "images/player.png";
    }else{
      this.image = new imagen();
      this.image.src = "images/player.png";
    }
    if(documento){
      document.addEventListener("keydown", this.keydown);
      document.addEventListener("keyup", this.keyup);
    }
  }

  draw(ctx) {
    if (this.shootPressed) {
      this.bulletController.shoot(this.x + this.width / 2, this.y, 4, 10);
    }
    this.move();
    this.collideWithWalls();
    if(ctx!= null){
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }    
  }

  collideWithWalls() {
    //left
    if (this.x < 0) {
      this.x = 0;
    }

    //right
    if (this.x > this.canvas.width - this.width) {
      this.x = this.canvas.width - this.width;
    }
  }

  move() {    
    if (this.rightPressed) {
      this.x += this.velocity;
    } else if (this.leftPressed) {      
      this.x += -this.velocity;
    }
  }

  keydown = (event) => {
    if (event.code == "ArrowRight") {
      this.rightPressed = true;
    }
    if (event.code == "ArrowLeft") {
      this.leftPressed = true;
    }
    if (event.code == "Space") {
      this.shootPressed = true;
    }
  };

  keyup = (event) => {
    if (event.code == "ArrowRight") {
      this.rightPressed = false;
    }
    if (event.code == "ArrowLeft") {
      this.leftPressed = false;
    }
    if (event.code == "Space") {
      this.shootPressed = false;
    }
  };

  getX() {
    return this.x;
  }

  setVelocity(velocity) {
    this.velocity = velocity
  }
}
