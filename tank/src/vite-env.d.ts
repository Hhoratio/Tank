/// <reference types="vite/client" />

interface ModelConstructor {
    new(canvas: CanvasRenderingContext2D, x: number, y: number) : ModelType
}

interface ModelType {
    render(): void
}