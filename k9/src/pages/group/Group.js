import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getBreeds } from "./../../store/actions";

const Group = ({ data, loading, error, getBreeds }) => {
	const location = useLocation();
	const navigate = useNavigate();
	let group = location.state.group;
	// add a back button
	useEffect(() => {
		getBreeds(group);
	}, [getBreeds]);

	if (loading) {
		return <div> Loading... </div>;
	}
	if (error) {
		return <div> Error: {error} </div>;
	}

	return (
		<div>
		<button
		className="group-button"
		onClick={() => {
			navigate('/')
			console.log("navigate Back");
		}}
	>
		Back
	</button>
			<h1>{group}</h1>
			<div className="group-list">
				{data && (
					<ul>
						{" "}
						{data.map(({ breed }) => (
							<li className="group-item">
								<button
									className="group-button"
									onClick={() => {
										// navigateToGroup(group);
										console.log("navigate to breed");
									}}
								>
									{breed}{" "}
								</button>
							</li>
						))}{" "}
					</ul>
				)}{" "}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	data: state.reducer.data,
	loading: state.reducer.loading,
	error: state.reducer.error,
});

export default connect(mapStateToProps, {
	getBreeds,
})(Group);
