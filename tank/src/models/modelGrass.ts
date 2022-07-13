import canvasGrass from '../canvas/canvasGrass';
import { image } from '../toolsService/image';
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements modelInterface {
    
    canvas: canvasInterface = canvasGrass
    name: string = 'grass'

    image(): HTMLImageElement {
        return image.get('grass')!
    }

    render(): void {       
        super.draw() 
    }
}
