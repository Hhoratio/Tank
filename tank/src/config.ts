import grass from "./static/images/grass/grass.png";
import wall from "./static/images/wall/wall.gif";
import water from './static//images/water/water.gif'
import cement from './static/images/wall/cement.gif'
import tankTop from "./static/images/tank/top.gif";
import tankBottom from "./static/images/tank/bottom.gif";
import tankLeft from "./static/images/tank/left.gif";
import tankRight from "./static/images/tank/right.gif";
import bullet from "./static/images/bullet/bullet.jpg"
import symbol from "./static/images/symbol/symbol.png"
import playerTop from "./static/images/player/top.gif"
import playerBottom from "./static/images/player/bottom.gif"
import playerLeft from "./static/images/player/left.gif"
import playerRight from "./static/images/player/right.gif"

export default {
    canvas: {
        width: 900,
        height: 600,
    },
    picture: {
        width: 30,
        height: 30,
    },
    quantity: {
        grass: 70,
        wall: 100,
        water: 30,
        cement: 30,
        tank: 30
    },
    image: {
        grass,
        wall,
        cement,
        water,
        tankTop,
        tankBottom,
        tankLeft,
        tankRight,
        bullet,
        symbol,
        playerTop,
        playerBottom,
        playerLeft,
        playerRight
    },
    tanks: {
        enemy: {
            speed: 20
        },
        self: {
            speed: 50
        }
    }
};
