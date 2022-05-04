import React from 'react';
import { IconName } from "react-icons/io";

import './Footer.css';

function Footer () {

  return (
    <section className="footer">
      <br />
      <section className="footer-info">
        <section className="footer-info-left">
            
        </section>


        <section className="footer-info-center">
        <a href='./Home'><img src="./Niftron_logo.png" height={60} width={160} alt="Logo" /></a>
        <br />
        <br />
        <div className='icons' align="center">
        <br />
        <a href='/'><img src="./instaicon.png" height={30} width={30} alt="insta" /></a>
        <a href='https://github.com/Niftron'><img src="./giticon.png" height={30} width={30} alt="git" /></a>
        <a href='/'><img src="./linkedinicon.png" height={30} width={30} alt="linkedIn" /></a>

         </div>
          <section className="footer-info__terms">
            <br />
            <p><a href='/'>Info</a>  -  <a href='/'>Support </a>  -  <a href='/'>Marketting </a></p>
          </section>
          <section className="footer-info__email">
            <br />
           © 2022 Niftron
          </section>
        </section>


        <section className="footer-info-right">
          <section className="footer-info__contact">
            <br />
          </section>
        </section>
      </section>
    </section>
    
  )
}

export default Footer;