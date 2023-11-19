import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedBreed } from "../../store/actions";
import Banner from "./../../components/banner/Banner";
import Button from "../../components/button/Button";
import "./group.scss";

const Group = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const selectedGroup = useSelector((state) => state.selectedGroup);

	const [breeds, setBreeds] = useState([]);

	useEffect(() => {
		// Get the dog breeds
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://127.0.0.1:8000/dogs/${selectedGroup}/` //need to update this call
				);
				const breedData = await response.json();
				setBreeds(breedData);
			} catch (error) {
				console.error("Error fetching groups:", error.message);
			}
		};

		fetchData();
	}, [selectedGroup]);

	const navigateToBreed = (breed) => {
		navigate(`/${breed}`);
	};

	const handleBreedSelect = (selectedBreed) => {
		dispatch(setSelectedBreed(selectedBreed));
		navigateToBreed(selectedBreed);
	};

	return (
		<div>
			<Banner text={selectedGroup} />
			<Button buttonText={'Back'} buttonNavigation={'/'} />

			<div className="breed-list">
				{breeds.length > 0 && (
					<ul>
						{" "}
						{breeds.map(({ breed }) => (
							<li className="breed-item">
								<button
									className="breed-button"
									onClick={() => {
										handleBreedSelect(breed);
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

export default Group;
