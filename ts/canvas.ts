interface StudioConfig {
    canvasId: string;
    dimensions: [number, number];
}

class ViewportCanvas {
    private canvas: HTMLCanvasElement;
    constructor(config: StudioConfig) {
        this.canvas = document.getElementById(config.canvasId) as HTMLCanvasElement;
    }
}
