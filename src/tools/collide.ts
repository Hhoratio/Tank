import config from "../config"
import wall from "../canvas/canvasWall"
import cement from "../canvas/canvasCement"
import water from "../canvas/canvasWater"
import symbol from "../canvas/canvasSymbol"

export default {
    /* 邊界檢測 */
    borderCollide(x: number, y: number, width = config.picture.width, height = config.picture.height): boolean {
        return x < 0 || x + width > config.canvas.width || y < 0 || y + height > config.canvas.height
    },

    /* 碰撞模型檢測 */
    modelCollide(
        x: number, 
        y: number, 
        width = config.picture.width, 
        height = config.picture.height, 
        models = [...wall.models, ...cement.models, ...water.models, ...symbol.models]
        ): modelInterface | undefined {

        /* 障礙物檢測 */
        /* models 每個元素實例化的集合 */
        /* 當子彈或坦克碰撞時，就會反賄當前的模型 */

        return models.find(model => {
            const status = 
                x + width <= model.x ||  x >= model.x + model.width || y + height <= model.y || y >= model.y + model.height
        
            return !status
        })       
    }
}