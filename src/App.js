import { useState, useEffect } from "react";
import photoCollection from "./data";
import { Carousel, Modal } from "react-bootstrap";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [filter, setFilter] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    "all",
    "environmental portrait",
    "cinematic portrait",
    "studio portrait",
    "street",
    "fashion",
    "landscape",
    "abstract",
    "product",
    "medical",
    "retouching",
    "motion",
    "4x5",
    "b&w",
    "color",
    "film",
    "digital",
  ];
  //TODO: add descriptions to photos
  //TODO: Add fashion, medical, abstract, product, retouching, street photos
  // Filtered photos based on current filter
  const filteredPhotos =
    filter === "all"
      ? photoCollection
      : photoCollection.filter((photo) => photo.category.includes(filter));

  // Reset activeIndex whenever filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [filter]);

  // Open modal at a given filtered index
  const openModal = (filteredIndex) => {
    setActiveIndex(filteredIndex);
    setShowModal(true);
  };

  return (
    <div>
      {/* Navigation / Filter */}
      
      <Nav categories={categories} onSelectCategory={setFilter} />

      <hr />

      <main>
        {/* Thumbnails */}
        <h2>{filter}</h2>
        <div className="row">
          <div className="column">
            {filteredPhotos.map((image, index) => (
              <div
                key={image.id}
                className="card-body"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.url}
                  className="thumbnail"
                  alt={image.description}
                />
              </div>
            ))}
          </div>
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
                    className="d-block w-100"
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
