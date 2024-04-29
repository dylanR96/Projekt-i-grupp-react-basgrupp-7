import styles from "./button.module.css";

function Button({ clickHandler, children, variant }) {
  return (
    <button className={styles[variant]} onClick={clickHandler}>
      {children}
    </button>
  );
}

export default Button;
