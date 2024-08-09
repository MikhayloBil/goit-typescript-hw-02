import css from "./ImageCard.module.css";

interface ImageCardProps {
  image: {
    urls: {
      small: string;
    };
    alt_description: string;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div className={css.imageCard}>
      <img
        className={css.img}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
