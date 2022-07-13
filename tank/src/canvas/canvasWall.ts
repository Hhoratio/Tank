import config from "../config";
import canvasAbstract from "./canvasAbstract";
import modelWall from '../models/modelWall'

export default new (class extends canvasAbstract implements canvasInterface {
    num(): number {
        return config.quantity.wall
    }

    model(): ModelConstructor {
        return modelWall
    }

    render(): void {
        super.createModels()    
        this.createBossWall()
        super.renderModels()
    }

    protected createBossWall() {
        const canvasWidth = config.canvas.width
        const canvasHeight = config.canvas.height
        const modelWallWidth = config.picture.width
        const modelWallHeight = config.picture.height

        const bossWall = [
            {x: (canvasWidth / 2) - modelWallWidth * 3 , y: canvasHeight - modelWallHeight},
            {x: (canvasWidth / 2) - modelWallWidth * 3 , y: canvasHeight - modelWallHeight * 2},
            {x: (canvasWidth / 2) - modelWallWidth * 3 , y: canvasHeight - modelWallHeight * 3},
            {x: (canvasWidth / 2) - modelWallWidth * 2 , y: canvasHeight - modelWallHeight * 3},
            {x: (canvasWidth / 2) - modelWallWidth , y: canvasHeight - modelWallHeight * 3},
            {x: (canvasWidth / 2), y: canvasHeight - modelWallHeight * 3},
            {x: (canvasWidth / 2) + modelWallWidth, y: canvasHeight - modelWallHeight * 3},
            {x: (canvasWidth / 2) + modelWallWidth, y: canvasHeight - modelWallHeight * 2},
            {x: (canvasWidth / 2) + modelWallWidth, y: canvasHeight - modelWallHeight},
        ]
        bossWall.forEach(position => {
            const model = this.model() as ModelConstructor;
            const instance = new model(position.x, position.y);
            this.models.push(instance)
        });
    }
})('wall')
