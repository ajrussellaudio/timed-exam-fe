import React from 'react';
import { useSelector } from 'react-redux';
import './Header.scss';

const Header = () => {
    const timeRemaining = useSelector((state) => state.time.timeRemaining);

    const handleButtonClick = () => {
        // eslint-disable-next-line no-console
        console.log('Toggle dark mode');
    };

    return (
        <div className="header" style={{ backgroundColor: 'white' }}>
            <div className="candidate">Front-end Test Candidate</div>
            <div className="time-remaining">
                {timeRemaining}
                {' '}
                seconds remaining
            </div>
            <button onClick={handleButtonClick} type="button" className="theme-toggle">
                Dark mode
            </button>
        </div>
    );
};

export default Header;
