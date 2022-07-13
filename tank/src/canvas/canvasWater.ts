import config from "../config";
import canvasAbstract from "./canvasAbstract";
import modelWater from '../models/modelWater'

export default new (class extends canvasAbstract implements canvasInterface {
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
})('water')


