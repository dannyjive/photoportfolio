import { useState, useEffect } from "react";
import photoCollection from "./data";
import { Carousel, Modal } from "react-bootstrap";
import Nav from "./components/Nav";
import Masonry from "react-masonry-css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [filter, setFilter] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    "all",
    "separator",
    "environmental",
    "cinematic",
    "studio",
    "street",
    "fashion",
    "landscape",
    "abstract",
    "medical",
    "retouching",
    "motion",
    "separator",
    "4x5",
    "b&w",
    "color",
    "film",
    "digital",
    "separator",
    "about",
  ];

  // Filter photos based on current filter
  const filteredPhotos =
    filter === "all"
      ? photoCollection
      : photoCollection.filter((photo) => photo.category.includes(filter));

  // Reset activeIndex when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [filter]);

  // Open modal at a given filtered index
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
    <div>
      {/* Navigation / Filter */}
      <Nav categories={categories} onSelectCategory={setFilter} />

      <main>
        {/* Filter Headline */}
        <div className="headlineContainer">
          <hr className="headline" />
          <h2>{filter}</h2>
          <hr className="headline" />
        </div>

        {/* Masonry Thumbnails */}
        <div className='gallery-wrapper'>
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
        </div>

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
              onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
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
      </main>

      <footer>{/* Footer */}</footer>
    </div>
  );
}

export default App;
