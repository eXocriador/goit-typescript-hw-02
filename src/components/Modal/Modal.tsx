import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ModalProps {
  images: { largeImageURL: string; tags: string }[];
  photoIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onMovePrev: () => void;
  onMoveNext: () => void;
}

const Modal: React.FC<ModalProps> = ({
  images,
  photoIndex,
  isOpen,
  onClose,
  onMovePrev,
  onMoveNext
}) => {
  if (!isOpen) return null;

  const slides = images.map((img) => ({
    src: img.largeImageURL,
    description: img.tags
  }));

  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      slides={slides}
      index={photoIndex}
      carousel={{
        finite: false
      }}
      render={{
        buttonPrev: () => (
          <button
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "24px",
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer"
            }}
            onClick={onMovePrev}
          >
            ◀
          </button>
        ),
        buttonNext: () => (
          <button
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "24px",
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer"
            }}
            onClick={onMoveNext}
          >
            ▶
          </button>
        )
      }}
    />
  );
};

export default Modal;
