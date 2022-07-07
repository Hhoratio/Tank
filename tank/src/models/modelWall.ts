import { image } from './../toolsService/image';
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements modelInterface {
    name: string = 'Wall'

    image(): HTMLImageElement {
        return image.get('wall')!
    }

    render(): void {
        super.draw()
    }
}