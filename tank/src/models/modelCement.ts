import { image } from './../toolsService/image';
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements modelInterface {
    render(): void {
        super.draw(image.get('cement')!)
    }
}