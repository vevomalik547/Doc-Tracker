import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { NIFTRON } from "niftron-client-sdk";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true)

			//niftron login
			await NIFTRON.user.login(data.email, data.password);
			//niftron sets a jwt call niftoken.. so use it to do the authguard

			//server login
			// const url = "http://localhost:8080/api/auth";
			// const { data: res } = await axios.post(url, data);
			// localStorage.setItem("token", res.data);
			window.location = "/";

			setLoading(false)

		} catch (error) {
			setLoading(false)

			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
			else {
				console.log(error)
				setError(error.message);
			}
		}
	};

	return (
		<div className={styles.navbar}>
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
					<img src="./Niftron_logo.png" width="40%" alt="Logo" />
					<br />
						<h1>Login to Your Account</h1>
						<input
							disabled={loading}
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<br />
						<input
							disabled={loading}
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<br />
						<button type="submit" className={styles.green_btn} disabled={loading}>

							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
			</div>
			<section className={styles.footer}>
      <br />
      <section className={styles.footer_info}>
        <section className={styles.footer_info_left}>         
        </section>
        <section className={styles.footer_info_center}>
        <a href='/'><img src="./Niftron_logo.png" height={75} width={200} alt="Logo" align="center" /></a>
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
};

export default Login;
