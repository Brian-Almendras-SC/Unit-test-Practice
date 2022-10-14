import Enemy from "../Enemy.js";
describe('Testing class Enemy',function(){
    let enemy,sprite
    beforeEach(()=>{
        enemy=new Enemy(200, 180, 1,false) 
        sprite = {
            x:201, 
            y:181, 
            width: 5,
            height:20
        }
    })

test('should created enemy', () => {
        expect(enemy).toBeTruthy()
})        

test('Should assign parameters of constructor the enemy',function() {
    expect(enemy.x).toBeGreaterThanOrEqual(1)
    expect(enemy.y).toBeGreaterThanOrEqual(1)
    expect(enemy.width).toBeGreaterThanOrEqual(44)
    expect(enemy.height).toBeGreaterThanOrEqual(32)
})

test('Should replaced to drawImage with enemy image parameter',function() {
    let EjampledrawImage= {
        image:enemy.image,
        x:300, 
        y:500, 
        width:250,
        height:400
        },
    ctx={
        drawImage: function(){
            return EjampledrawImage;
            }
        } 

    enemy.draw(ctx)
    expect(ctx.drawImage()).toEqual(EjampledrawImage)
    expect(enemy.y).toEqual(180)
})

test('Should update x and y from enemy ',function() {
    enemy.move(2,1);
    expect(enemy.x).toBeGreaterThanOrEqual(1)
    expect(enemy.y).toBeGreaterThanOrEqual(1)
})
//All paths from collideWith
it('should be return `true` when all conditions for enemy colllide are true', () => {

    let res=enemy.collideWith(sprite)
    expect(res).toEqual(true)
});
it('should be return `False` when last condition of enemy collideWith is false', () => {
    sprite['y']=200;
    enemy.x=10;
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