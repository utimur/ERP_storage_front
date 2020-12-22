import React from "react";
import {useSwipeable} from "react-swipeable";

const defaultConfig = {
    delta: 10,                            // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: false,  // call e.preventDefault *See Details*
    trackTouch: true,                     // track touch input
    trackMouse: true,                    // track mouse input
    rotationAngle: 0,                     // set a rotation angle
}

const BaseCard = () => {
    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            if (eventData.deltaX < 0) {
                console.log('DECLINE')
            } else {
                console.log('ACCEPT')
            }
        },
        ...defaultConfig,
    });
    return <div draggable={true} {...handlers}>Swipe me please!</div>;
}

export default BaseCard