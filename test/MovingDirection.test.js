import MovingDirection from "../MovingDirection";

describe("Testing direction",()=>{
    let moveDirection
    beforeEach(()=>{
        moveDirection=MovingDirection;
    })
    it('should create function moving direction ', () => {
        expect(moveDirection.left).toEqual(0)
        expect(moveDirection.right).toEqual(1)
        expect(moveDirection.downLeft).toEqual(2)
        expect(moveDirection.downRight).toEqual(3)
    });
})