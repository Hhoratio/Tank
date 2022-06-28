import config from "../config";
import canvasAbstract from "./canvasAbstract";
import modelCement from '../models/modelCement'

class Cement extends canvasAbstract implements ModelType {
    num(): number {
        return config.quantity.cement;
    }
    model(): ModelConstructor {
        return modelCement
    }

    render(): void {
        super.createModels();
        super.renderModels();
    }
}

export default new Cement();