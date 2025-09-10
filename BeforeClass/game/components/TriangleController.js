class TriangleController extends Component {
    start() {
    }
    update() {
        this.transform.position.plusEquals(this.velocity)

        if (this.transform.position.x > canvas.width || this.transform.position.x < 0) {
            this.velocity.x *= -1
        }
        if (this.transform.position.y > canvas.height || this.transform.position.y < 0) {
            this.velocity.y *= -1
        }
    }
}