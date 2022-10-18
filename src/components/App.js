import React from 'react';
import { useSelector } from 'react-redux';
import Header from './header/Header';
import useRemainingTime from '../hooks/useRemainingTime';
import './App.scss';

const App = () => {
    const darkModeActive = useSelector((state) => state.darkMode.isActive);

    useRemainingTime();

    return (
        <div className={`${darkModeActive ? 'theme--dark' : 'theme--light'}`}>
            <div className="app-wrapper default">
                <Header />
                <div className="body">
                    <h1>Welcome to your Inspera exam</h1>
                    <hr />
                    <div className="text-interaction">
                        <label htmlFor="answer">
                            <p>What is your answer?</p>
                            <input id="answer" placeholder="Type your text here..." />
                        </label>
                    </div>
                    <hr />
                    <div className="mpc-interaction">
                        <label htmlFor="alt1">
                            <input id="alt1" type="checkbox" value="Alternative 1" />
                            <p>Alternative 1</p>
                        </label>
                        <label htmlFor="alt2">
                            <input id="alt2" type="checkbox" value="Alternative 2" />
                            <p>Alternative 2</p>
                        </label>
                        <label htmlFor="alt3">
                            <input id="alt3" type="checkbox" value="Alternative 3" />
                            <p>Alternative 3</p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
