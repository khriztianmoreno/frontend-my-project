import './style.scss';

function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li className="menu__item menu__item--active"><a href="/">Home</a></li>
        <li className="menu__item"><a href="/about">About</a></li>
        <li className="menu__item"><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
