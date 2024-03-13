import styles from "./Header.module.css";
import Logo from "./Logo";
import PageNav from "./PageNav";
function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <PageNav />
    </header>
  );
}

export default Header;
