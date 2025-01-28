import React, { useEffect, useRef, useState } from 'react';
import './MouseTracker.css';

const MouseTracker = () => {
    const circleSvg = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.pageX - 50,
                y: event.pageY - 50,
            });

            setRotation((prevRotation) => prevRotation + 5);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <svg
            ref={circleSvg}
            xmlns="http://www.w3.org/2000/svg"
            xml:lang="en"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 500"
            style={{
                position: 'absolute',
                top: `${mousePosition.y}px`,
                left: `${mousePosition.x}px`,
                transform: `rotate(${rotation}deg)`,
                transition: 'top 0.1s, left 0.1s, transform 0.1s',
            }}
        >
            <title>Circular Text Path</title>
            <defs>
                <path
                    id="textcircle"
                    d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                    transform="rotate(12,250,250)"
                />
            </defs>
            <rect width="100%" height="100%" fill="none" />
            <text>
                <textPath
                    xlinkHref="#textcircle"
                    aria-label="All for One &amp; One for All"
                    textLength="942"
                >
                    0 AUSEC Enantra 9.
                </textPath>
            </text>
        </svg>
    );
};

export default MouseTracker;
