import { useState } from 'react';
import { IconBarbell, IconMenu2, IconMenuDeep, IconCaretDownFilled, IconCaretRightFilled } from '@tabler/icons-react';

function Menu() {
  const [isDropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [isNavMenuOpen, setNavMenuOpen] = useState(false);

  const toggleDropdownMenu = () => {
    setDropdownMenuOpen(!isDropdownMenuOpen);
  }

  const toggleNavMenu = () => {
    setNavMenuOpen(!isNavMenuOpen);
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

      <nav className="nav-drawer">
        <div id = "name-and-logo">
          <IconBarbell stroke = {2} size = {36} />
          <h1>Gainer</h1>
        </div>

        <div id = "nav-drawer-button">
          <button onClick = {toggleNavMenu}>
            {isNavMenuOpen ? <IconMenuDeep stroke = {2} size = {36} /> : <IconMenu2 stroke = {2} size = {36} />}
          </button>
          {isNavMenuOpen && (
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
          )}
        </div>
      </nav>
    </>
  );
}

export default Menu;