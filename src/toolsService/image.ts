/* 圖片存處文件，透過 new Map 將圖片存處，方便日後使用 */

import config from "../config";

type mapKey = keyof typeof config.image;

/* image 保存的容器 */
export const image = new Map<mapKey, HTMLImageElement>();

export const promise = Object.entries(config.image).map(([key, value]) => {
    return new Promise((resolve) => {
        const img = document.createElement("img");
        img.src = value;
        img.onload = () => {
            image.set(key as mapKey, img);
            resolve(img);
        };
    });
});
