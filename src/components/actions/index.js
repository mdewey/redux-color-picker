export const HUE_CHANGED = "HUE_CHANGED";

export function hueChanged(value) {
    return { type: HUE_CHANGED, value };
}