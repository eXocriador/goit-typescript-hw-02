import styles from "./ImageGalleryItem.module.css";
import { Image } from "../../types";

interface ImageGalleryItemProps {
  image: Image;
  onClick: () => void;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
  image,
  onClick
}) => {
  return (
    <li className={styles.galleryItem} onClick={onClick}>
      <img src={image.webformatURL} alt={image.tags} />
    </li>
  );
};

export default ImageGalleryItem;
