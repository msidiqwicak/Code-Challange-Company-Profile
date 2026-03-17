import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { blogService, type BlogPost } from "../../../api/blogService";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;
      try {
        const data = await blogService.getById(id);
        setBlog(data);
      } catch (error) {
        console.error("Failed to get Blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure to delete this Blog?")) {
      try {
        const success = await blogService.delete(id!);
        if (success) {
          alert("🗑️ Blog has been deleted!");
          navigate("/blog");
        }
      } catch (error) {
        alert("Failed to delete Blog");
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-purple-500 font-black animate-pulse uppercase tracking-widest">
          Loading Article...
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl font-bold">Article Not Found</h1>
        <button
          onClick={() => navigate("/blog")}
          className="mt-4 text-purple-500 underline"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto py-24 px-6">
        <div className="mb-12 border-b border-slate-800 pb-12">
          <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-purple-500/30">
            {blog.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-6 leading-[1.1] tracking-tighter">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full flex items-center justify-center font-bold text-white">
              {blog.author?.charAt(0).toUpperCase() || "N"}
            </div>
            <div>
              <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">
                Developer / Author
              </p>
              <p className="text-white font-black">
                {blog.author || "Anonymous Developer"}
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 text-lg leading-relaxed whitespace-pre-wrap">
          {blog.content}
        </div>

        {isAuthenticated && (
          <div className="mt-16 pt-10 border-t border-slate-800 flex flex-col md:flex-row gap-4">
            <button
              onClick={() => navigate(`/edit-blog/${blog.id}`)}
              className="px-8 py-4 bg-white text-black font-black rounded-xl hover:bg-purple-600 hover:text-white transition-all text-xs uppercase tracking-widest"
            >
              Edit Post
            </button>
            <button
              onClick={handleDelete}
              className="px-8 py-4 border border-red-500 text-red-500 font-black rounded-xl hover:bg-red-500 hover:text-white transition-all text-xs uppercase tracking-widest"
            >
              Delete Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
