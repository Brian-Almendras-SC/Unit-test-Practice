import Bullet from "../Bullet.js";
describe('Testing class bullet',function(){
    let bullet,sprite
    beforeEach(()=>{
        bullet=new Bullet("canvas", 200, 180, 15,"red") 
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
    test('should created bullet', () => {
        expect(bullet).toBeTruthy()
    });
    test('Should assignamented parameters of constructor the bullet',function() {
        expect(bullet.canvas).toBe("canvas")
        expect(bullet.x).toBeGreaterThanOrEqual(1)
        expect(bullet.y).toBeGreaterThanOrEqual(1)
        expect(bullet.velocity).toEqual(15)
        expect(bullet.bulletColor).toMatch("red")
    })
    test('Should replaced to fillstyle with bullet color parameter',function() {
        let EjamplefillRect= {
            x:300, 
            y:500, 
            width:250,
            height:400
            },
        ctx={
            fillStyle:"Blue",
            fillRect: function(){
                return EjamplefillRect;
                }
            }    
        bullet.draw(ctx)
        expect(ctx.fillStyle).toBe("red")
        expect(ctx.fillRect()).toEqual(EjamplefillRect)
        expect(bullet.y).toEqual(165)
    })
    //Path coverage of collideWith
    it('should be return `TRUE` when all conditions are true', () => {

        let res=bullet.collideWith(sprite)
        expect(res).toEqual(true)
    });
    it('should be return `False` when last condition is false', () => {
        sprite['y']=200;
        let res=bullet.collideWith(sprite)
        expect(res).toEqual(false)
    });
    
    it('should be return `False` when third condition is false', () => {
        sprite['y']=250;
        let res=bullet.collideWith(sprite)
        expect(res).toEqual(false)
    });
    it('should be return `False` when second condition is false', () => {
        sprite['x']=180;
        let res=bullet.collideWith(sprite)
        expect(res).toEqual(false)
    });
    it('should be return `False` when second condition is false', () => {
        sprite['x']=250;
        let res=bullet.collideWith(sprite)
        expect(res).toEqual(false)
    });
})