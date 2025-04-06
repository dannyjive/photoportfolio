import { useState } from "react";
import photoCollection from "./data";

function App() {

  const [filter, setFilter] = useState('all')


const filteredPhotos = filter === "all" ? photoCollection : photoCollection.filter(photo => photo.category.includes(filter))



  return (
    <div>
      <nav>
        <h1>DAN FINLEY PHOTO</h1>
        <ul>
          {["all", "landscape", "portrait", "abstract", "4x5", "b&w", "color", "film", "digital", "cinematic"].map(category => (
            <li key={category}>
              <button onClick={() => setFilter(category)} style={{ color: filter === category ? 'gray' : 'orange' }}>
                #{category}
              </button>
            </li>
          ))}
          <li><a href='about.html'>#about</a></li>
        </ul>        
      </nav>

      <hr />
    
      <main>
          {filteredPhotos.map((image) => (
            <img key={image.id} src={image.url} className="thumbnail" alt={image.description} />
          ))}
      </main>
      
      <footer>
      {/* Footer */}
      </footer>
    </div>
  )
};


export default App;
