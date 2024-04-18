import { useEffect, useState } from "react";
import BurgerBar from "./BurgerBar";
import styles from "./Header.module.css";
import Logo from "./Logo";
import PageNav from "./PageNav";
function Header({ appRef, aboutUsRef, discoverRef }) {
  const [isShowNav, setisShowNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleShowNav() {
    setisShowNav((showNav) => !showNav);
  }
  function handleWindowResize() {
    setWindowWidth(window.innerWidth);
  }
  window.addEventListener("resize", handleWindowResize);
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <header className={styles.header}>
      <Logo />

      {windowWidth > 900 ? (
        <div className={styles.navBar}>
          <PageNav
            appRef={appRef}
            aboutUsRef={aboutUsRef}
            discoverRef={discoverRef}
          />
        </div>
      ) : isShowNav ? (
        <PageNav
          setisShowNav={setisShowNav}
          windowWidth={windowWidth}
          isShowNav={isShowNav}
          appRef={appRef}
          aboutUsRef={aboutUsRef}
          discoverRef={discoverRef}
        />
      ) : (
        <PageNav
          setisShowNav={setisShowNav}
          windowWidth={windowWidth}
          isShowNav={isShowNav}
          appRef={appRef}
          aboutUsRef={aboutUsRef}
          discoverRef={discoverRef}
        />
      )}
      {windowWidth <= 900 && <BurgerBar onClick={handleShowNav} />}
    </header>
  );
}

export default Header;
