import config from "../config";

type collectionType = {x: number, y: number}

class Position {

    allCollections: collectionType[] = [];
     
    /* 收集座標，避免座標重複 */
     public getCollection(num: number) {
        const collections: { x: number; y: number }[] = [];
        for (let i = 0; i < num; i++) {
            while (true) {
                const position = this.position();
                const exist = this.allCollections.some(collection => collection.x == position.x && collection.y == position.y);
                if (!exist) {
                    this.allCollections.push(position);
                    collections.push(position);
                    break;
                }
            }
        }
        return collections;
    }

    /* 隨機生成座標位置 */
    protected position() {
        return {
            x: Math.floor(Math.random() * (config.canvas.width / config.picture.width)) * config.picture.width,
            y: Math.floor(Math.random() * ((config.canvas.height / config.picture.height) - 5)) * config.picture.height + config.picture.height * 2,
        };
    }
}

export default new Position()