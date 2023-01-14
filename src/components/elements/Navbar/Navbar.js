import Logo from "./Logo";
import NavLinks from "./NavLinks";
import "./Navbar.css";

const links = ["Home", "Forum", "Marketplace"];
const styles = "nav-bar";
function Navbar(props) {
  return (
    <nav className={styles}>
      <Logo />
      <NavLinks links={links} />
    </nav>
  );
}

export default Navbar;
