import React from "react";
import { useLocation } from "react-router-dom";

const Group = () => {
	const location = useLocation();
	let group = location.state.group;
// get all the breeds in the group selected
// add a back button
	return (
		<div>
			<h1>{group}</h1>
		</div>
	);
};

export default Group;
