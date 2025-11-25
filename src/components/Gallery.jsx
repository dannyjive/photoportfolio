import { useState, useEffect } from "react";
import { useFilter } from "../context/FilterContext";
import photoCollection from "../data";
import { Carousel, Modal } from "react-bootstrap";
import Masonry from "react-masonry-css";

export default function Gallery() {
  // Get the current filter from context
  const { filter } = useFilter();

  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Filter photos based on the selected category
  const filteredPhotos =
    filter === "all"
      ? photoCollection
      : photoCollection.filter((photo) => photo.category.includes(filter));

  // Reset activeIndex whenever the filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [filter]);

  // Open modal and start carousel at clicked image index
  const openModal = (index) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  // Masonry responsive breakpoints
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="gallery-wrapper">

      {/* Masonry Thumbnails */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {filteredPhotos.map((image, index) => (
          <div
            key={image.id}
            className="masonry-item"
            onClick={() => openModal(index)}
          >
            <img
              src={image.url}
              className="thumbnail"
              alt={image.description}
            />
          </div>
        ))}
      </Masonry>

      {/* Modal + Carousel */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Body>
          <Carousel
            activeIndex={activeIndex}
            onSelect={(idx) => setActiveIndex(idx)}
            interval={null}
            indicators={true}
          >
            {filteredPhotos.map((image) => (
              <Carousel.Item key={image.id}>
                <img
                  className="carousel-img"
                  src={image.url}
                  alt={image.title}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
}