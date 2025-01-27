import React, { useEffect, useRef, useState } from 'react';
import './MouseTracker.css';

const MouseTracker = () => {
    const circleSvg = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);  // To handle rotation

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX - 50,  // Adjusted to center the SVG
                y: event.clientY - 50,  // Adjusted to center the SVG
            });

            // Update the rotation based on mouse movement
            setRotation((prevRotation) => prevRotation + 5);  // Rotate by 5 degrees with each movement
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
                transform: `rotate(${rotation}deg)`,  // Apply rotation here
                transition: 'top 0.1s, left 0.1s, transform 0.1s',  // Smooth transition for rotation
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
                    ENANTRA 9.0 .
                </textPath>
            </text>
        </svg>
    );
};

export default MouseTracker;
