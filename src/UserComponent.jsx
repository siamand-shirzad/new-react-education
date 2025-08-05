import { useEffect, useState } from "react";
import "./UserComponent.css";

const UserComponent = () => {
	const [age, setAge] = useState(20);

	useEffect(() => {
		// mounting
		document.title = "UserComponent";
		console.log("send request to server");
		//unmounting
		return () => {
			console.log("your logout");
		};
	}, []);
	//updating
	useEffect(() => {
		console.log(age);
		if (age == 30) {
			console.log("your age is 30");
		}
	}, [age]);
	return (
		<div>
			<div className="user-container">
				<h1 className="user-title">User component</h1>
				<button className="user-btn" onClick={() => setAge((prevAge) => prevAge + 1)}>
					change age
				</button>
				<ul className="user-info">
					<li>Name:siamand</li>
					<li>
						Age: <span className="user-age">{age}</span>{" "}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default UserComponent;
