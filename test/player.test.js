import bulletController from "../BulletController.js";
import Player from "../Player.js";

function LeftKeyDownEvent () {
    return {code:'ArrowLeft'}
}

function RightKeyDownEvent () {
    return {code:'ArrowRight'}
}

describe('Testing controller for player.js `player.js`',function(){
    let player,bullet_Controller,canvas
    beforeEach(()=>
    {
        canvas = {width:600, height:600}
        bullet_Controller=new bulletController(canvas, 180, "lightred", true,true)
        player=new Player(canvas, 1,bullet_Controller,false,false)
    })
    it('should create constructor for Player', () => {
        expect(player).toBeTruthy()        
    });
    it('should create the player in the center of the map', () => {
        expect(player.getX()).toEqual(300)        
    });
    it('should not move when not pressing keys', () => {        
        for(var i = 0; i < 500 ;i++){
            player.draw(null)
        }        
        expect(player.getX()).toEqual(300)        
    });
    it('should collition with the wall pressing left', () => {
        player.keydown(LeftKeyDownEvent())
        for(var i = 0; i < 500 ;i++){
            player.draw(null)
        }        
        player.keyup(LeftKeyDownEvent())
        expect(player.getX()).toEqual(0)        
    });
    it('should collition with the wall pressing right', () => {
        player.keydown(RightKeyDownEvent())
        for(var i = 0; i < 500 ;i++){
            player.draw(null)
        }        
        player.keyup(RightKeyDownEvent())
        expect(player.getX()).toEqual(550)        
    });
    it('should render 300 times with velocity 1 and pressing left', () => {
        player.keydown(LeftKeyDownEvent())
        var cont = 0
        while(player.getX() > 0) {  
            cont++           
            player.draw(null)
        }        
        player.keyup(LeftKeyDownEvent())
        expect(cont).toEqual(300)        
    });
    it('should render 150 times with velocity 2 and pressing left', () => {
        player.setVelocity(2)
        player.keydown(LeftKeyDownEvent())
        var cont = 0
        while(player.getX() > 0) {  
            cont++           
            player.draw(null)
        }        
        player.keyup(LeftKeyDownEvent())
        expect(cont).toEqual(150)        
    });
})