import bulletController from "../BulletController.js";
import Player from "../Player.js";

describe('Testing controller for player.js `player.js`',function(){
    let player,bullet_Controller
    beforeEach(()=>
    {
        bullet_Controller=new bulletController("canvas", 180, "lightred", true,true)
        player=new Player("canvas", 1,bullet_Controller,false,false)
    })
    it('should create constructor for Player', () => {
        expect(player).toBeTruthy()
    });
})