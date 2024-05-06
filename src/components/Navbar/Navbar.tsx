import './navbar.scss';

const navItems = [
  {
    path: "/",
    name: "home"
  },
  {
    path: "/products",
    name: "products"
  },
  {
    path: "/clients",
    name: "clients"
  },
  {
    path: "/posts",
    name: "posts"
  },
] as const

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TrackerExampleApp </div>
      <ul className="navbar-nav">
        {
          navItems.map(navItem => (
            <li className="nav-item" key={navItem.name}>
              <a href={navItem.path} className="nav-link">
                {navItem.name}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Navbar;
