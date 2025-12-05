
import { useState, useEffect } from "react";
import { useFilter } from "../context/FilterContext";
import photoCollection from "../data";
import { Carousel, Modal } from "react-bootstrap";
import Masonry from "react-masonry-css";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

export default function Gallery() {
  const { filter: contextFilter, setFilter } = useFilter();
  const { filter: urlFilter } = useParams();

  // normalize
  const activeFilter = (urlFilter || "all").toLowerCase();

  // sync context with URL
  useEffect(() => {
    setFilter(activeFilter);
  }, [activeFilter, setFilter]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Filter photos
  const filteredPhotos =
    activeFilter === "all"
      ? photoCollection
      : photoCollection.filter((photo) => {
          const category = Array.isArray(photo.category)
            ? photo.category.map((c) => c.toLowerCase())
            : [photo.category.toLowerCase()];

          return category.includes(activeFilter.toLowerCase());
        });

  // Reset modal index on filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeFilter]);

  const openModal = (index) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="gallery-wrapper">
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
              src={image.thumb}
              className="thumbnail"
              alt={image.description}
              loading="lazy"
            />
          </div>
        ))}
      </Masonry>
{showModal && (
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
                  src={image.full}
                  alt={image.title}
                  loading="lazy"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
)}
      <Footer />
    </div>
  );
}