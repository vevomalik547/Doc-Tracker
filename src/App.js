import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import MyDocs from "./components/myDocs";
import Pricing from "./components/Pricing";
import { NIFTRON } from "niftron-client-sdk";

const niftronConfig = {
  projectKey: process.env.REACT_APP_PROJECT_KEY,
  secretKey: process.env.REACT_APP_DEV_SECRET_KEY,
};
const Niftron = new NIFTRON(niftronConfig);
Niftron.initialize();

function App() {
	const user = localStorage.getItem("niftoken");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/Pricing" exact element={<Pricing />} />
			<Route path="/myDocs" exact element={<MyDocs />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			
		</Routes>

		
	);
	
}

export default App;
