import canvasCement from '../canvas/canvasCement';
import { image } from './../toolsService/image';
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements modelInterface {
    
    canvas: canvasInterface = canvasCement
    
    name: string = 'Cement'

    image(): HTMLImageElement {
        return image.get('cement')!
    }

    render(): void {
        super.draw()
    }
}