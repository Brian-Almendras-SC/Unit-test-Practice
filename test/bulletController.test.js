import 'jest-canvas-mock';
import Bullet from '../Bullet.js';
import bulletController from "../BulletController.js";

describe('Testing controller for bullet.js `bulletController.js`',function(){
    let bullet_Controller,bullets,canvas,bullet,ctx,EjamplefillRect,sprite
    beforeEach(()=>{
        canvas={height:190}
        bullet=new Bullet("canvas", 200, 180, 15,"red")
        bullet_Controller=new bulletController(canvas,5, "lightred", true,true)
        bullet_Controller.bullets=bullets;
        bullets=[bullet],
        bullet_Controller.timeTillNextBulletAllowed=bullets.length;
        EjamplefillRect= {
            x:300, 
            y:500, 
            width:250,
            height:400
            };
        ctx={
            fillStyle:"rojo",
            fillRect: function(){
                return EjamplefillRect;
                }
            };
            sprite = {
                canvas:"sprite", 
                x:201, 
                y:181, 
                velocity:15,
                bulletColor:"orange",
                width: 5,
                height:20
            }
    })
    it('should be call bulletController ', () => {
        expect(bullet_Controller).toBeTruthy()
    });
    //draw
    it('should drew when it shoots the bullet and time for next bullet is 0', () => {
        bullet_Controller.draw(ctx)
        expect(bullet_Controller.timeTillNextBulletAllowed).toBeLessThanOrEqual(0)
    });
    
    it('should drew when it shoots the bullet and time for next bullet is less than 0 ', () => {
        bullet_Controller.timeTillNextBulletAllowed=-1;
        bullet_Controller.draw(ctx)
        expect(bullet_Controller.timeTillNextBulletAllowed).toBeLessThan(0)
    });
    //collideWith
    it('should return true when bullet hit sprite', () => {
        expect(bullet_Controller.collideWith(sprite)).toEqual(true)
    });
    it('should return false when bullet hit sprite', () => {
        sprite['y']=250;
        expect(bullet_Controller.collideWith(sprite)).toEqual(false)
    });
    //shoot
    it('should change the bullet parameters with shoot parameters', () => {
        bullet_Controller.shoot(210,190,5,0)
        expect(bullet_Controller)
    });
})