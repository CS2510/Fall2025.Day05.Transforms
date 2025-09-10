class TriangleGameObject extends GameObject {
    constructor() {
        super()
        this.addComponent(TriangleController, {velocity: new Vector2(1, 1)})
        this.addComponent(Polygon, { fillStyle: "white", points: [new Vector2(0, -1), new Vector2(1, 1), new Vector2(-1, 1)] })
        this.transform.scale = new Vector2(10, 10)
    }
}