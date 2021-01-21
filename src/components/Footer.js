import React from 'react';
import './css/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm
        </p>
        <p className='footer-subscription-text'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>O nama</h2>
            <Link to='/about'>Čime se bavimo</Link>
            <Link to='/about'>Šta nudimo</Link>
            <Link to='/gallery'>Galerija</Link>
            <Link to='/about'>Ocene</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Kontakti</h2>
            <Link to='/contact'>Kontakt</Link>
            <Link to='/contact'>Adresa</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Socijalne Mreze</h2>
            <Link to='/'>Instagram </Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Mala Pekara
              </Link>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
