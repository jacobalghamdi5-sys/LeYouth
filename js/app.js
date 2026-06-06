document.addEventListener("DOMContentLoaded", () => {
    const modelSelect = document.getElementById("modelSelect");
    const modelDescBox = document.getElementById("modelDescBox");
    const generateBtn = document.getElementById("generateBtn");
    const promptInput = document.getElementById("promptInput");
    
    // Initialize custom canvas layer class
    const studioCanvas = new ViewportCanvas("realtimeCanvas", "canvasPlaceholder");

    // Populates and updates descriptions dynamically based on selected option
    function updateModelUI() {
        const selectedKey = modelSelect.value;
        const modelData = window.LeYouthModels[selectedKey];
        if (modelData) {
            modelDescBox.textContent = modelData.desc;
        }
    }

    // Attach listener for selection dropdown switch
    modelSelect.addEventListener("change", updateModelUI);
    
    // Trigger action when prompt execution runs
    generateBtn.addEventListener("click", () => {
        const promptText = promptInput.value.trim();
        if (promptText === "") {
            alert("Please enter a visual design prompt first!");
            return;
        }
        
        // Fire canvas simulation render
        studioCanvas.startRender();
        console.log(`Executing generation pipeline via: ${modelSelect.value} with prompt: ${promptText}`);
    });

    // Run layout initiation once elements map correctly
    updateModelUI();
});
