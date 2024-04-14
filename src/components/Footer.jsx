import styles from "./Footer.module.css";
import Logo from "./Logo";
import PageNav from "./PageNav";
function Footer({ homeRef, appRef, aboutUsRef, discoverRef }) {
  return (
    <footer className={styles.footer}>
      <Logo />
      <div>
        <p>Navigation</p>
        <PageNav
          homeRef={homeRef}
          appRef={appRef}
          aboutUsRef={aboutUsRef}
          discoverRef={discoverRef}
        />
      </div>
    </footer>
  );
}

export default Footer;
