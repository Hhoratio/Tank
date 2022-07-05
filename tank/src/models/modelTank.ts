import { directionEnum } from './../enum/directionEnum';
import { image } from './../toolsService/image';
import modelAbstract from "./modelAbstract";
import _ from 'lodash'
import config from '../config';

export default class extends modelAbstract implements modelInterface {

    protected direction: directionEnum = directionEnum.top

    name: string = 'tank'

    render() {
        this.randomDirection()
        super.draw(this.randomImage())

        // setInterval(() => {
        //     this.move()
        // }, 50)
    }

    protected move() {
        this.canvas.clearRect(this.x, this.y, config.picture.width, config.picture.height)

        switch(this.direction) {
            case directionEnum.top: 
                this.y -= 1
                break
            case directionEnum.bottom: 
                this.y += 1
                break
            case directionEnum.left: 
                this.x -= 1
                break
            case directionEnum.right:
                this.x += 1
                break;
        }

        super.draw(this.randomImage())
    }

    /* 隨機產生坦克方向 */
    protected randomDirection() {
        this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
    }

    protected randomImage() {
        let tankDirection = `${this.name}${_.upperFirst(this.direction)}`
        return image.get(tankDirection as keyof typeof config.image)!
    }
}