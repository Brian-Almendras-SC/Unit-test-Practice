import bulletController from "../BulletController.js";

describe('Testing controller for bullet.js `bulletController.js`',function(){
    let bullet_Controller
    beforeEach(()=>{
        bullet_Controller=new bulletController("canvas", 180, "lightred", true)
    })
    it.skip('should create', () => {
        expect(bullet_Controller).toBeTruthy()
    });
})