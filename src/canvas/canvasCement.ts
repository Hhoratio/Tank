import config from "../config";
import canvasAbstract from "./canvasAbstract";
import modelCement from '../models/modelCement'

export default new (class extends canvasAbstract implements canvasInterface {
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
})('cement')
