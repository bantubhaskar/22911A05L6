const UserCard = ({ user }) => (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold">{user.name}</h3>
      <p className="text-gray-600">Posts: {user.posts}</p>
    </div>
  );
  
  export default UserCard;
  