import { Fragment, useState } from "react";
import UserComponent from "./UserComponent";
import GuestComponent from "./GuestComponent";

function App() {
	const [isLogined, setIsLogined] = useState(false);
	return (
		<div className="app-container">
			<div className="app-background"></div>
			<div className="nav-bar">
				<button
					className={`toggle-btn ${isLogined ? "logout" : "login"}`}
					onClick={() => setIsLogined(!isLogined)}>
					{isLogined ? "logout" : "login"}
				</button>
			</div>
			<div className="app-content">{isLogined ? <UserComponent /> : <GuestComponent />}</div>
		</div>
	);
}

export default App;
