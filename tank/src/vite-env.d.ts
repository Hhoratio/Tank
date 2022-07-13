/// <reference types="vite/client" />

interface ModelConstructor {
    new(x: number, y: number) : modelInterface
}

interface BulletModelConstructor {
    new(tank: modelInterface) : modelInterface
}

interface modelInterface {
    render(): void
    image(): HTMLImageElement
    destroy(): void
    tank?: modelInterface
    x: number
    y: number
    direction: string
    width: number
    height: number
    name: string
}

interface canvasInterface {
    num(): void
    model(): void
    ctx: CanvasRenderingContext2D
    removeModel(model: modelInterface): void
    renderModels(): void
}