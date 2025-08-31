import "./App.css";

function Sidebar() {
  const menus = ["Technology", "Science", "Sports", "Entertainment"];
  return (
    <aside id="sidebar">
      <h2>Categories</h2>
      <ul className="menu-sidebar">
        {menus.map((menu, index) => (
          <li key={index}>
            <a href="#">{menu}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
