import { types } from '../actions/darkModeActions';

const initialState = {
    isActive: false,
};

export default function darkModeReducer(state = initialState, action) {
    if (action.type === types.TOGGLE_DARK_MODE) {
        return {
            ...state,
            isActive: !state.isActive,
        };
    }
    return state;
}
