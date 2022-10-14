import EnemyController from "../EnemyController";
import BulletController from "../BulletController";
import MovingDirection from "../MovingDirection";

describe('Testing controller for movingDirection in `enemyController.js`',function(){
    let enemyController,enemyBulletController,playerBulletController,canvas    
    beforeEach(()=>
    {
        canvas = {width:600, height:600}
        enemyBulletController = new BulletController(canvas,4,"white",true,true)
        playerBulletController = new BulletController(canvas,10,"red",true,true)
        enemyController = new EnemyController(canvas, enemyBulletController,playerBulletController,false,false)           
    })
    it('should create constructor for EnemyController', () => {
        expect(enemyController).toBeTruthy()        
    });
    it('should move right after creation', () => {
        expect(enemyController.getCurrentDirection()).toEqual(MovingDirection.right)        
    });
    it('should move down after to hit the right wall', () => {
        while(enemyController.getCurrentDirection()==MovingDirection.right){            
            enemyController.draw(null)
        }
        expect(enemyController.getCurrentDirection()).toEqual(MovingDirection.downLeft) 
    });
    it('should move left after render 30 times', () => {        
        while(enemyController.getCurrentDirection()==MovingDirection.right){                      
            enemyController.draw(null)
        }
        for(var i=0; i < 30; i++){
            enemyController.draw(null)
        }
        expect(enemyController.getCurrentDirection()).toEqual(MovingDirection.left) 
    });
    it('should move down after to hit the left wall', () => {        
        while(enemyController.getCurrentDirection()==MovingDirection.right){                      
            enemyController.draw(null)
        }
        for(var i=0; i < 30; i++){
            enemyController.draw(null)
        }
        while(enemyController.getCurrentDirection()==MovingDirection.left){                      
            enemyController.draw(null)
        }
        expect(enemyController.getCurrentDirection()).toEqual(MovingDirection.downRight) 
    });
    it('should reset movement after move down', () => {        
        while(enemyController.getCurrentDirection()==MovingDirection.right){                      
            enemyController.draw(null)
        }
        for(var i=0; i < 30; i++){
            enemyController.draw(null)
        }
        while(enemyController.getCurrentDirection()==MovingDirection.left){                      
            enemyController.draw(null)
        }
        for(var i=0; i < 30; i++){
            enemyController.draw(null)
        }
        expect(enemyController.getCurrentDirection()).toEqual(MovingDirection.right) 
    });
})