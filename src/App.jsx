import Users from './Users';
import Posts from './Posts';
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from 'react-router';
import AddUser from './AddUser';
import UserDetails from './UserDetails';
import NotFound from './assets/NotFound';

const App = () => {

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
			<div className="max-w-4xl mx-auto bg-white rounded shadow-md overflow-hidden">
				<header className="fixed left-0 right-0 top-0 p-4 shadow-md bg-white">
					<div className="flex items-center justify-center gap-3">
						<h1 className="text-3xl font-bold text-center text-indigo-800 	">React App</h1>

						<div className="flex justify-center gap-4">
							<NavLink
								to="/users"
								className={({ isActive }) =>
									` rounded p-2  ${
										isActive
											? 'bg-indigo-600 text-white '
											: 'bg-gray-100 hover:bg-gray-200 text-gray-700'
									}`
								}
							>
								کاربران
							</NavLink>
							<NavLink
								to="/posts"
								className={({ isActive }) =>
									` rounded p-2 ${
										isActive
											? 'bg-indigo-600 text-white '
											: 'bg-gray-100 hover:bg-gray-200 text-gray-700'
									}`
								}
							>
								پست‌ها
							</NavLink>
						</div>
					</div>
				</header>
				<div className="p-6">
					<div className="bg-gray-50 rounded p-4">
						<Routes>
							<Route path="/users" element={<Users />}>
								<Route path="add-user" element={<AddUser />} />
								{/* <Route path=":user-id" element={<UserDetails />} /> */}
								<Route path="user-details/:userId" element={<UserDetails />} />
							</Route>
							<Route path="/posts" element={<Posts />} />
							<Route path="*" element={<NotFound />} />
							<Route path="/" element={<Navigate to="/Posts" />} />

						</Routes>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
