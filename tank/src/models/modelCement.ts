import { image } from './../toolsService/image';
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements modelInterface {
    
    name: string = 'Cement'

    image(): HTMLImageElement {
        return image.get('cement')!
    }

    render(): void {
        super.draw()
    }
}