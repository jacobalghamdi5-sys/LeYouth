class ViewportCanvas {
    constructor(canvasId, placeholderId) {
        this.canvas = document.getElementById(canvasId);
        this.placeholder = document.getElementById(placeholderId);
        this.ctx = this.canvas.getContext('2d');
    }

    // Call this when generation triggers to show layout changes
    startRender() {
        this.placeholder.classList.add('hidden');
        this.canvas.classList.remove('hidden');
        
        // Create a sleek dark-tech grid grid effect on activation
        this.ctx.fillStyle = '#12131a';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

window.ViewportCanvas = ViewportCanvas;
