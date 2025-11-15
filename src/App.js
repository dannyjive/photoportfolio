import { useState } from "react";
import photoCollection from "./data";
import "bootstrap";

function App() {
  const [filter, setFilter] = useState("all");

  const filteredPhotos =
    filter === "all"
      ? photoCollection
      : photoCollection.filter((photo) => photo.category.includes(filter));

  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    "all",
    "portrait",
    "landscape",
    "cinematic",
    "abstract",
    "product",
    "medical",
    "4x5",
    "b&w",
    "color",
    "film",
    "digital",
  ];

  return (
    <div>
      <nav>
        <h1>DAN FINLEY PHOTO</h1>

        {/* FILTER menu */}
        <ul id="filterlist">
          {categories.map((category) => (
            <li key={category}>
              <button onClick={() => setFilter(category)}>#{category}</button>
            </li>
          ))}
          <li>
            <button>
              <a href="about.html">#about</a>
            </button>
          </li>
        </ul>
      </nav>

      <hr />

      <main>
        {/* Images Mapped */}
        <h2>{filter}</h2>
        <div class="row">
          <div class="column">
            {filteredPhotos.map((image) => (
              <div
                class="card-body"
                id="altCard"
                data-bs-toggle="modal"
                data-bs-target="#altModal"
              >
                <img
                  key={image.id}
                  src={image.url}
                  className="thumbnail"
                  alt={image.description}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <div class="row">
          <div class="col">
            <div
              class="modal fade"
              id="altModal"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              {/* // id points to carousel's data-bs-target */}

              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-body">
                    {/* Carousel wrapper */}
                    <div
                      id="altCarousel"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      {/* Image Slides */}
                      <div className="carousel-inner">
                        {filteredPhotos.map((image, index) => (
                          <div
                            key={index}
                            className={`carousel-item ${
                              index === activeIndex ? "active" : ""
                            }`}
                          >
                            <img
                              className="d-block w-100"
                              src={image.url}
                              alt={image.title}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Controls */}
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#altCarousel"
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" />
                      </button>

                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#altCarousel"
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>{/* Footer */}</footer>
    </div>
  );
}

export default App;
