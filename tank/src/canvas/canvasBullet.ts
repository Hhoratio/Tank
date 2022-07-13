import canvasAbstract from "./canvasAbstract";
import modelBullet from '../models/modelBullet'
import canvasTank from "./canvasTank";

export default new (class extends canvasAbstract implements canvasInterface {
    num(): number {
        return 0
    }

    model(): BulletModelConstructor {
        return modelBullet
    }

    render(): void {
        setInterval(() => {
            this.createBullet()
            this.renderModels()
        }, 30)
    }

    /* 子彈必須根據實例化的坦克生成 */
    createBullet() {
        canvasTank.models.forEach(tank => {
            const isExists = this.models.some(b => b.tank == tank)
            if(!isExists) {
                this.models.push(new modelBullet(tank))
            } 
        })    
    }    
})('bullet')
