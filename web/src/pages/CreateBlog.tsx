import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { blogService } from "../../../api/blogService";

const CreateBlog = () => {
  const { isAuthenticated, admin } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "Update",
    content: "",
  });

  useEffect(() => {
    if (!isAuthenticated) navigate("/login", { replace: true });
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!admin?.id) return alert("Admin is no Valid");

    setLoading(true);
    try {
      const finalData = {
        title: form.title,
        author: form.author,
        category: form.category,
        content: form.content,
        excerpt: form.content.substring(0, 150) + "...",
        admin_id: admin.id,
      };

      await blogService.create(finalData);

      alert("🚀 Blog Published successfully!");

      navigate("/blog");
    } catch (error) {
      console.error("PUBLISH ERROR:", error);
      alert("Posting Failed. Please Try Again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 border border-slate-800 p-10 rounded-3xl space-y-6"
      >
        <h2 className="text-2xl font-black uppercase text-white mb-6">
          Create <span className="text-purple-500">New Post</span>
        </h2>

        <input
          type="text"
          required
          placeholder="Title"
          className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-white outline-none"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          type="text"
          required
          placeholder="Developer / Author Name"
          className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-purple-500 transition"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />

        <select
          className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-white outline-none"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option value="Update">Update</option>
          <option value="Sports">Sports</option>
          <option value="Games">Games</option>
          <option value="News">News</option>
          <option value="Tutorial">Tutorial</option>
        </select>

        <textarea
          required
          placeholder="Write your blog here.."
          className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-white outline-none h-64"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 font-black rounded-xl uppercase bg-purple-600 text-white hover:bg-white hover:text-black transition-all"
        >
          {loading ? "Processing..." : "Publish to Studio"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
