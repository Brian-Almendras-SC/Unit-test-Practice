import 'jest-canvas-mock';
import bulletController from "../BulletController.js";

describe('Testing controller for bullet.js `bulletController.js`',function(){
    let bullet_Controller
    beforeEach(()=>{
        bullet_Controller=new bulletController("canvas", 180, "lightred", true,true)// en el ultimo campo true para enmy y enemi controller ponen false, poor que tiene que entrar al if de esos constructores
    })
    it('should create', () => {
        expect(bullet_Controller).toBeTruthy()
    });
})