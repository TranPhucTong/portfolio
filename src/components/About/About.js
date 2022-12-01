import React from 'react';
import './About.css'

const About = () => {
  return (
    <section id='about'>
      <div className="about-container">
        <div className="about-heading" data-aos="flip-left">
          <strong>About me</strong>
          <h3>Designing with passion for Problem Solving</h3>
          <a href="tel:0337175348" className='btn-link'>
            033-71-75-348
            <i className='fa-solid fa-phone-flip'></i>
          </a>
        </div>


        <div className="about-details" data-aos="flip-right">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, assumenda vitae commodi iure ex illum voluptatum, necessitatibus aut autem quam amet ipsam! Natus temporibus architecto laudantium fuga magni voluptatibus unde!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, assumenda vitae commodi iure ex illum voluptatum, necessitatibus aut autem quam amet ipsam! Natus temporibus architecto laudantium fuga magni voluptatibus unde!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, assumenda vitae commodi iure ex illum voluptatum, necessitatibus aut autem quam amet ipsam! Natus temporibus architecto laudantium fuga magni voluptatibus unde!</p>
        </div>
      </div>
    </section>
  )
}

export default About