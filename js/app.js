document.addEventListener("DOMContentLoaded", () => {
    const modelSelect = document.getElementById("modelSelect");
    const modelDescBox = document.getElementById("modelDescBox");
    const generateBtn = document.getElementById("generateBtn");
    const promptInput = document.getElementById("promptInput");
    
    // Initialize custom canvas layer class
    const studioCanvas = new ViewportCanvas("realtimeCanvas", "canvasPlaceholder");

    // Track the currently active style filter (defaults to none)
    let activePreset = null;

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
        let promptText = promptInput.value.trim();
        if (promptText === "") {
            alert("Please enter a visual design prompt first!");
            return;
        }
        
        // AUTOMATIC PRESET INJECTION
        // Just like Leonardo AI, if a user selects a style, we secretly inject 
        // professional modifiers into the prompt backend pipeline to make the art look insane.
        if (activePreset && window.LeYouthPresets[activePreset]) {
            const modifier = window.LeYouthPresets[activePreset].promptAddition;
            promptText = `${promptText}, ${modifier}`;
        }
        
        // Fire canvas simulation render
        studioCanvas.startRender();
        console.log(`🚀 PIPELINE TRIGGERED`);
        console.log(`Engine: ${modelSelect.value}`);
        console.log(`Final Compiled Prompt: "${promptText}"`);
    });

    // Run layout initiation once elements map correctly
    updateModelUI();
});
