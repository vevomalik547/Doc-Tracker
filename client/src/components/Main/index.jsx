import React from "react";
import { Link, useNavigate} from "react-router-dom";
import styles from "./styles.module.css";

const Main = () => {
  let navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("niftoken");
		window.location.reload();
	};

	const navi = () =>{
		//window.location='/myDocs';
    navigate("/myDocs");
	}

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
			<Link to="/">
				<img src="/Niftron_logo.png" width="20%" alt="Logo" />
				</Link>
				
        <Link to="/myDocs">
						<button type="button" className={styles.header_btn}>
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

				<Link to="/">
				<button className={styles.logout_btn} onClick={handleLogout} >
					Logout
				</button>
				</Link>
			</nav>
<section className={styles.main}>
	
<br />
<br />
<br />
		<section className={styles.homeTop}>
		<img src='/bg1.png' className={styles.home_item} alt="Logo" />
      <p className={styles.home_item_top}> Create, Manage & Boost Your Business 
      <br />
	  <br />
	  <p className={styles.content}>DocFlow is blockchain-based document management software that digitizes the entire paperwork cycle and uses advanced smart contract mechanisms to guarantee uncompromised data security and authenticity. A lightbulb moment for your paperwork.</p>
      <p className={styles.content}>&nbsp;</p>
      <a href="/" className={styles.home_item_top}>
		  <button className={styles.btn}>Get Started</button>
		  </a>
      </p>
    </section>
<br />
<br />
<img src='./doc.png' alt="doc" />
<br />
<br />
<img src='./howwestart.png' alt="howstart" />
<br />
<div className={styles.features}>
    <br />
    <a id="features"><h1>Features</h1></a>
    <br />
<table>
<tr>
    <td><section className={styles.card}>
    <img src="./f1.svg" alt="EA" />
        <p>Electronic Agreement</p>
        </section></td>
        <td><section className={styles.card}>
    <img src="./f2.svg" alt="EA" />
        <p>Signature status tracking and management</p>
        </section></td>
    <td><section className={styles.card}>
    <img src="./f3.svg" alt="EA" />
        <p>Original verification by electronic signature</p>
        </section></td>
        <td><section className={styles.card}>
    <img src="./f4.svg" alt="EA" />
        <p>Document organizing and archiving</p>
        </section></td>
</tr>
<br />
<br />

<tr>
    <td><section className={styles.card}>
    <img src="./f5.svg" alt="EA" />
        <p>Secure document sharing</p>
        </section></td>
        <td><section className={styles.card}>
    <img src="./f6.svg" alt="EA" />
        <p>Document authentication</p>
        </section></td>
        <td><section className={styles.card}>
    <img src="./f7.svg" alt="EA" />
        <p>Blockchain History Verification</p>
        </section></td>
        <td><section className={styles.card}>
    <img src="./f8.svg" alt="EA" />
        <p>NFT Issue and Management</p>
        </section></td>
</tr>
</table>
</div>
<div>
    <br />
    <br />
    <br />
<table align='center' className={styles.tbl1}>
        <tr>
          <th>Document Management System</th>
        </tr>
        <tr>
          <td className={styles.dms}>
            <ul>
                <li>Forget compromising your internal workflow and data security</li>
                <li>Skip time-consuming doc processing routines</li>
                <li>Avoid risk from third-party online document management services</li>
                <li>Stop jeopardizing sensitive papers during their processing or approval</li>
            </ul>
            </td>
        </tr>
      </table>
</div>

<br />
    <br />
    <br />
<img src='/threeword.png' alt="3words" />
<img src='/updates.png' alt="updates" />


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
        <section className='icons' align="center">
        <br />
        <table>
        <tr>
            <td>
              <a href='/'><img src="./instaicon.png" height={50} width={50} alt="insta" /></a></td>
              <td>
              <a href='https://github.com/Niftron'><img src="./giticon.png" height={50} width={50} alt="git" /></a></td>
            <td>
              <a href='/'><img src="./linkedinicon.png" height={50} width={50} alt="linkedIn" /></a></td>
              <td></td>
        </tr>
        </table>
         </section>

          <section className={styles.footer_info_terms}>
            <br />
            
        <table>
        <tr>
            <td><a href='/'>Info</a></td>
            <td>-</td>
            <td><a href='/'>Support </a></td>
              <td>-</td>
            <td><a href='/'>Marketting </a></td>
              <td></td>
        </tr>
        </table>
            
          </section>
          <section className={styles.footer_info_email}>
            <br />
            <table>
        <tr>
            <td>Powered by <a className={styles.footer_info_email} href='/'><img src="./shortcutIcon.png" alt="logo" /></a></td>
        </tr>
        </table>
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

export default Main;
