import styles from "./Header.module.css";
import Logo from "./Logo";
import PageNav from "./PageNav";
function Header({ appRef, aboutUsRef, discoverRef }) {
  return (
    <header className={styles.header}>
      <Logo />
      <PageNav
        appRef={appRef}
        aboutUsRef={aboutUsRef}
        discoverRef={discoverRef}
      />
    </header>
  );
}

export default Header;
