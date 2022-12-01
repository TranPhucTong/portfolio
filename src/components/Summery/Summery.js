import React from 'react';
import './Summery.css';
import CV from '../../assets/TranPhucTong_CV.pdf';

const Summery = () => {
  return (
    <section id="summery">
      <div className="summery-heading" data-aos="fade-right">
        <strong>My Skillset</strong>

        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

        <a href={CV} download className='btn-link'>
          Get CV
          <i className='fa-solid fa-download'></i>
        </a>
      </div>

      <div className="summery-details" data-aos="fade-left">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cum vero ratione voluptates. Nesciunt qui sint, delectus saepe dicta inventore similique, ad minima cupiditate ea dignissimos! Et error ducimus veniam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cum vero ratione voluptates. Nesciunt qui sint, delectus saepe dicta inventore similique, ad minima cupiditate ea dignissimos! Et error ducimus veniam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cum vero ratione voluptates. Nesciunt qui sint, delectus saepe dicta inventore similique, ad minima cupiditate ea dignissimos! Et error ducimus veniam?
        </p>
      </div>
    </section>
  )
}

export default Summery