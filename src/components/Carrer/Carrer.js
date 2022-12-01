import React from 'react';
import './Carrer.css';
import CV from '../../assets/CV_XinViec_English.pdf'

const Carrer = () => {
  const carrers = [
    {
      title: "Front-end Developer",
      name: "Software", 
      year: "2019-2022"
    },

    {
      title: "Back-end Developer",
      name: "Software", 
      year: "2022"
    },
  ]

  const education = [
    {
      title: "Front-end Developer",
      name: "Software", 
      year: "2019-2022"
    },

    {
      title: "Back-end Developer",
      name: "Software", 
      year: "2022"
    },
  ]
  return (
    <section id="carrer">
      <div className="carrer-education">
        <div className="carrer" data-aos="fade-right">
          <h3>Carrer</h3>

          <div className="c-b-container">
            {
              carrers.map((carrer, index) => (
                <div className="c-box" key={index}>
                  <h4>{carrer.title}</h4>
                  <strong>{carrer.name}</strong>
                  <span>{carrer.year}</span>
                </div>
              ))
            }
          </div>
        </div>

        <div className="carrer edu" data-aos="fade-left">
          <h3>Education</h3>

          <div className="c-b-container">
            {
              education.map((carrer, index) => (
                <div className="c-box" key={index}>
                  <h4>{carrer.title}</h4>
                  <strong>{carrer.name}</strong>
                  <span>{carrer.year}</span>
                </div>
              ))
            }
          </div>
        </div>

        
      </div>
      <div className="btn-c">
          <a href={CV} download className='btn-link'>
            Get CV
            <i className='fa-solid fa-download'></i>
          </a>
        </div>
    </section>
  )
}

export default Carrer