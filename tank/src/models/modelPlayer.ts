import { image } from './../toolsService/image';
import modelAbstract from "./modelAbstract";
import canvasPlayer from '../canvas/canvasPlayer'
import _ from "lodash";
import config from '../config';
import { directionEnum } from '../enum/directionEnum';
import tools from '../tools/collide'
import canvasBullet from '../canvas/canvasBullet';

export default class extends modelAbstract implements modelInterface {
    name: string = 'player';
    public canvas: canvasInterface = canvasPlayer;
    bindEvent: boolean = false

    image(): HTMLImageElement {
        let playerDirection = `${this.name}${_.upperFirst(this.direction)}`;
        return image.get(playerDirection as keyof typeof config.image)!
    }

    render(): void {
        super.draw()
        if(!this.bindEvent) {
            this.bindEvent = !this.bindEvent;
            document.addEventListener('keydown', this.changeDirection.bind(this))
            document.addEventListener('keydown', this.tankMove.bind(this))
            document.addEventListener('keydown', (e:KeyboardEvent)=> {
                
                if(e.code === 'Space') canvasBullet.playerBullet()
            })
        }
    }

    protected changeDirection(e: KeyboardEvent) {      
        switch(e.code) {
            case 'ArrowUp': 
                this.direction = directionEnum.top
                break
            case 'ArrowDown': 
                this.direction = directionEnum.bottom
                break
            case 'ArrowLeft': 
                this.direction = directionEnum.left
                break
            case 'ArrowRight': 
                this.direction = directionEnum.right
                break
        }
        // this.canvas.renderModels()
    }

    protected tankMove(e: KeyboardEvent) {
        let x = this.x
        let y = this.y
        switch(e.code) {
            case 'ArrowUp': 
                y -= 5
                break
            case 'ArrowDown': 
                y += 5
                break
            case 'ArrowLeft':
                x -= 5
                break
            case 'ArrowRight': 
                x += 5
                break
        } 
        if(tools.borderCollide(x, y) || tools.modelCollide(x, y)) {
            return
        } else {
            this.x = x
            this.y = y
        }
        this.canvas.renderModels()
    }
}
