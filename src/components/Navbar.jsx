import '../styles/Navbar.css'

const Navbar = ({ menuItems }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {menuItems.map((item, index) => (
          <li key={index} className="navbar-item">
            <a href={item.link} className="navbar-link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;