/// <reference types="vite/client" />

interface ModelConstructor {
    new(canvas: CanvasRenderingContext2D, x: number, y: number) : modelInterface
}

interface modelInterface {
    render(): void
}

interface canvasInterface {
    num(): void
    model(): void
}