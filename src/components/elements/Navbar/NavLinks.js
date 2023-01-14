import "./Navbar.css";

export default function NavLinks(props) {
  const { links } = props;
  const styles = "nav-links";
  return (
    <ul className={styles}>
      {links.map((link) => (
        <li key={link}>{link}</li>
      ))}
    </ul>
  );
}
