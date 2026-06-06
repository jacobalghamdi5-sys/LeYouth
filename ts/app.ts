import { LeYouthModels } from './models';
import { LeYouthPresets } from './presets';

document.addEventListener("DOMContentLoaded", (): void => {
    // Cast basic HTML Elements to strict TypeScript elements
    const modelSelect = document.getElementById("modelSelect") as HTMLSelectElement | null;
    const modelDescBox = document.getElementById("modelDescBox") as HTMLDivElement | null;
    const generateBtn = document.getElementById("generateBtn") as HTMLButtonElement | null;
    const promptInput = document.getElementById("promptInput") as HTMLInputElement | null;
    const presetButtons = document.querySelectorAll<HTMLButtonElement>(".preset-card");

    let activePreset: string | null = null;

    // Handle clicks on style presets safely without any emoji components
    presetButtons.forEach((btn: HTMLButtonElement) => {
        btn.addEventListener("click", (): void => {
            const presetKey = btn.getAttribute("data-preset");
            if (!presetKey) return;

            presetButtons.forEach(b => b.classList.remove("border-white", "scale-[1.02]"));

            if (activePreset === presetKey) {
                activePreset = null;
            } else {
                activePreset = presetKey;
                btn.classList.add("border-white", "scale-[1.02]");
            }
            console.log(`[TypeScript Engine] Active preset locked: ${activePreset}`);
        });
    });

    // Dynamically update description container values
    const updateModelUI = (): void => {
        if (!modelSelect || !modelDescBox) return;
        
        const selectedKey = modelSelect.value;
        const modelData = LeYouthModels[selectedKey];
        
        if (modelData) {
            modelDescBox.textContent = modelData.description;
        }
    };

    if (modelSelect) {
        modelSelect.addEventListener("change", updateModelUI);
    }

    // Process our final generative text payload compilation
    if (generateBtn && promptInput && modelSelect) {
        generateBtn.addEventListener("click", (): void => {
            let promptText: string = promptInput.value.trim();
            if (promptText === "") {
                alert("Please enter a visual design prompt first!");
                return;
            }

            if (activePreset && LeYouthPresets[activePreset]) {
                const modifier = LeYouthPresets[activePreset].promptAddition;
                promptText = `${promptText}, ${modifier}`;
            }

            console.log(`[TypeScript Core Output] Executing pipeline...`);
            console.log(`Active Model Target: ${modelSelect.value}`);
            console.log(`Compiled Prompt Payload: "${promptText}"`);
        });
    }

    // Run layout boot cycle
    updateModelUI();
});
