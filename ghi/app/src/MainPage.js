import { Carousel } from "react-bootstrap";

function MainPage() {
  return (
  <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-box"
          src="https://images.unsplash.com/photo-1574023240744-64c47c8c0676?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
        />
        <Carousel.Caption>
          <h1 id="title1">MaxDrive</h1>
          <p id="caption1">The premiere solution for automobile dealership management!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-box"
          src="https://images.unsplash.com/photo-1582038715054-adba011b2da2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
        />
        <Carousel.Caption>
          <h3 id="title2">Creating dreams</h3>
          <p id="caption2">Connecting people with cars that will take them to new places</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-box"
          src="https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
        />
        <Carousel.Caption>
          <h3 id="title3">Car detailing campaign</h3>
          <p id="caption3">Remember to let our customers know about the upcoming promotion will begin on May 15th!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
  );
}

export default MainPage;
