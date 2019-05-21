import React, { Component } from "react";
import CustomNavbar from "../components/Navbar/CustomNavbar";
// import Jumbo from "../components/Jumbotron/Jumbo";
// import Footer from "../components/Footer/Footer";
import CustomCarousel from "../components/Carousel/CustomCarousel";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <CustomNavbar />
        {/* <Jumbo
          title="Welcome"
          subtitle="Beautiful rings for your beautiful hands bros"
        /> */}
        <CustomCarousel />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Home;
