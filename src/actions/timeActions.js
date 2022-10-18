export const types = {
    DECREMENT_REMAINING_TIME: 'DECREMENT_REMAINING_TIME',
    SET_REMAINING_TIME: 'SET_REMAINING_TIME',
};

export function decrementRemainingTime() {
    return { type: types.DECREMENT_REMAINING_TIME };
}

export function setRemainingTime(timeRemaining) {
    return { type: types.SET_REMAINING_TIME, timeRemaining };
}
