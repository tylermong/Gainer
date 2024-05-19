import React, { useState } from 'react';
import { IconBarbell } from '@tabler/icons-react';
import { IconCaretRightFilled, IconCaretDownFilled } from '@tabler/icons-react';
import './index.css'; 


function Dashboard() {
    const [isDropdownMenuOpen, setDropdownMenuOpen] = useState(false);

    const toggleDropdownMenu = () => {
        setDropdownMenuOpen(!isDropdownMenuOpen);
    };

    return (
        <div id = "dashboard-container">
            <div className = "side-navbar">
                <div id = "logo-and-name-container">
                    <IconBarbell stroke={2} size={72} />
                    <h1 id = "name">Gainer</h1>
                </div>
                <div id = "nav-links">
                    <a href = "#">Dashboard</a>
                    <button onClick = {toggleDropdownMenu}>
                        <div id = "workout-button">Workouts {isDropdownMenuOpen ? <IconCaretDownFilled size = {16} /> : <IconCaretRightFilled size = {16} />}</div>
                    </button>
                        {isDropdownMenuOpen && (
                            <div id = "dropdown-menu-contents">
                                <a href = "#">Create Workout</a>
                                <a href = "#">View Workouts</a>
                            </div>
                        )}
                    <a href = "#">Nutrition</a>
                    <a href = "#">Settings</a>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
