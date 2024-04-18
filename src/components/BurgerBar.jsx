import styles from "./BurgerBar.module.css";
function BurgerBar({ onClick }) {
  return (
    <div onClick={onClick} className={styles.burgerBar}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default BurgerBar;
