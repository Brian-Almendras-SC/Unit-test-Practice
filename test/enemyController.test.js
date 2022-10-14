import 'jest-canvas-mock';
import EnemyController from "../EnemyController.js";
import BulletController from '../BulletController.js';
import MovingDirection from "../MovingDirection.js";

describe('Testing controller for Enemy.js EnemyController.js',function(){
    let enemy_controller,bullet_Controller1,bullet_Controller2,canvas,ctx,sprite;

    beforeEach(()=>{
        bullet_Controller1=new BulletController(canvas,5, "lightred", false,true)
        bullet_Controller2=new BulletController(canvas,5, "lightred", true,true)
        canvas={height:190}
        enemy_controller=new EnemyController("canvas", bullet_Controller1,bullet_Controller2,false,false);

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

    it('should be call enemyController ', () => {
        expect(enemy_controller).toBeTruthy()
    });

    it('it should reset the timer of move down when its lower than 0 ', () => {
        enemy_controller.moveDownTimer=0;
        enemy_controller.resetMoveDownTimer();

        expect(enemy_controller.moveDownTimer).toBe(30);
    });

    it('it should reset the timer of move down when its higher than 0 ', () => {
        enemy_controller.moveDownTimer=50;
        enemy_controller.resetMoveDownTimer();

        expect(enemy_controller.moveDownTimer).toBe(50);
    });

    it('it should the next atributes when we fire the event fireBullet, when fireBulletTimer equals 0 ', () => {
        enemy_controller.fireBulletTimer=0;
        enemy_controller.fireBullet();
        expect(enemy_controller.fireBulletTimer).toBe(100);
    });

    it('it should the next atributes when we fire the event fireBullet, when fireBulletTimer higher than 0 ', () => {
        enemy_controller.fireBulletTimer=50;
        enemy_controller.fireBullet();
        expect(enemy_controller.fireBulletTimer).toBe(49);
    });

    it('it should set the new direction and velocity taking count when moveDownTimer equals 0 ', () => {
        enemy_controller.moveDownTimer=0;
        const result = enemy_controller.moveDown(MovingDirection.right);
        expect(result).toEqual(true);
        expect(enemy_controller.currentDirection).toBe(1);
        expect(enemy_controller.xVelocity).toBeGreaterThanOrEqual(0);
        expect(enemy_controller.yVelocity).toBeGreaterThanOrEqual(1);
    });

    it('it should set the new direction and velocity taking count when moveDownTimer higher than 0 ', () => {
        const result = enemy_controller.moveDown(MovingDirection.right);
        expect(result).toEqual(false);
        expect(enemy_controller.currentDirection).toBe(1);
        expect(enemy_controller.xVelocity).toBeGreaterThanOrEqual(0);
        expect(enemy_controller.yVelocity).toBeGreaterThanOrEqual(1);
    });

    it('should substract moveDownTimer when the first condition for decrementMoveDownTimer is true', () => {
        enemy_controller.currentDirection=2;
        enemy_controller.decrementMoveDownTimer()
        expect(enemy_controller.moveDownTimer).toEqual(29)
    });

    it('should substract moveDownTimer when the first condition is false and the second condition of decrementMoveDownTimer is true', () => {
        enemy_controller.currentDirection=3;
        enemy_controller.decrementMoveDownTimer()
        expect(enemy_controller.moveDownTimer).toEqual(29)
    });

    it('should mantain the value of moveDownTimer when both conditions are false of decrementMoveDownTimer', () => {
        enemy_controller.currentDirection=1;
        enemy_controller.decrementMoveDownTimer()
        expect(enemy_controller.moveDownTimer).toEqual(30)
    });

})

