/// <reference types="vite/client" />

interface ModelConstructor {
    new(canvas: CanvasRenderingContext2D, x: number, y: number) : modelInterface
}

interface modelInterface {
    render(): void
    image(): HTMLImageElement
    x: number
    y: number
}

interface canvasInterface {
    num(): void
    model(): void
}