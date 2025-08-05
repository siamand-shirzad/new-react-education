import { Fragment, useState } from "react";
import "./App.css";
import UserInfo from "./UserInfo";

const initialUser = [
  { name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
  { name: " Howell", username: "Antonette", email: "Shanna@melissa.tv" },
  { name: "Leanne", username: "Bret", email: "Sincere@april.biz" },
  { name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv" },
];
function App() {
  const [users, stateUser] = useState(initialUser);

  const handleDelete = (name) => {
    // functional update
    stateUser((prevUser) => {
      const newUsers = prevUser.filter((user) => user.name !== name);
      return newUsers;
    });
  };
  const setSearch = (char) => {
    const newUsers = initialUser.filter((user) =>
      user.name.toLocaleLowerCase().includes(char.toLocaleLowerCase())
    );
    stateUser(newUsers);
  };
  return (
    <>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      {users.map((user) => (
        <UserInfo
          key={user.name}
          {...user}
          handleDelete={() => handleDelete(user.name)}
        />
      ))}
    </>
  );
}

export default App;
