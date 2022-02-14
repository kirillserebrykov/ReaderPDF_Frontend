import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import HomeContainer from "./Components/Home/HomeContainer";
import AboutFileContainer from "./Components/AboutFile/AboutFileContainer";
import ReadContainer from "./Components/Read/ReadContainer";

const App = () => {
	return (
		<Routes>
			<Route path="/*" element={<HomeContainer />} />
			<Route path="/Home/*" element={<HomeContainer />} />
			<Route path="/File/*" element={<AboutFileContainer />} />
			<Route path="/Read/*" element={<ReadContainer />} />
		</Routes>
	);
};

export default App;
