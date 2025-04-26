interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
