/* 畫布抽象類定義，每個坦克遊戲的內容都要產生自己的 canvas，所以將畫布獨立成抽象類 */
/* 讓其他內容去繼承 canvas 抽象類。就不需要在每個內容再重新定義 canvas */

import config from "../config";
import position from "../toolsService/position";

export default abstract class canvasAbstract {
    /* 用來存放畫布裡的實例 */
    public models: modelInterface[] = [];

    /* 定義抽象 render() 使其子類調用 drowModel () */
    abstract render(): void;
    abstract num(): number;
    abstract model(): ModelConstructor | BulletModelConstructor; 

    constructor(
        protected name: string,
        protected el: HTMLCanvasElement = document.createElement("canvas"),
        public ctx = el.getContext("2d")!,
        protected app = document.querySelector("#app") as HTMLDivElement
    ) {
        this.createCanvas();
    }

    /* 畫布掛載 */
    protected createCanvas() {

        /* 定義 canvas 的長、寬 */
        this.el.width = config.canvas.width;
        this.el.height = config.canvas.height;
        this.el.setAttribute('name', this.name)
        
        /* 將 canvas 插入 app 裡 */
        this.app.appendChild(this.el);
    }


    /* 繪製模型 */
    protected createModels() {
        position.getCollection(this.num()).forEach(position => {
            const model = this.model() as ModelConstructor;
            const instance = new model(position.x, position.y);
            this.models.push(instance)
        });
    }
    
 
    public renderModels() {
        this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height)
        this.models.forEach(model => model.render()) 
    }

    public removeModel(model: modelInterface) {
        this.models = this.models.filter(m => m != model)
    }
}
