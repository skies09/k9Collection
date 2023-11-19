import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedGroup } from "../../store/actions";
import Banner from "./../../components/banner/Banner";
import "./home.scss";

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [groups, setGroups] = useState([]);

	useEffect(() => {
		// Get the dog groups
		const fetchData = async () => {
			try {
				const response = await fetch(
					"http://127.0.0.1:8000/dogs/groups" //need to update this call
				);
				const groupsData = await response.json();
				setGroups(groupsData);
			} catch (error) {
				console.error("Error fetching groups:", error.message);
			}
		};

		fetchData();
	}, []);

	const navigateToGroup = (group) => {
		navigate(`/dogs/${group}`);
	};

	const handleGroupSelect = (selectedGroup) => {
		dispatch(setSelectedGroup(selectedGroup));
		navigateToGroup(selectedGroup);
	};
	return (
		<>
			<Banner text={"Breed Groups"} />
			{/*
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
				</div> */}
			<div className="group-list">
				{groups && (
					<ul>
						{" "}
						{groups.map((group, index) => (
							<li className="group-item" key={index}>
								<button
									className="group-button"
									onClick={() => {
										handleGroupSelect(group);
									}}
								>
									{group}
								</button>
							</li>
						))}{" "}
					</ul>
				)}{" "}
			</div>
			{/*	<div className="button-container">
			<button
				className="all-dogs-button"
				onClick={() => {
					console.log("dispatch Cross Breeds");
					// getDogData();
				}}
			>
				Cross Breeds
			</button>
			</div>*/}
		</>
	);
};

export default Home;
