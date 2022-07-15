import { directionEnum } from './../enum/directionEnum';
import { image } from './../toolsService/image';
import modelAbstract from "./modelAbstract";
import _ from 'lodash'
import config from '../config';
import canvasTank from '../canvas/canvasTank';
import tools from "../tools/collide"

export default class extends modelAbstract implements modelInterface {
    canvas: canvasInterface = canvasTank
    name: string = 'tank'
    
    image() {
        let tankDirection = `${this.name}${_.upperFirst(this.direction)}`
        return image.get(tankDirection as keyof typeof config.image)!
    }
    render() {
        // super.draw()
        this.move()
        if(_.random(200) == 1) {
            this.direction = directionEnum.bottom
        }
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
            
            if(tools.modelCollide(x, y) || tools.borderCollide(x, y)) {
                this.randomDirection()
            } else {
                this.x = x;
                this.y = y;
                break;
            }
        }
        super.draw()
    } 
}