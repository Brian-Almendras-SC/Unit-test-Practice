import imagen from "./extension/image.js";
export default class Enemy {
  constructor(x, y, imageNumber,imageCreatio=true) {
    this.x = x;
    this.y = y;
    this.width = 44;
    this.height = 32;

    if (imageCreatio) {
      this.image = new Image();
      this.image.src = `images/enemy${imageNumber}.png`;
    } else {
      this.image = new imagen();
      this.image.src = `images/enemy${imageNumber}.png`;
    }
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  move(xVelocity, yVelocity) {
    this.x += xVelocity;
    this.y += yVelocity;
  }

  collideWith(sprite) {
    if (
      this.x + this.width > sprite.x &&
      this.x < sprite.x + sprite.width &&
      this.y + this.height > sprite.y &&
      this.y < sprite.y + sprite.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}
