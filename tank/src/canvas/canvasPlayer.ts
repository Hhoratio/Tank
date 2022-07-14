import canvasAbstract from "./canvasAbstract";
import modelPlayer from '../models/modelPlayer'
import config from "../config";

export default new (class extends canvasAbstract implements canvasInterface {
    num(): number {
        return 0
    }

    model(): ModelConstructor {
        return modelPlayer
    }

    render(): void {
        this.createPlayer();
        super.renderModels()
    }
    
    protected createPlayer() {
        const cw = config.canvas.width
        const ch = config.canvas.height
        const mw = config.picture.width
        const mh = config.picture.height

        const playerInitPosition = [{x: (cw / 2) + 3 * mw, y: ch - mh}]
        playerInitPosition.forEach(position => {
            const model = this.model() as ModelConstructor;
            const instance = new model(position.x, position.y);
            this.models.push(instance);
        })
    }
})('player')