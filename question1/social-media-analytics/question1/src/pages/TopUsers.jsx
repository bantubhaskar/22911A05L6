import { useEffect, useState } from "react";
import { fetchUsers } from "../api/fetchData";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";

const TopUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data.slice(0, 5)); // Get top 5 users
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Top Users</h2>
      {loading ? <Loader /> : users.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  );
};

export default TopUsers;
