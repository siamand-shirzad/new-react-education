import Users from './Users';
import Posts from './Posts';
import { Link, NavLink, Route, Routes } from 'react-router';

const App = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
			<div className="max-w-4xl mx-auto bg-white rounded shadow-md overflow-hidden">
				<div className="p-6">
					<h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">React App</h1>

					<div className="flex justify-center mb-8 gap-4">
						<NavLink
							to="/users"
							className={({ isActive }) => ` rounded p-2 ${isActive 
								? 'bg-indigo-600 text-white ' 
								: 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
						>
							کاربران
						</NavLink>
						<NavLink
							to="/posts"
							className={({ isActive }) => ` rounded p-2 ${isActive 
								? 'bg-indigo-600 text-white ' 
								: 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
						>
							پست‌ها
						</NavLink>
					</div>
					<div className="bg-gray-50 rounded p-4">
						<Routes>
							<Route path="/users" element={<Users />} />
							<Route path="/posts" element={<Posts />} />
						</Routes>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
