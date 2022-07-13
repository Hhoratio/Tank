import canvasAbstract from "./canvasAbstract";
import modelSymbol from '../models/modelSymbol'
import config from "../config";

export default new (class extends canvasAbstract implements canvasInterface {
    num() {
        return 0
    }

    model() {
        return modelSymbol
    }

    render() {
        this.createBoss()
        this.renderModels() 
    }

    protected createBoss() {
        ;[{x: config.canvas.width / 2 - config.picture.width, y: config.canvas.height - config.picture.height}].forEach(position => {
            const model = this.model() as ModelConstructor;
            const instance = new model(position.x, position.y)
            this.models.push(instance)
        })
    }
})('boss')