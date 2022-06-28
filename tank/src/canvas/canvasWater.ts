import config from "../config";
import canvasAbstract from "./canvasAbstract";
import modelWater from '../models/modelWater'

class Water extends canvasAbstract {
    num(): number {
        return config.quantity.water;
    }
    
    model(): ModelConstructor {
        return modelWater 
    }

    render(): void {
        super.createModels()
        super.renderModels()
    }
}

export default new Water()

