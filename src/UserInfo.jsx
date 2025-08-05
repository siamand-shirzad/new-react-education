const UserInfo = ({ name, username, email,handleDelete }) => {

  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>userName: {username}</li>
        <li>Email :{email}</li>
        <li><button onClick={handleDelete}>Delete</button></li>
      </ul>
    </div>
  );
};

export default UserInfo;
