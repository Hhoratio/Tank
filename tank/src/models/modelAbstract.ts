import config from "../config";
import { directionEnum } from './../enum/directionEnum';

export default abstract class modelAbstract {
	abstract name: string

	abstract render(): void 

	abstract image(): HTMLImageElement

	/* 隨機生成坦克初始方向 */
	protected direction: directionEnum = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum

	/* 坦克的長、寬，供子類使用 */
	protected width = config.picture.width

	protected height = config.picture.height

	constructor(protected canvas: CanvasRenderingContext2D, public x: number, public y: number) 
	{
		this.randomDirection()
	}

	/* 隨機產生坦克方向 */
    protected randomDirection() {
        this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
    }

	protected draw() {
		this.canvas.drawImage(this.image(), this.x, this.y, config.picture.width, config.picture.height);
	}
} 