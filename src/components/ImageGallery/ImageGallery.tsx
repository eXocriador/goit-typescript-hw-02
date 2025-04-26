import { Image } from "../../types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (index: number) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick
}) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image, index) => (
        <ImageGalleryItem
          key={`${image.id}-${index}`}
          image={image}
          onClick={() => onImageClick(index)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
