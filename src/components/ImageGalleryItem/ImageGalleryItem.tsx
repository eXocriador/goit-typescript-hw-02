import { Image } from "../types";

interface ImageGalleryItemProps {
  image: Image;
  onClick: (largeImageURL: string, tags: string) => void;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
  image,
  onClick
}) => {
  return (
    <li>
      <img
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => onClick(image.largeImageURL, image.tags)}
      />
    </li>
  );
};

export default ImageGalleryItem;
