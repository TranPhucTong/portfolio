import React from 'react';
import './Home.css';
import Avatar from '../../assets/avt.png'

const Home = () => {
  return (
    <section id="home">
      <div className="home-text" data-aos="fade-down">
        <strong>Hello, it's me</strong>
        <h1>Tran Phuc Tong</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem natus nostrum modi ut. Excepturi quisquam aliquam fuga vero iste quam nemo perspiciatis. Enim aliquam necessitatibus commodi? Provident tempora ipsa sapiente!</p>
        <a href="#summery" className='btn-link'>Scroll For Me</a>
      </div>

      <div className="home-img" data-aos="fade-up">
        <div className="img-box">
          <img src={Avatar} alt="Avatar" />

          <h2>Tran Phuc Tong <br /> <span>Full-Stack Developer</span></h2>

          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100084368642280">
              <i className='fa-brands fa-facebook'></i>
            </a>

            <a href="https://www.instagram.com/towg_13/">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>

          <a href="#!" className='hire-me'>Hire me</a>
        </div>
      </div>
    </section>
  )
}

export default Home