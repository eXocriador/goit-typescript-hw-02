import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>
        <strong>Description:</strong> {image.alt_description}
      </p>
      <p>
        <strong>Likes:</strong> {image.likes}
      </p>
      <p>
        <strong>Author:</strong> {image.user.name}
      </p>
    </Modal>
  );
};

export default ImageModal;
