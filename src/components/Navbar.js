import { NavLink } from 'react-router-dom';

// eslint-disable-next-line
const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
];

const Navbar = () => {

  return (
    <nav className="navBar">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              activeClassName="active-link"
              exact
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;