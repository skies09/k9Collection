import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getDogData, getGroups } from "./../../store/actions";

import "./home.scss";

const Groups = ({ data, loading, error, getGroups }) => {
	const navigate = useNavigate();

	const navigateToGroup = (group) => {
		navigate("/group", {
			state: {
				group: group,
			},
		});
	};

	useEffect(() => {
		getGroups();
	}, [getGroups]);

	if (loading) {
		return <div> Loading... </div>;
	}
	if (error) {
		return <div> Error: {error} </div>;
	}

	return (
		<>
			<div className="button-container">
				<button
					className="all-dogs-button"
					onClick={() => {
						console.log("dispatch all dogs");
						getDogData();
					}}
				>
					Show All Dogs
				</button>
			</div>
			<div className="group-list">
				{data && (
					<ul>
						{" "}
						{data.map((group, index) => (
							<li className="group-item" key={index}>
								<button
									className="group-button"
									onClick={() => {
										navigateToGroup(group);
									}}
								>
									{group}{" "}
								</button>
							</li>
						))}{" "}
					</ul>
				)}{" "}
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	data: state.reducer.data,
	loading: state.reducer.loading,
	error: state.reducer.error,
});

export default connect(mapStateToProps, {
	getGroups,
})(Groups);
