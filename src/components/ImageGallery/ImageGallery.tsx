import { Image } from "../../types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (largeImageURL: string, tags: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick
}) => {
  return (
    <ul>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
