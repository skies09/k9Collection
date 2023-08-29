import React from "react";
import { BrowserRouter as Router, Routes, Route }
from 'react-router-dom';
import Home from "./pages/home/Home";
import Group from './pages/group/Group';
import Breed from './pages/breed/Breed';
import "./app.scss";

const App = () => (
		<div className="app">
			<div className="heading">
				<h1>K9 Collection</h1>
			</div>
			<Router>

            <Routes>
                <Route exact path='/' exact element={<Home />} />
				<Route path='/dogs/:group' element={<Group />} />
				<Route path='/:breed' element={<Breed />} />
            </Routes>
        </Router>
	
		</div>
)

export default App;
