import { useState } from "react";
import "./Carousel.css";

interface Field {
  images: string[];
}

const Carousel = ({ images }: Field): JSX.Element => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="carousel-container">
      <button
        className="carousel-button"
        onClick={() =>
          setImageIndex(imageIndex > 0 ? imageIndex - 1 : images.length - 1)
        }
      >
        Back
      </button>
      <img
        className="carousel-image"
        src={images[imageIndex]}
        alt={`Image ${imageIndex + 1}`}
      />
      <button
        className="carousel-button"
        onClick={() =>
          setImageIndex(imageIndex < images.length - 1 ? imageIndex + 1 : 0)
        }
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
