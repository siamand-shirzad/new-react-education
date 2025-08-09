import { useEffect, useRef, useState } from "react";

function App() {
	const [inputValue1, setInputValue1] = useState("");
	const [inputValue2, setInputValue2] = useState("");
	const inputsRef = [useRef(null), useRef(null)]
	const [now, setNow ]= useState("");
	useEffect(() => {
		inputsRef[0].current.focus();
		const updateTime = ()=>{
			setNow(new Date().toLocaleTimeString());
		}
		updateTime();
		const timer = setInterval(updateTime,1000);
		return ()=> clearInterval(timer);
	}, []);
	const handleKeyDown = (e) =>{
		if (e.key === "Enter") {
			inputsRef[1].current.focus();
		}
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-400 to-indigo-600">
			<div className="text-center p-8 rounded-lg shadow-2xl space-y-6 bg-white w-full max-w-md">
				<h2 className="text-gray-700 font-semibold text-3xl"> فرم ورودی</h2>
				<p className="text-gray-700 font-semibold ">{now} </p>
				

				<div className="relative" >
					<input type="text " className="w-full  px-4 py-3 text-sm text-center border-2 border-teal-300 focus:ring-4 focus:ring-teal-200
					focus:border-teal-500 outline-none transition duration-300 bg-gray-50 rounded "
						placeholder="متن خود را وارد کنید..."
						value={inputValue1}
						onChange={(e) => setInputValue1(e.target.value)}
						ref={inputsRef[0]} 
						onKeyDown={handleKeyDown}/>
					<input type="text " className="w-full mt-4 px-4 py-3 text-sm text-center border-2 border-teal-300 focus:ring-4 focus:ring-teal-200
					focus:border-teal-500 outline-none transition duration-300 bg-gray-50 rounded "
						placeholder="متن خود را وارد کنید..."
						value={inputValue2}
						onChange={(e) => setInputValue2(e.target.value)}
						ref={inputsRef[1]} />
				</div>
				{inputValue1 && (
					<div className="mt-4 p-4 bg-teal-50 rounded border border-teal-300">
						<p className="text-teal-800 text-center" >متن وارد شده: <span className="font-bold">{`${inputValue1} ${inputValue2}`}</span></p>
					</div>
				)}

				<div className="flex justify-center gap-4 space-x-4 ">
					<button onClick={() => {setInputValue1("") ,setInputValue2("")}} className="px-4 py-2 bg-teal-600 text-white font-medium rounded shadow-md hover:bg-teal-700 transition duration-300 
				focus:outline-none focus:ring-2 focus:ring-teal-500">پاک کردن</button>
					<button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded shadow-md hover:bg-indigo-700 transition duration-300 
				focus:outline-none focus:ring-2 focus:ring-indigo-500">ارسال</button>
				</div>

			</div>
		</div>

	);
}

export default App;
