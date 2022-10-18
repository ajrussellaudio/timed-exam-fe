import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../actions/darkModeActions';
import './Header.scss';

const Header = () => {
    const timeRemaining = useSelector((state) => state.time.timeRemaining);
    const darkModeActive = useSelector((state) => state.darkMode.isActive);
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <div className="header">
            <div className="info">
                <div className="candidate">Front-end Test Candidate</div>
                <div className="time-remaining">
                    {timeRemaining}
                    {' '}
                    seconds remaining
                </div>
            </div>
            <button onClick={handleButtonClick} type="button" className="theme-toggle">
                {darkModeActive ? 'Light mode 🌝' : 'Dark mode 🌚'}
            </button>
        </div>
    );
};

export default Header;
