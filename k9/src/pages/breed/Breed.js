import React from "react";
import {  useSelector } from "react-redux";
import Banner from "./../../components/banner/Banner";

const Breed = () => {
	const selectedBreed = useSelector((state) => state.selectedBreed);


	return (
		<Banner text={selectedBreed} />
	);
};

export default Breed;
