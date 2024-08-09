import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li
          className={css.img}
          key={image.id}
          onClick={() => onImageClick(image)}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
