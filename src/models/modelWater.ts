import canvasWater from '../canvas/canvasWater';
import { image } from './../toolsService/image';
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements modelInterface {
    canvas: canvasInterface = canvasWater
    name: string = 'water'

    image(): HTMLImageElement {
        return image.get('water')!
    }

    render() {
        super.draw()
    }
}