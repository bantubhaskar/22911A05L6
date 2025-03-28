import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import LiveFeed from "./pages/LiveFeed";

const App = () => (
  <Router>
    <Header />
    <nav className="p-4 bg-gray-200 flex justify-around">
      <Link to="/" className="text-blue-600">Top Users</Link>
      <Link to="/trending" className="text-blue-600">Trending Posts</Link>
      <Link to="/live" className="text-blue-600">Live Feed</Link>
    </nav>
    <Routes>
      <Route path="/" element={<TopUsers />} />
      <Route path="/trending" element={<TrendingPosts />} />
      <Route path="/live" element={<LiveFeed />} />
    </Routes>
  </Router>
);

export default App;
