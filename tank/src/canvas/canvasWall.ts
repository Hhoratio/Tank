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
        /* cw = canvasWidth, ch = canvasHeight, mw = modelWallWidth, mh = modelWallHeight */
        const cw = config.canvas.width
        const ch = config.canvas.height
        const mw = config.picture.width
        const mh = config.picture.height

        const bossWall = [
            {x: (cw / 2) - mw * 3 , y: ch - mh},
            {x: (cw / 2) - mw * 3 , y: ch - mh * 2},
            {x: (cw / 2) - mw * 3 , y: ch - mh * 3},
            {x: (cw / 2) - mw * 2 , y: ch - mh * 3},
            {x: (cw / 2) - mw , y: ch - mh * 3},
            {x: (cw / 2), y: ch - mh * 3},
            {x: (cw / 2) + mw, y: ch - mh * 3},
            {x: (cw / 2) + mw, y: ch - mh * 2},
            {x: (cw / 2) + mw, y: ch - mh},
        ]
        bossWall.forEach(position => {
            const model = this.model() as ModelConstructor;
            const instance = new model(position.x, position.y);
            this.models.push(instance)
        });
    }
})('wall')
