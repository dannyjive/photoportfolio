import { useState, useEffect, useRef } from "react";
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

  // Handle keyboard navigation when Modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      // e.preventDefault();
      if (!showModal) return; // Do nothing if modal is closed

      if (e.key === "ArrowRight") {
        // Go to next image (loop to start if at end)
        setActiveIndex((prev) =>
          prev === filteredPhotos.length - 1 ? 0 : prev + 1
        );
      } else if (e.key === "ArrowLeft") {
        // e.preventDefault();
        // Go to prev image (loop to end if at start)
        setActiveIndex((prev) =>
          prev === 0 ? filteredPhotos.length - 1 : prev - 1
        );
      }
    };

    // Attach listener
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup listener on unmount or when modal closes
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal, filteredPhotos.length]);

  const itemsRef = useRef([]); // <--- Create this array to hold button refs

  // Ensure the ref array stays clean when filters change
  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, filteredPhotos.length);
  }, [filteredPhotos]);

  return (
    <div className="gallery-wrapper">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {filteredPhotos.map((image, index) => {
          const tabIndex = index + 1;
          return (
            <button
              key={image.id}
              className="masonry-item masonry-item-stagger overlay-container"
              onClick={() => openModal(index)}
              tabIndex={tabIndex}
              style={{ animationDelay: `${index * 0.1}s` }}
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <img
                src={image.thumb}
                className="thumbnail"
                alt={image.description}
                loading="lazy"
              />
              <div className="image-overlay-bar">
                <p className="overlay-text-title">{image.title}</p>
                <p className="overlay-categories overlay-text">
                  {Array.isArray(image.category)
                    ? image.category.map((c) => `#${c}`).join(" ")
                    : `#${image.category}`}
                </p>
              </div>
            </button>
          );
          // <div
          //   key={image.id}
          //   className="masonry-item masonry-item-stagger overlay-container"
          //   onClick={() => openModal(index)}
          //   tabIndex={0}
          //   onKeyDown={(e) => {
          //     if (e.key === "Enter" || e.key === " ") openModal(index);
          //   }}
          //   style={{ animationDelay: `${index * 0.1}s` }}
          // >
          //   <img
          //     src={image.thumb}
          //     className="thumbnail"
          //     alt={image.alt}
          //     loading="lazy"
          //   />

          //   {/* <--- ADD THE OVERLAY BAR HERE ---> */}
          //   <div className="image-overlay-bar">
          //     <p className="overlay-text-title">{image.title}</p>
          //     <p className="overlay-categories overlay-text">
          //       {Array.isArray(image.category)
          //         ? image.category.map((c) => `#${c}`).join(" ")
          //         : `#${image.category}`}
          //     </p>
          //   </div>
          //   {/* <--- END OVERLAY BAR ---> */}
          // </div>
        })}
      </Masonry>
      {showModal && (
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          onExited={() => {
            // specific focus logic: check if the element exists, then focus
            if (itemsRef.current[activeIndex]) {
              itemsRef.current[activeIndex].focus();
            }
          }}
          centered
          size="lg"
        >
          <Modal.Body>
            <Carousel
              activeIndex={activeIndex}
              onSelect={(idx) => setActiveIndex(idx)}
              interval={null}
              indicators={true}
              keyboard={false}
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
