import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const total = photos.length;

  // Increments currCardIdx state by 1
  function goForward() {
    if (currCardIdx < total - 1) {
      setCurrCardIdx(currCardIdx + 1);
    }
  }

  // Decrements currCardIdx state by 1
  function goBackward() {
    if (currCardIdx > 0) {
      setCurrCardIdx(currCardIdx - 1);
    }
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {currCardIdx > 0 && ( // Hide left arrow if on the first image
          <i
            className="bi bi-arrow-left-circle"
            onClick={goBackward}
          />
        )}
        <Card
          caption={photos[currCardIdx].caption}
          src={photos[currCardIdx].src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {currCardIdx < total - 1 && ( // Hide right arrow if on the last image
          <i
            className="bi bi-arrow-right-circle"
            onClick={goForward}
          />
        )}
      </div>
    </div>
  );
}

export default Carousel;
