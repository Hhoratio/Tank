import "./global.scss";
import config from "./config";
import grass from "./canvas/canvasGrass";
import wall from './canvas/canvasWall'
import water from './canvas/canvasWater'
import cement from './canvas/canvasCement'
import { promise } from "./toolsService/image";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.style.width = `${config.canvas.width}px`;
app.style.height = `${config.canvas.height}px`;

async function bootstrap() {
    await Promise.all(promise);

    /* 生成 各元素 畫布 */
    grass.render();
    wall.render();
    water.render();
    cement.render();
}

void bootstrap();
