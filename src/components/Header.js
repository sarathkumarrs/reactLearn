import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <img src="https://example.com/king-charles-image.jpg" alt="King Charles" />
    </header>
  );
}

export default Header;
