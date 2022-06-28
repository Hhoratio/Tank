import config from "../config";
import canvasAbstract from "./canvasAbstract";
import modelWall from '../models/modelWall'

class Walls extends canvasAbstract implements ModelType{
    num(): number {
        return config.quantity.wall
    }

    model(): ModelConstructor {
        return modelWall
    }

    render(): void {
        super.createModels()    
        super.renderModels()
    }
}

export default new Walls()