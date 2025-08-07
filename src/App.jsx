import {  useRef, useState } from "react";

function App() {
	const [count, setCount] = useState(0);
	let countValue = useRef(0);
	const handleClick = () => {
		countValue.current += 2;
		setCount(countValue.current + 1);
	}
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
			<div className="flex flex-col text-white items-center p-8 rounded-lg shadow-lg space-y-6 bg-white">
				<h2 className="text-gray-700 font-semibold text-3xl">counter app</h2>
				<div className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 w-36 h-36">
					<span className="text-4xl text-white font-bold">{count}</span>
				</div>
				<button onClick={handleClick}
					className="px-6 py-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg cursor-pointer font-bold
				hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out focus:ring-2 ring-blue-300 focus:outline-none
				">افزایش </button>

			</div>



		</div>

	);
}

export default App;
