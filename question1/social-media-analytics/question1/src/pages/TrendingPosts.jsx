import { useEffect, useState } from "react";
import { fetchTrendingPosts } from "../api/fetchData";
import PostCard from "../components/PostCard";
import Loader from "../components/Loader";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrendingPosts().then(data => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Trending Posts</h2>
      {loading ? <Loader /> : posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
};

export default TrendingPosts;
