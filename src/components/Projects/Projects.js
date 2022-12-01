import React from 'react';
import './Projects.css';


import Nike from '../../assets/Nike.png';
import Restaurant from '../../assets/restaurant.png';
import Shopping from '../../assets/shopping.png';
import Food from '../../assets/FoodWeb.png';
import Logo from '../../assets/LOGO.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";


const Projects = () => {
  const data = [
    {
      src : Nike,
      url : "https://tranphuctong.github.io/NikeWeb/"
    },
    {
      src : Shopping,
      url : "https://tranphuctong.github.io/Tech2etc-Ecommerce-Tutorial/"
    },
    {
      src : Restaurant,
      url : "https://tranphuctong.github.io/Restaurant-Web/"
    },
    {
      src : Food,
      url : "https://tranphuctong.github.io/FoodWeb/"
    },
    {
      src : Logo,
      url : "#!"
    }
  ]
  return (
    <section id="projects" data-aos="zoom-in">
      <div className="projects-heading">
        <h3>Recent Projects</h3>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          }
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {
          data.map(project => (
            <SwiperSlide key={project.src}>
              <div className="project-box">
              <a href={project.url}>
              <img src={project.src} alt="project" />
              <div className="p-overlayer">
                <strong>Outserved Reports</strong>
              </div>
            </a>
          </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      

      <div className="github-btn">
        <a href="https://github.com/TranPhucTong" className='btn-link'>
          My Github
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  )
}

export default Projects