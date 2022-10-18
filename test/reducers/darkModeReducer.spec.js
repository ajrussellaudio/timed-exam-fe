import { toggleDarkMode } from '../../src/actions/darkModeActions';
import darkModeReducer from '../../src/reducers/darkModeReducer';

describe('Dark mode reducer', () => {
    it('returns the initial state', () => {
        expect(darkModeReducer(undefined, {})).toEqual({ isActive: false });
    });

    it('activates the dark mode', () => {
        const state = { isActive: false };
        expect(darkModeReducer(state, toggleDarkMode())).toEqual({ isActive: true });
    });

    it('deactivates the dark mode', () => {
        const state = { isActive: true };
        expect(darkModeReducer(state, toggleDarkMode())).toEqual({ isActive: false });
    });
});
