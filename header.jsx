import "./App.css";

function Header() {
  const menus = ["Home", "About", "Contact"];
  return (
    <nav id="navbar">
      <h1>My Website</h1>
      <ul className="menu-nav">
        {menus.map((menu, index) => (
          <li key={index}>
            <a href="#">{menu}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
