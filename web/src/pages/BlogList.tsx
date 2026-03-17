import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blogService } from "../../../api/blogService";

const BlogList = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await blogService.getAll();
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          setBlogs([]);
        }
      } catch (error) {
        console.error("Data Failed:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-primary font-bold animate-pulse tracking-widest uppercase">
          Loading Database...
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black">
            <span>
              NipiVerse Studio<span className="text-purple-500">.</span>
            </span>{" "}
            <span className="text-purple-500">BLOG</span>
          </h1>
          <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mt-2">
            Insights from the dev team
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full bg-slate-900 border border-slate-800 p-4 pl-12 rounded-xl text-xs font-bold text-white outline-none focus:border-purple-500 transition-all placeholder:text-slate-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {filteredBlogs.length === 0 ? (
        <div className="text-center py-20 border border-slate-800 rounded-3xl bg-slate-900/50">
          <p className="text-slate-500 font-bold uppercase tracking-widest">
            {searchTerm
              ? `No results found for "${searchTerm}"`
              : "No logs have been published yet"}
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col hover:border-slate-700 transition-all"
            >
              <span className="text-[10px] font-bold text-primary uppercase mb-2">
                {blog.category || "Update"}
              </span>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {blog.title}
              </h2>
              <p className="text-slate-400 text-sm line-clamp-3 mb-6">
                {blog.content}
              </p>

              <div className="mt-auto pt-6 border-t border-slate-800 flex justify-between items-center text-[10px] font-bold uppercase text-slate-500">
                <div>
                  <p className="text-white">{blog.author}</p>
                  <p>{new Date(blog.created_at).toLocaleDateString()}</p>
                </div>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-primary hover:text-white transition-colors"
                >
                  READ MORE →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
