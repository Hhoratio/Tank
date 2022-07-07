import config from "../config";
import canvasAbstract from "./canvasAbstract";
import modelGrass from "../models/modelGrass";

class Straw extends canvasAbstract implements canvasInterface {
    num(): number {
        return config.quantity.grass;
    }

    model(): ModelConstructor {
        return modelGrass;
    }

    render(): void {
        super.createModels(); 
        super.renderModels();
    }
}

export default new Straw();
