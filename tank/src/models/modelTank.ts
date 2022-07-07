import { directionEnum } from './../enum/directionEnum';
import { image } from './../toolsService/image';
import modelAbstract from "./modelAbstract";
import _ from 'lodash'
import config from '../config';
import water from '../canvas/canvasWater'
import cement from '../canvas/canvasCement'
import wall from '../canvas/canvasWall'

export default class extends modelAbstract implements modelInterface {

    name: string = 'tank'
    
    image() {
        let tankDirection = `${this.name}${_.upperFirst(this.direction)}`
        return image.get(tankDirection as keyof typeof config.image)!
    }

    render() {
        super.draw()
        this.move()
    }

    protected move() {
        while(true) {
            let x = this.x
            let y = this.y
            switch(this.direction) {
                case directionEnum.top: 
                    y --
                    break
                case directionEnum.bottom: 
                    y ++
                    break
                case directionEnum.left: 
                    x --
                    break
                case directionEnum.right:
                    x ++
                    break;
            }
            if(this.isCollide(x, y) === true) {
                this.randomDirection()
            } else {
                this.x = x;
                this.y = y;
                break;
            }
        }
        super.draw()
    }

    /* 檢測畫布碰撞 */
    protected isCollide(x: number, y: number): boolean {
        if(x < 0 || x + this.width > config.canvas.width || y < 0 || y + this.height > config.canvas.height) {
            return true
        } 

        const models = [...wall.models, ...cement.models, ...water.models]
        return models.some(model => {
            let status = 
                x + this.width <= model.x || 
                x >= model.x + this.width ||
                y + this.height <= model.y ||
                y >= model.y + this.y 
            
            return !status
        }) 
        
    }
    
    /* 隨機產生坦克方向 */ 
    /* 由 modelAbstract 統一調用(一次)*/
    // protected randomDirection() {
    //     this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
    // }

}