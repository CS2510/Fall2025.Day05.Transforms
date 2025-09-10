class FastTriangleGameObject extends GameObject{
  constructor() {
        super()
        this.addComponent(TriangleController, {velocity: new Vector2(2, 2)})
        this.addComponent(Polygon, { fillStyle: "red", points: [new Vector2(0, -1), new Vector2(1, 1), new Vector2(-1, 1)] })
        this.transform.scale = new Vector2(5, 5)
    }
}