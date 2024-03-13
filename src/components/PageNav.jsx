import styles from "./PageNav.module.css";
function PageNav() {
  return (
    <ul className={styles.pageNav}>
      <li>Home</li>
      <li>App</li>
      <li>About us</li>
    </ul>
  );
}

export default PageNav;
