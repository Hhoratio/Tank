import { image } from '../toolsService/image';
import canvasSymbol from "../canvas/canvasSymbol";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements modelInterface{
    name: string = 'Symbol';
    public canvas: canvasInterface = canvasSymbol;
    render(): void {
        super.draw()
    }
    image(): HTMLImageElement {
        return image.get('symbol')!;
    }
    
}