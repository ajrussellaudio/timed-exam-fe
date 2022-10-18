import { types } from '../actions/timeActions';

const defaultState = {
    timeRemaining: 0,
};

export default function timeReducer(state = defaultState, action) {
    switch (action.type) {
    case types.DECREMENT_REMAINING_TIME:
        return {
            ...state,
            timeRemaining: Math.max(0, state.timeRemaining - 1),
        };
    case types.SET_REMAINING_TIME:
        return {
            ...state,
            timeRemaining: action.timeRemaining,
        };

    default:
        return state;
    }
}
