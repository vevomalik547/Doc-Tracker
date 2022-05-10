import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { NIFTRON, UserType } from "niftron-client-sdk";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		userName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true)

			//recovery question
			let clue = data.email.substring(0, 3);
			let remainingLength = data.email.substring(3).length;
			let placeholder = "";
			for (let i = 0; i < remainingLength; i++) {
				placeholder += "*";
			}
			let question = `Enter your recovery email that starts with ${clue + placeholder}`;

			const options = {
				type: UserType.USER,
				alias: data.userName,
				password: data.password,
				email: data.email,
				recoveryQuestion: question,
				securityAnswer: data.email
			};
			//niftron registration 
			const { status, publicKey, evmPublicKey } =
				await NIFTRON.user.createLowPrivacyUser(options);

			console.log(status, publicKey, evmPublicKey)
			window.location = "/";

			//server registration 

			// const url = "http://localhost:8080/api/users";
			// const { data: res } = await axios.post(url, data);
			// navigate("/login");
			// console.log(res.message);

			setLoading(false)

		} catch (error) {
			setLoading(false)

			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			} else {
				console.log(error)
				setError(error.message);
			}
		}
	};

	return (
		<div className={styles.main}>
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<img src="./Niftron_logo.png" width="30%" alt="Logo" />
						<h1>Create Account</h1>
						<input
							disabled={loading}
							type="text"
							placeholder="User Name"
							name="userName"
							onChange={handleChange}
							value={data.userName}
							required
							className={styles.input}
						/>

						{/* 
						//add top your server if needed
						<input
						disabled={loading}
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
						disabled={loading}
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/> */}
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
						<button type="submit" className={styles.green_btn} disabled={loading}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
			
		</div>
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
        <table align="center">
		<tr>
            <td><a href='/'>Info</a></td>
            <td>-</td>
            <td><a href='/'>Support </a></td>
              <td>-</td>
            <td><a href='/'>Marketting </a></td>
		</tr>
		<tr></tr>
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
};

export default Signup;
