import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer >
      <span>Copyright &copy; DevA.T VietNam</span>

      <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=100084368642280">
          <i className='fa-brands fa-facebook'></i>
        </a>

        <a href="https://www.instagram.com/towg_13/">
          <i className='fa-brands fa-instagram'></i>
        </a>

        <a href="https://www.youtube.com/channel/UCinPIqzxV_nuwxSiWlXmcfw">
          <i className='fa-brands fa-youtube'></i>
        </a>
      </div>

      <a href="#!" className='footer-logo'>Tran Phuc Tong</a>
    </footer>
  )
}

export default Footer