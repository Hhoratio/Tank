import { image } from './../toolsService/image';
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements ModelType {
    render() {
        super.draw(image.get('water')!)
    }
}