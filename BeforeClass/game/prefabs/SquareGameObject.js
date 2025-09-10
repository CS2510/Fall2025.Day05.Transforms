class SquareGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(SquareController, {speed: 1})
        this.addComponent(Polygon, {fillStyle: "blue"})
        this.transform.scale = new Vector2(25, 25)
    }
}