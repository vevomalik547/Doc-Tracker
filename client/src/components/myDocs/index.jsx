import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import '../myDocs/components/drop-file-input/drop-file-input.css';

import DropFileInput from './components/drop-file-input/DropFileInput';
import { listDocsByPK } from "../../api";
import jsonwebtoken from "jsonwebtoken";

function MyDocs() {
  const [fileList, setFileList] = useState([]);
  const [publicKey, setPublicKey] = useState(null);

  const onFileChange = (files) => {
    console.log(files);
  }
  const handleLogout = () => {
    localStorage.removeItem("niftoken");
    window.location.href = "./";
  };

  const fetchUser = async () => {
    if (localStorage.getItem("niftoken")) {
      const token = localStorage.getItem("niftoken");
      if (token) {
        const decodedToken = jsonwebtoken.decode(token);
        if (decodedToken) {
          setPublicKey(decodedToken.publicKey)
        } else {
          setPublicKey(null)
        }
      }
    }
  };
  const loadFiles = async (publicKey) => {
    const files = await listDocsByPK(publicKey)
    setFileList(files.data.data)
  };

  useEffect(() => {
    fetchUser()
  }, [])

  useEffect(() => {
    loadFiles(publicKey)
  }, [publicKey])

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

				<Link to="/">
				<button className={styles.logout_btn} onClick={handleLogout} >
					Logout
				</button>
				</Link>
			</nav>
      <section className={styles.main}>
        <br />

        <div className={styles.box}>
          <h2 className={styles.header}>
            Drop your files below to add:
          </h2>

          <div className={styles.dropBox}>
            <DropFileInput
              onFileChange={(files) => onFileChange(files)}
            />
          </div>
        </div>

        <br />
        <br />
        <h2>Your Files:</h2>
        {
          fileList.length > 0 &&
          fileList.map((item, index) => (
            <div key={index} className="drop-file-preview__item">
              <div className="drop-file-preview__item__details">
                <h2>File Name: <u>{item.name}</u></h2>
                {/*>>>>USE IF NEEDED TO DELETE DOCUMENTS FROM DATABASE>>>> <button className="drop-file-preview__item__del" >DLT File</button>*/}
                {/* Link to retrieve the uploaded files in IPFS */}
                <p><b>Local Ref ID:</b> {item._id}</p>
                <p><b>IPFSHASH:</b> <a href={item.ipfsURL} target="_blank"> {item.ipfsHash}</a></p>
                <p><b>TXNHASH:</b> <a href={item.txnURL} target="_blank"> {item.txnHash}</a></p>
                <br />
                <a href={item.ipfsURL} target="_blank">
                  <button className={styles.details__btn}>View File</button>
                  </a>
                  <p />
              </div>
              {/* <button className="drop-file-preview__item__del" onClick={fileRemove(item)}>x</button> */}
            </div>
          ))
        }
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


export default MyDocs;