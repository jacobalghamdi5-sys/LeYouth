// LeYouth Studio - Core Dashboard Controller
document.addEventListener("DOMContentLoaded", () => {
    const modelSelect = document.getElementById("modelSelect");
    const modelDescBox = document.getElementById("modelDescBox");
    const generateBtn = document.getElementById("generateBtn");
    const promptInput = document.getElementById("promptInput");
    const presetButtons = document.querySelectorAll(".preset-card");

    let activePreset = null;

    // Handle clicks on style presets seamlessly
    presetButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const presetKey = btn.getAttribute("data-preset");
            if (!presetKey) return;

            presetButtons.forEach(b => b.classList.remove("border-white", "scale-[1.02]"));

            if (activePreset === presetKey) {
                activePreset = null;
            } else {
                activePreset = presetKey;
                btn.classList.add("border-white", "scale-[1.02]");
            }
            console.log(`[Core Engine] Active preset locked: ${activePreset}`);
        });
    });

    // Update descriptive text view panel dynamically
    const updateModelUI = () => {
        if (!modelSelect || !modelDescBox) return;
        
        const selectedKey = modelSelect.value;
        const modelData = window.LeYouthModels ? window.LeYouthModels[selectedKey] : null;
        
        if (modelData) {
            modelDescBox.textContent = modelData.description;
        }
    };

    if (modelSelect) {
        modelSelect.addEventListener("change", updateModelUI);
    }

    // Process our final generative prompt text construction
    if (generateBtn && promptInput && modelSelect) {
        generateBtn.addEventListener("click", () => {
            let promptText = promptInput.value.trim();
            if (promptText === "") {
                alert("Please enter a visual design prompt first!");
                return;
            }

            if (activePreset && window.LeYouthPresets && window.LeYouthPresets[activePreset]) {
                const modifier = window.LeYouthPresets[activePreset].promptAddition;
                promptText = `${promptText}, ${modifier}`;
            }

            console.log(`[Core Output] Executing pipeline...`);
            console.log(`Active Model Target: ${modelSelect.value}`);
            console.log(`Compiled Prompt Payload: "${promptText}"`);
        });
    }

    // Initialize layout setup state
    updateModelUI();
});
