export const types = {
    TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE',
};

export function toggleDarkMode() {
    return { type: types.TOGGLE_DARK_MODE };
}
