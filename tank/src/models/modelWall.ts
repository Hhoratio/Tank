import canvasWall from '../canvas/canvasWall';
import { image } from './../toolsService/image';
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements modelInterface {
    canvas: canvasInterface = canvasWall
    name: string = 'wall'

    image(): HTMLImageElement {
        return image.get('wall')!
    }

    render(): void {
        super.draw()
    }
}