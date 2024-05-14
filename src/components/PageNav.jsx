import styles from "./PageNav.module.css";

function PageNav({
  homeRef,
  appRef,
  aboutUsRef,
  discoverRef,
  isShowNav,
  setisShowNav,
  windowWidth,
}) {
  function handleScrollTo(elemRef) {
    window.scrollTo({
      top: elemRef.current.offsetTop,
      behavior: "smooth",
    });
    if (windowWidth <= 900) {
      setisShowNav(false);
    }
  }
  return (
    <ul
      className={
        isShowNav && windowWidth <= 900
          ? styles.pageNavSmall
          : !isShowNav && windowWidth <= 900
          ? styles.pageNavHiddenSmall
          : styles.pageNav
      }
    >
      <li onClick={() => handleScrollTo(homeRef)}>Home</li>
      <li onClick={() => handleScrollTo(discoverRef)}>Discover</li>
      <li onClick={() => handleScrollTo(appRef)}>App</li>
      <li onClick={() => handleScrollTo(aboutUsRef)}>About us</li>
    </ul>
  );
}

export default PageNav;
