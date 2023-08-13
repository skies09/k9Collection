import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGroups } from "./../../store/actions";

import "./groups.scss";

const Groups = ({ data, loading, error, getGroups }) => {
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
			<div className="group-list">
				{data && (
					<ul>
						{" "}
						{data.map((group, index) => (
							<li className="group-item" key={index}>
								<button
									className="group-button"
									onClick={() => {
										console.log(
											"dispatch the group breeds",
											group
										);
									}}
								>
									{group}{" "}
								</button>
							</li>
						))}{" "}
					</ul>
				)}{" "}
			</div>
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
