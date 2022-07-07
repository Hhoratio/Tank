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

    render(): void {
        this.createModels();
        this.renderModels();

        setInterval(()=> this.renderModels(), config.tanks.enemy.speed)
    }

    protected createModels() {
        for(let i = 0; i < this.num(); i++) {
            const pos = position.position()
            const model = this.model();
            const instance = new model(this.canvas, pos.x, 0)
            this.models.push(instance)
        }
    }

    /* 因為坦克是不斷刷新畫布移動，所以把坦克的 draw 進行重寫*/
    protected renderModels() {
        this.canvas.clearRect(0, 0, config.canvas.width, config.canvas.height)
        super.renderModels();    
    }
}

export default new Tank();