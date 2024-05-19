import './index.css'; 
import { IconBarbell } from '@tabler/icons-react';


function Dashboard() {
    return (
        <div id = "dashboard-container">
            <div className = "side-navbar">
                <div id = "logo-and-name-container">
                    <IconBarbell stroke={2} size={72} />
                    <h1 id = "name">Gainer</h1>
                </div>
                <div id = "nav-links">
                    <a href = "#">Home</a>
                    <a href = "#">Workouts</a>
                    <a href = "#">Nutrition</a>
                    <a href = "#">Settings</a>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
