import Bullet from "../Bullet.js";
describe('f',function(){
    test('f1',function() {
        let b=new Bullet("as", 2, 3, 4,"BulletColor")
        expect(b.bulletColor).toBe("BulletColor")
    })
    test('f2',function() {
        let b=new Bullet("as", 2, 3, 4,"BColor")
        let ctx={fillStyle:"m",fillRect:function() {
            
        }}
        b.draw(ctx)
        expect(ctx.fillStyle).toBe("BColor")
    })
})  