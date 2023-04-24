import React, { useState } from "react";
import "./Slider.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2098&q=80",
    "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3376&q=80",
    "https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
