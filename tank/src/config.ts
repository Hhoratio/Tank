import grass from "./static/images/grass/grass.png";
import wall from "./static/images/wall/wall.gif";
import water from './static//images/water/water.gif'
import cement from './static/images/wall/cement.gif'
import tankTop from "./static/images/tank/top.gif";
import tankBottom from "./static/images/tank/bottom.gif";
import tankLeft from "./static/images/tank/left.gif";
import tankRight from "./static/images/tank/right.gif";

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
        wall: 70,
        water: 30,
        cement: 20,
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
    },
};
