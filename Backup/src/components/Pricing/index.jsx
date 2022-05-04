import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";

const Pricing = () => {
		  const handleLogout = () => {
			  localStorage.removeItem("niftoken");
			  window.location.href="/";
		  };

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
					<button className={styles.header_btn} style={{color: "lightblue"}}>
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
<h1>Ready to start with DocTracker?</h1>
<h5>Choose the package that suits you from below</h5>
<PricingTable highlightColor="#1976D2">
      <PricingSlot buttonText="TRY IT FREE" title="FREE" priceText="$0/month">
        <PricingDetail> 1 GB Free Storage Data </PricingDetail>
        <PricingDetail> Allowed File formats: .pdf, .png & .css</PricingDetail>
        <PricingDetail> Allows the owner to share files to another user</PricingDetail>
      </PricingSlot>

      <PricingSlot buttonText="Pay Now" title="Prime" priceText="$4/month">
        <PricingDetail> 5 GB Storage Data </PricingDetail>
        <PricingDetail> Allowed File formats: .pdf, .png, .jpg, .css & .zip</PricingDetail>
        <PricingDetail> Allows the owner to share filesand the receiver to request permission of other files </PricingDetail>
        <PricingDetail>
          {" "}
          Our entire library of Episodes, Documentaries and Movies
        </PricingDetail>
        <PricingDetail> </PricingDetail>
      </PricingSlot>

      <PricingSlot buttonText="Pay Now" title="VIP" priceText="$6/month">
        <PricingDetail> 15 GB Storage Data </PricingDetail>
        <PricingDetail> Allowed File formats: .pdf, .png, .css, .doc, .pkg, .iso, .bin, .svg, .xml & .zip, </PricingDetail>
        <PricingDetail>
          {" "}
          Allows the owner to share filesand the receiver to request permission of other files
        </PricingDetail>
      </PricingSlot>
    </PricingTable>

<br />
<br />
<br />
<br />
<br />

</section>
<section className={styles.footer}>
      <br />
      <section className={styles.footer_info}>
        <section className={styles.footer_info_left}></section>

        <section className={styles.footer_info_center}>
        <a href='/'><img src="./Niftron_logo.png" height={75} width={200} alt="Logo" /></a>
        <br />
        <br />
        <div className={styles.icons} align="center">
        <br />
        <a href='/'><img src="./instaicon.png" height={50} width={50} alt="insta" /></a>
        <a href='https://github.com/Niftron'><img src="./giticon.png" height={50} width={50} alt="git" /></a>
        <a href='/'><img src="./linkedinicon.png" height={50} width={50} alt="linkedIn" /></a>

         </div>
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


export default Pricing;
