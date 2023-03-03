import React from 'react';
import Slider from './Slider';
import About from './About';

function Main({ children }) {
    return (
        <>
            <Slider />
            {children}
            <About />
        </>
    );
}

export default Main;
