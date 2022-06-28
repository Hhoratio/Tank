import grass from "./static/images/grass/grass.png";
import tank from "./static/images/tank/bottom.gif";
import wall from "./static/images/wall/wall.gif";
import water from './static//images/water/water.gif'
import cement from './static/images/wall/cement.gif'

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
        cement: 20
    },
    image: {
        grass,
        tank,
        wall,
        cement,
        water,
    },
};
