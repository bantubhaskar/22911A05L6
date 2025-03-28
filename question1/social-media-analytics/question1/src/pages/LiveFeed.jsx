import { useEffect, useState } from "react";
import { fetchLiveFeed } from "../api/fetchData";
import PostCard from "../components/PostCard";
import Loader from "../components/Loader";

const LiveFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetchLiveFeed().then(data => {
        setPosts(data);
        setLoading(false);
      });
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Live Feed</h2>
      {loading ? <Loader /> : posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
};

export default LiveFeed;
