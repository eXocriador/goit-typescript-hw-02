import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import { fetchImages } from "./api/fetchImages";
import { Image, Status } from "./types";

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      setStatus("pending");
      try {
        const data = await fetchImages(query, page);
        setImages((prev) => (page === 1 ? data.hits : [...prev, ...data.hits]));
        setStatus("resolved");
      } catch (error) {
        setStatus("rejected");
      }
    };

    getImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const openModal = (index: number) => {
    setPhotoIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={openModal} />
      {status === "pending" && <Loader />}
      {images.length > 0 && status === "resolved" && (
        <Button onClick={loadMore} />
      )}
      {isModalOpen && (
        <Modal
          images={images}
          photoIndex={photoIndex}
          isOpen={isModalOpen}
          onClose={closeModal}
          onMovePrev={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNext={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </div>
  );
};

export default App;
