import styles from "./Button.module.css";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.loadMoreButton}>
      Load more
    </button>
  );
};

export default Button;
