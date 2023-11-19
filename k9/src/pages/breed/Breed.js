import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Banner from "./../../components/banner/Banner";
import Button from "./../../components/button/Button";
import "./breed.scss";

const Breed = () => {
	const selectedBreed = useSelector((state) => state.selectedBreed);
	const selectedGroup = useSelector((state) => state.selectedGroup);
	const navigation = `/dogs/${selectedGroup}`;

	const [breedData, setBreedData] = useState({});

	useEffect(() => {
		// Get the dog breed data
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://127.0.0.1:8000/dogs/breed/${selectedBreed}/` //need to update this call
				);
				const breedData = await response.json();
				setBreedData(breedData);
			} catch (error) {
				console.error("Error fetching groups:", error.message);
			}
		};

		fetchData();
	}, [selectedBreed]);

	const getBreedSize = (size) => {
		switch (size) {
			case "XS":
				return "X-Small";
			case "S":
				return "Small";
			case "M":
				return "Medium";
			case "L":
				return "Large";
			case "XL":
				return "X-Large";
			default:
				return "";
		}
	};

	const getIntegerValue = (int) => {
		switch (int) {
			case 1:
				return "Very Low";
			case 2:
				return "Low";
			case 3:
				return "Moderate";
			case 4:
				return "High";
			case 5:
				return "Very High";
			default:
				return "";
		}
	};
	return (
		<>
			<Banner text={selectedBreed} />
			<Button buttonText={"Back"} buttonNavigation={navigation} />
			{/*		<div>IMAGE</div> */}

			<div className="info-box">
				<p>
					Group : <span>{breedData.group}</span>
				</p>
				<p>
					Size : <span>{getBreedSize(breedData.size)}</span>
				</p>
				<p>
					Lifespan : <span>Average {breedData.lifespan} years</span>
				</p>
				<p>
					Intelligence :{" "}
					<span>{getIntegerValue(breedData.intelligence)}</span>
				</p>
				<p>
					Exercise needs :{" "}
					<span>{getIntegerValue(breedData.exercise_needs)}</span>
				</p>
				<p>
					Grooming needs :{" "}
					<span>{getIntegerValue(breedData.grooming_needs)}</span>
				</p>
			</div>
		</>
	);
};

export default Breed;
