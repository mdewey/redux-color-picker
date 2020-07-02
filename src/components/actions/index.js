export const HUE_CHANGED = "HUE_CHANGED";
export const LIGHTNESS_CHANGED = "LIGHTNESS_CHANGED";
export const SATURATION_CHANGED = "SATURATION_CHANGED";

export function hueChanged(value) {
    return { type: HUE_CHANGED, value };
}

export function lightnessChanged(value) {
    return { type: LIGHTNESS_CHANGED, value };
}

export function saturationChanged(value) {
    return { type: SATURATION_CHANGED, value };
}