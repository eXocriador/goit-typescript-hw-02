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
  const [selectedImage, setSelectedImage] = useState<{
    largeImageURL: string;
    tags: string;
  } | null>(null);

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

  const openModal = (largeImageURL: string, tags: string) => {
    setSelectedImage({ largeImageURL, tags });
  };

  const closeModal = () => {
    setSelectedImage(null);
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
      {selectedImage && (
        <Modal
          largeImageURL={selectedImage.largeImageURL}
          tags={selectedImage.tags}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
