import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className='header'>
      <div>PokemonGo</div>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link to='/'>Map</Link>
          </li>
          <li className='nav__item'>
            <Link to='/pokedex'>Pokedex</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
