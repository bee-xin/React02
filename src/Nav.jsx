import "./Nav.css"
function Nav({ setContent }) {
  return (
    <nav className="navbar">
      <ul className="MENU-LINKS">
        <li onClick={() => setContent("Home")}>Home</li>
        <li onClick={() => setContent("About")}>About</li>
        <li onClick={() => setContent("Contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
