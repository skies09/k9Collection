import React from "react";
import { useSelector } from "react-redux";
import Banner from "./../../components/banner/Banner";
import Button from "./../../components/button/Button";

const Breed = () => {
	const selectedBreed = useSelector((state) => state.selectedBreed);
	const selectedGroup = useSelector((state) => state.selectedGroup);
	const navigation = `/dogs/${selectedGroup}`

	return (
		<>
			<Banner text={selectedBreed} />
			<Button buttonText={"Back"} buttonNavigation={navigation} />
		</>
	);
};

export default Breed;
