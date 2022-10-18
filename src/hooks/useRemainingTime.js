import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { decrementRemainingTime, setRemainingTime } from '../actions/timeActions';
import timeService from '../services/timeService';

const FETCH_REMAINING_TIME_TIMER = 10 * 1000; // every 10 seconds
const OPTIMISTIC_UPDATE_REMAINING_TIME_TIMER = 1 * 1000; // every 1 second

export default function useRemainingTime() {
    const dispatch = useDispatch();

    const updateTime = async () => {
        const timeRemaining = await timeService.requestUpdatedTime();
        dispatch(setRemainingTime(timeRemaining));
    };

    useEffect(async () => {
        await updateTime();

        const fetchRemainingTime = setInterval(() => {
            updateTime();
        }, FETCH_REMAINING_TIME_TIMER);

        const optimisticUpdateTimeInterval = setInterval(() => {
            dispatch(decrementRemainingTime());
        }, OPTIMISTIC_UPDATE_REMAINING_TIME_TIMER);

        return () => {
            clearInterval(optimisticUpdateTimeInterval);
            clearInterval(fetchRemainingTime);
        };
    }, []);
}
