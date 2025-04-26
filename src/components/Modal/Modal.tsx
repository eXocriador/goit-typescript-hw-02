interface ModalProps {
  largeImageURL: string;
  tags: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ largeImageURL, tags, onClose }) => {
  return (
    <div onClick={onClose}>
      <div>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

export default Modal;
