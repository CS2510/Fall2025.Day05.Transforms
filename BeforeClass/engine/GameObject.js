class GameObject {
    components = []
    constructor(){
        this.addComponent(Transform)
    }

    start() {
        for (const component of this.components) {
            component.start()
        }
    }

    update() {
        for (const component of this.components) {
            component.update()
        }
    }

    draw(ctx) {
        for (const component of this.components) {
            component.draw(ctx)
        }
    }

    addComponent(componentReference, values){
        let component = new componentReference()
        Object.assign(component, values)
        this.components.push(component)
        component.gameObject = this
    }

    get transform(){
        return this.components[0]
    }
}