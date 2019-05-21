import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import img from "../../images/bajra.png";
import ring6 from "../../images/rin6.jpg";
import ring2 from "../../images/ring2.jpg";
import ring4 from "../../images/ring4.jpg";

class CustomCarousel extends Component {
  state = {};
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="holder.js/800x400?text=First slide&bg=373940"
            src={ring2}
            alt="First slide"
            width="20px"
          />
          <Carousel.Caption>
            <h3>Offer for Couple Rings</h3>
            <p>Get it at Rs. 500 only</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ring6}
            alt="Third slide"
            width="20px"
          />

          <Carousel.Caption>
            <h3>Wedding ring</h3>
            <p>Only at Rs. 2000</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ring4}
            alt="Third slide"
            width="20px"
          />

          <Carousel.Caption>
            <h3>Diamond Ring</h3>
            <p>Worth Rs.1500</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CustomCarousel;
