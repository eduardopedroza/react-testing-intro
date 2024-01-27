import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";


it ('renders without crashing', function () {
  render(<Carousel />);
})

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("moves to the previous image when clicking the left arrow", () => {
  const { container } = render(
    <Carousel 
      photos={TEST_IMAGES} 
      title="Test Carousel" 
    />
  );
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  fireEvent.click(leftArrow);

  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});


it("hides the left and right arrow from showing when on the first or last image", function () {
  const { container } = render(
    <Carousel 
      photos={TEST_IMAGES} 
      title="Test Carousel" 
    />
  );
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  const rightArrow = container.querySelector(".bi-arrow-right-circle");

  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();

  expect(leftArrow).toBeHidden();

  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);
  
  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).toBeInTheDocument();

  expect(rightArrow).toBeHidden();
})