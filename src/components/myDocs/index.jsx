import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import DropFileInput from './components/drop-file-input/DropFileInput';

const myDocs = () => {
  const onFileChange = (files) => {
    console.log(files);
}
  const handleLogout = () => {
		localStorage.removeItem("niftoken");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
			<Link to="/">
				<img src="/Niftron_logo.png" width="20%" alt="Logo" />
				</Link>
				
        <Link to="/myDocs">
						<button type="button" className={styles.header_btn} style={{color: "lightblue"}}>
							My Docs
						</button>
				</Link>

				<button className={styles.header_btn} >
				<a href="/#features">Features</a>
				</button>				

				<Link to="/Pricing">
					<button className={styles.header_btn}>
				Pricings
				</button>
				</Link>
        
				<button className={styles.logout_btn} onClick={handleLogout}>
					Logout
				</button>
        
      </nav>
<section className={styles.main}>
<br />

<div className="box">
  <h2 className="header">
    Drop your files below to add:
  </h2>

  <div className="dropBox">
  <DropFileInput
  onFileChange={(files) => onFileChange(files)}
  />
  </div>
</div>

<br />
<br />
<h2>Your Files:</h2>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
</section>
<section className={styles.footer}>
      <br />
      <section className={styles.footer_info}>
        <section className={styles.footer_info_left}>
            
        </section>
        <section className={styles.footer_info_center}>
        <a href='/'><img src="./Niftron_logo.png" height={75} width={200} alt="Logo" /></a>
        <br />
        <br />
        <div className='icons' align="center">
        <br />
        <a href='/'><img src="./instaicon.png" height={50} width={50} alt="insta" /></a>
        <a href='https://github.com/Niftron'><img src="./giticon.png" height={50} width={50} alt="git" /></a>
        <a href='/'><img src="./linkedinicon.png" height={50} width={50} alt="linkedIn" /></a>

         </div>
          <section className={styles.footer_info_terms}>
            <br />
            <p><a href='/'>Info</a>  -  <a href='/'>Support </a>  -  <a href='/'>Marketting </a></p>
          </section>
          <section className={styles.footer_info_email}>
            <br />
           © 2022 Niftron
          </section>
        </section>
        <section className={styles.footer_info_right}>
          <section className={styles.footer_info_contact}>
            <br />
          </section>
        </section>
      </section>
    </section>
</div>
	);
}


export default myDocs;