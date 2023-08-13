
import Groups from "./pages/groups/Groups"
import { getDogData } from "./store/actions";
import "./app.scss";

function App() {
	return (
		<div className="app">
		<div className="heading">
			<h1>K9 Collection</h1>
			</div>
			<div>
			<button
				className="group-button"
				onClick={() => {
					console.log("dispatch all dogs");
					getDogData();
				}}
			>
				Show All Dogs
			</button>
		</div>
			<Groups/>
		</div>
	);
}

export default App;
