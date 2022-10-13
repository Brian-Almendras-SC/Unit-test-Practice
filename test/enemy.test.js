import Enemy from "../Enemy.js";
describe('Testing class Enemy',function(){
    let enemy,sprite
    beforeEach(()=>{
        enemy=new Enemy(200, 180, 1,true) 
        sprite = {
            x:201, 
            y:181, 
            width: 5,
            height:20
        }
    })

test('Should assignamented parameters of constructor the enemy',function() {
    expect(enemy.x).toBeGreaterThanOrEqual(1)
    expect(enemy.y).toBeGreaterThanOrEqual(1)
})
test('Should replaced to fillstyle with enemy color parameter',function() {
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
    enemy.draw(ctx)
    expect(ctx.fillStyle).toBe("red")
    expect(ctx.fillRect()).toEqual(EjamplefillRect)
    expect(enemy.y).toEqual(165)
})
//Path coverage of collideWith
it('should be return `TRUE` when all conditions for enemy colllide are true', () => {

    let res=enemy.collideWith(sprite)
    expect(res).toEqual(true)
});
it('should be return `False` when last condition of enemy collideWith is false', () => {
    sprite['y']=200;
    let res=enemy.collideWith(sprite)
    expect(res).toEqual(false)
});

it('should be return `False` when third  condition of enemy collideWith is false', () => {
    sprite['y']=250;
    let res=enemy.collideWith(sprite)
    expect(res).toEqual(false)
});
it('should be return `False` when second condition of enemy collideWith is false', () => {
    sprite['x']=180;
    let res=enemy.collideWith(sprite)
    expect(res).toEqual(false)
});
it('should be return `False` when second condition of enemy collideWith is false', () => {
    sprite['x']=250;
    let res=enemy.collideWith(sprite)
    expect(res).toEqual(false)
});
});