import "./global.scss";
import config from "./config";
import { promise } from "./toolsService/image";
import grass from "./canvas/canvasGrass";
import wall from './canvas/canvasWall'
import water from './canvas/canvasWater'
import cement from './canvas/canvasCement'
import tank from './canvas/canvasTank'
import bullet from "./canvas/canvasBullet";
import boss from "./canvas/canvasSymbol";
import player from "./canvas/canvasPlayer";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.style.width = `${config.canvas.width}px`;
app.style.height = `${config.canvas.height}px`;

async function bootstrap() {

    /* 先將圖片加載完時，才渲染畫布 */
    await Promise.all(promise);

    grass.render();
    wall.render();
    water.render();
    cement.render();
    tank.render();
    bullet.render()
    boss.render()
    player.render()
}

void bootstrap();
