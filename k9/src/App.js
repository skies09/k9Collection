import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Group from "./pages/group/Group";
import Breed from "./pages/breed/Breed";
import "./app.scss";

const App = () => (
	<div className="app">
		<Header />
		<Provider store={store}>
		<Router>
			<Routes>
				<Route exact path="/" exact element={<Home />} />
				<Route path="/dogs/:group" element={<Group />} />
				<Route path="/:breed" element={<Breed />} />
			</Routes>
		</Router>
		</Provider>
	</div>
);

export default App;
