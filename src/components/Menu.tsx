import { useState } from 'react';
import { IconBarbell, IconCaretDownFilled, IconCaretRightFilled } from '@tabler/icons-react';

function Menu() {
  const [isDropdownMenuOpen, setDropdownMenuOpen] = useState(false);

  const toggleDropdownMenu = () => {
    setDropdownMenuOpen(!isDropdownMenuOpen);
  }

  return (
    <>
      <nav className="side-navbar">
        <div id = "name-and-logo">
          <IconBarbell stroke = {2} size = {72} />
          <h1>Gainer</h1>
        </div>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li>
            <button onClick = {toggleDropdownMenu}>
              <div id = "workout-button">
                Workouts{isDropdownMenuOpen ? <IconCaretDownFilled size={16} /> : <IconCaretRightFilled size={16} />}
              </div>
            </button>
            {isDropdownMenuOpen && (
              <ul id = "workout-dropdown-menu">
                <li><a href="/create-workout">Create Workout</a></li>
                <li><a href="/view-workouts">View Workouts</a></li>
              </ul>
              )}
          </li>
          <li><a href="/nutrition">Nutrition</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;