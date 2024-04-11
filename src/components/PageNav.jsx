import styles from "./PageNav.module.css";
function PageNav({ appRef, aboutUsRef, discoverRef }) {
  function handleScrollTo(elemRef) {
    window.scrollTo({
      top: elemRef.current.offsetTop,
      behavior: "smooth",
    });
  }
  return (
    <ul className={styles.pageNav}>
      <li onClick={() => handleScrollTo(discoverRef)}>Discover</li>
      <li onClick={() => handleScrollTo(appRef)}>App</li>
      <li onClick={() => handleScrollTo(aboutUsRef)}>About us</li>
    </ul>
  );
}

export default PageNav;
