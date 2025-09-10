class Scene {
    gameObjects = []
    
    start() {
        for (const gameObject of this.gameObjects) {
            gameObject.start()
        }
    }
    update() {
        for (const gameObject of this.gameObjects) {
            gameObject.update()
        }
    }
    draw(ctx) {
        for (const gameObject of this.gameObjects) {
            gameObject.draw(ctx)
        }
    }
    instantiate(gameObject, position, rotation){
        if(position) gameObject.transform.position = position
        if(rotation) gameObject.transform.position = rotation
        this.gameObjects.push(gameObject)
    }
}