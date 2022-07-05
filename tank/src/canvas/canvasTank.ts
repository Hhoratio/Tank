import config from "../config";
import canvasAbstract from "./canvasAbstract";
import modelTank from '../models/modelTank'
import position from "../toolsService/position";

class Tank extends canvasAbstract implements canvasInterface {

    num() {
        return config.quantity.tank
    }

    model() {
        return modelTank
    }

    protected createModels() {
        for(let i = 0; i < this.num(); i++) {
            const pos = position.position()
            const model = this.model();
            const instance = new model(this.canvas, pos.x, 0)
            this.models.push(instance)
        }
    }

    render(): void {
        this.createModels();
        super.renderModels()
    }
}

export default new Tank();