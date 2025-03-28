const PostCard = ({ post }) => (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold">{post.title}</h3>
      <p className="text-gray-600">{post.content}</p>
      <p className="text-sm text-gray-500">Comments: {post.comments}</p>
    </div>
  );
  
  export default PostCard;
  