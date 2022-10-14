import 'jest-canvas-mock';
import Bullet from '../Bullet.js';
import bulletController from "../BulletController.js";

describe('Testing controller for bullet.js `bulletController.js`',function(){
    let bullet_Controller,bullets,canvas,bullet,ctx,EjamplefillRect
    beforeEach(()=>{
        canvas={height:190}
        bullet=new Bullet("canvas", 200, 180, 15,"red")
        bullet_Controller=new bulletController(canvas,5, "lightred", true,true)
        bullet_Controller.bullets=bullets;
        bullets=[bullet],bullet_Controller.timeTillNextBulletAllowed=bullets.length;
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
    })
    it('should be call bulletController ', () => {
        expect(bullet_Controller).toBeTruthy()
    });
    //draw
    it('should drew when it shoots the bullet', () => {
        bullet_Controller.draw(ctx)
        expect(bullet_Controller.timeTillNextBulletAllowed).toBeLessThanOrEqual(0)
    });
    //collideWith
    it('should return true when bullet hit sprite', () => {
        expect(bullet_Controller.collideWith(ctx)).toEqual(true)
    });

    //shoot
})