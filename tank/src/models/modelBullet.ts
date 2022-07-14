import { directionEnum } from './../enum/directionEnum';
import { image } from './../toolsService/image';
import canvasBullet from "../canvas/canvasBullet";
import modelAbstract from "./modelAbstract";
import config from '../config';
import tools from "../tools/collide"
import wall from "../canvas/canvasWall"
import cement from '../canvas/canvasCement';
import player from '../canvas/canvasPlayer';
import tank from '../canvas/canvasTank'
import symbol from '../canvas/canvasSymbol'

export default class extends modelAbstract implements modelInterface {
    canvas: canvasInterface = canvasBullet;
    name: string = 'bullet';
    constructor(public tank: modelInterface) {
        super(tank.x + config.picture.width / 2, tank.y + config.picture.height / 2)
        this.direction = tank.direction as unknown as directionEnum
    }

    image(): HTMLImageElement {
        return image.get('bullet')!;
    }

    render(): void {
       this.bulletMove()
    }

    protected bulletMove(): void {
        let x = this.x
        let y = this.y
        let speed = this.tank.name === 'player'? 5 : 2
        switch(this.direction) {
            case directionEnum.top:
                y -= speed
                break
            case directionEnum.bottom: 
                y += speed
                break
            case directionEnum.left: 
                x -= speed
                break
            case directionEnum.right: 
                x += speed
                break
        }

        const modelTouch = tools.modelCollide(x, y, 2, 2, 
            [...wall.models, ...cement.models, ...player.models, ...tank.models, ...symbol.models])

        if(tools.borderCollide(x, y, 2, 2)) {
            this.destroy()     
        } else if(modelTouch && modelTouch.name !== this.tank.name) {
            this.destroy() 
            if(modelTouch.name !== 'cement') modelTouch.destroy()
            this.explode(modelTouch)
        } else {
            this.x = x
            this.y = y
            this.draw();
        }
    }
    
    protected draw(): void {
        this.canvas.ctx.drawImage(this.image(), this.x, this.y, 2, 2)
    }
    
}

