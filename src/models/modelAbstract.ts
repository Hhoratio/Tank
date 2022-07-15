import audio from "../audio";
import config from "../config";
import { directionEnum } from './../enum/directionEnum';

export default abstract class modelAbstract {
	abstract name: string
	public abstract canvas: canvasInterface
	abstract render(): void 
	abstract image(): HTMLImageElement
	
	/* 隨機生成坦克初始方向 */
	public direction: directionEnum = directionEnum.bottom
	
	/* 坦克的長、寬，供子類使用 */
	public  width = config.picture.width
	public  height = config.picture.height

	constructor(public x: number, public y: number) {
		this.randomDirection() 
	}

	/* 隨機產生坦克方向 */
    protected randomDirection() {
        this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
    }

	protected draw() {
		this.canvas.ctx.drawImage(this.image(), this.x, this.y, config.picture.width, config.picture.height);
	}

	public destroy() {
		this.canvas.removeModel(this)
		this.canvas.renderModels()
	}

	protected explode(model: modelInterface) {
		audio.explode()
		Array(...Array(8).keys()).reduce((promise, index) => {
			return new Promise((resolve) => {
				setTimeout(() => {
					const img = new Image()
					img.src = `./src/static/images/explode/explode${index}.gif`
					img.onload = () => {
						this.canvas.ctx.drawImage(img, model.x, model.y, model.width, model.height)
						resolve(promise)
					}
				}, 200);
			})
		}, Promise.resolve())
	}
} 