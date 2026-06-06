export interface StylePreset {
    id: string;
    name: string;
    promptAddition: string;
    gradientClass: string;
}

export const LeYouthPresets: Record<string, StylePreset> = {
    cyberpunk: {
        id: "cyberpunk",
        name: "Neon Cyberpunk 2077",
        promptAddition: "neon glow, cyberpunk aesthetic, rainy city streets, highly detailed, retro-futurism, 8k resolution",
        gradientClass: "from-pink-600 to-purple-900"
    },
    anime: {
        id: "anime",
        name: "Masterpiece Anime Cel",
        promptAddition: "anime aesthetic, studio ghibli style, vibrant colors, clean line art, high fidelity, makoto shinkai vibe",
        gradientClass: "from-blue-400 to-indigo-700"
    },
    photoreal: {
        id: "photoreal",
        name: "Cinematic Photorealism",
        promptAddition: "shot on 35mm lens, photorealistic, dramatic lighting, volumetric smoke, ultra-detailed textures, award-winning photography",
        gradientClass: "from-amber-600 to-stone-900"
    },
    clay3d: {
        id: "clay3d",
        name: "3D Claymation Cute",
        promptAddition: "3d render, blender style, clay texture, cute character design, soft lighting, pastel color palette, isometric view",
        gradientClass: "from-green-400 to-teal-800"
    }
};
