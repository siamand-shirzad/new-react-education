import { Link, useNavigate } from 'react-router';

const AddUser = () => {
	const navigate = useNavigate()
	return (
		<div className="fixed w-full h-screen left-0 top-0 z-10 flex justify-center items-center bg-black/30 backdrop-blur-xs">
			<div className="bg-white w-1/3 rounded-2xl shadow py-5 ">
				<h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">افزودن کاربر</h2>
				<form action="" className="p-4 shadow-md mb-4 rounded-2xl ">
					<div className="flex flex-col">
						<label htmlFor="name" className="font-medium text-gray-700 mb-2">
							نام کاربر
						</label>
						<input type="text" id='name' className="border border-gray-300 p-2 rounded " />
					</div>
					<div className="flex flex-col mt-4">
						<label htmlFor="email" className="font-medium text-gray-700 mb-2">
							ایمیل کاربر
						</label>
						<input type="text" id='email' className="border border-gray-300 p-2 rounded " />
					</div>
					<button
						className="mt-4 font-medium rounded text-white bg-blue-500 px-2 py-1 hover:bg-blue-600 transition-colors duration-150 cursor-pointer"
						type="submit"
					>
						افزودن کاربر
					</button>
				</form>
				<div className="flex justify-end px-10">
					<button onClick={()=>navigate(-1)} className=" bg-gray-500 text-white rounded px-1 py-0.5 cursor-pointer hover:bg-gray-600 transition-colors duration-150">
						بازگشت
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddUser;
