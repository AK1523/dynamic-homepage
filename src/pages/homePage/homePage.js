import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "./homePage.css"
import { Box } from '@mui/material';
import SecondView from './secondView';
import homePageData from "../../utils/homePageData.json";


const HomePage = () => {
  const data = localStorage.getItem('homepageData')
    ? JSON.parse(localStorage.getItem('homepageData'))
    : homePageData;

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
  };

  return (
    <Box className="slider-wrapper">
      <Slider {...settings}>
        {data.hero.map((val) => (
          <div key={val.id} className="slide">
            <img src={val.image} alt={val.title} className="slide-image" />
            <div className="slide-content">
              <h1>{val.title}</h1>
              <p>{val.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <SecondView data={data.secondView} />
    </Box>
  );
};

export default HomePage;
