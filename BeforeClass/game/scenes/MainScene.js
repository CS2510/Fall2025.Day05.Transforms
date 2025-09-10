class MainScene extends Scene{
    constructor(){
        super()
        //Game-specific code
        this.instantiate(new TriangleGameObject(), new Vector2(0, 100))
        this.instantiate(new TriangleGameObject(), new Vector2(100,0 ))
        this.instantiate(new FastTriangleGameObject(), new Vector2(200, 0))
        this.instantiate(new SquareGameObject(), new Vector2(50, 50))
    }
}