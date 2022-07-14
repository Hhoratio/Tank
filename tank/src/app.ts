import "./global.scss";
import config from "./config";
import { promise } from "./toolsService/image";
import grass from "./canvas/canvasGrass";
import wall from './canvas/canvasWall'
import water from './canvas/canvasWater'
import cement from './canvas/canvasCement'
import tank from './canvas/canvasTank'
import bullet from "./canvas/canvasBullet";
import symbol from "./canvas/canvasSymbol";
import player from "./canvas/canvasPlayer";
import audio from "./audio";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.style.width = `${config.canvas.width}px`;
app.style.height = `${config.canvas.height}px`;

export default {
    isStart: false,
    state: 0,
    interval: 0,
    init() {
        app.addEventListener('click', () => {
            if(this.isStart === false) {
                this.isStart = true;
                app.style.backgroundImage = 'none';
                app.style.cursor = 'auto'
                this.start()
                audio.start()
            }
            
            this.interval = setInterval(() => {
                if(tank.models.length == 0) this.state = 1;
                if(symbol.models.length == 0 || player.models.length == 0) this.state = 2;
                if(this.state != 0) {
                    tank.stop();
                    bullet.stop();
                    this.end();
                }
            }, 100)
        })
    },
    async start() {
        await Promise.all(promise);
        
        grass.render();
        wall.render();
        water.render();
        cement.render();
        tank.render();
        bullet.render()
        symbol.render()
        player.render()
    },
    end() {
        clearInterval(this.interval);
        const el = document.createElement('canvas')     
        const ctx = el.getContext('2d')!
        el.width = config.canvas.width
        el.height = config.canvas.height
        ctx.fillStyle = '#f1c40f'
        ctx.font = '100px CascadiaMono'
        ctx.textBaseline = 'top'
        ctx.textAlign = 'center'
        ctx.fillText(this.state == 1? '獲勝': '失敗', config.canvas.width / 2, config.canvas.height / 2);
        app.appendChild(el)
    }
}