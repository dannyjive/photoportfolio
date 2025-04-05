import { useState } from "react";
import { PHOTO_COLLECTION } from "./data";

function App() {
  const [photos, setPhotos] = useState('');


function handleChangePhotos(chosenCategory){
  setPhotos(prevImg => {
    return {
      // add mapping or filter logic here.
    };
  });
}



  return (
    <div>
      <nav>
        {/* Header */}
        <h1>DAN FINLEY PHOTO</h1>
        {/* Links/filter to photos filters by category*/}
        <ul>
          <li>#ALL</li>
          <button onClick={() => handleChangePhotos('landscape')}>#LANDSCAPE</button>
          <button onClick={() => handleChangePhotos('portrait')}>#PORTRAIT</button>
          <li>#ABSTRACT</li>
          <li>#LARGE_FORMAT</li>
          <li>#B&W</li>
          <li>#COLOR</li>
          <li>#FILM</li>
          <li>#DIGITAL</li>
          <li>#ABOUT/CONTACT</li>
        </ul>
      </nav>

      <hr />
      {photos}
      <main>
        {/* Modal Gallery of filtered photos */}
        {/* Array of photos - Object with img and several categories*/}
        {PHOTO_COLLECTION.map((image) => (
          <img key={image.id} src={image.url} className="thumbnail" alt={image.description}/>
        ))}
      </main>
      
      <footer>
      {/* Footer */}
      </footer>
    </div>
  )
};


export default App;
