// Slider.jsx
import React from 'react';
import './Roller.css'; // Importing the specific CSS file for the component
import slider1_1 from './assets/images/slider1_1.png';
import slider1_2 from './assets/images/slider1_2.png';
import slider2_1 from './assets/images/slider2_1.png';
import slider2_2 from './assets/images/slider2_2.png';

const Slider = () => {
    return (
        <main>
            <div className="slider" style={{ '--width': '100px', '--height': '50px', '--quantity': '10' }}>
                <div className="list">
                    {/* Image items */}
                    <div className="item" style={{ '--position': 1 }}>
                        <img src={slider1_1} alt="" />
                    </div>
                    <div className="item" style={{ '--position': 2 }}>
                        <img src={slider1_2} alt="" />
                    </div>
                    {/* More items here */}
                </div>
            </div>

            <div className="slider" reverse="true" style={{ '--width': '200px', '--height': '200px', '--quantity': '9' }}>
                <div className="list">
                    {/* Image items */}
                    <div className="item" style={{ '--position': 1 }}>
                        <img src={slider2_1} alt="" />
                    </div>
                    <div className="item" style={{ '--position': 2 }}>
                        <img src={slider2_2} alt="" />
                    </div>
                    {/* More items here */}
                </div>
            </div>
        </main>
    );
};

export default Slider;
