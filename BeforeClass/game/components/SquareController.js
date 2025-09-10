class SquareController extends Component {
    start() {
    }
    update() {

        // console.log(Input.keysDown)

        let proposedChange = Vector2.zero

        //Left
        if (Input.keysDown.includes("ArrowLeft")) {
            proposedChange.plusEquals(Vector2.left)
        }
        if (Input.keysDown.includes("ArrowRight")) {
            proposedChange.plusEquals(Vector2.right)
        }
        if (Input.keysDown.includes("ArrowUp")) {
            proposedChange.plusEquals(Vector2.up)
        }
        if (Input.keysDown.includes("ArrowDown")) {
            proposedChange.plusEquals(Vector2.down)
        }

        this.transform.position.plusEquals(proposedChange.scaledEquals(this.speed))
    }
    
}