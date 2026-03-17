import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { blogService } from "../../../api/blogService";
const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "Update",
    content: "",
  });

  useEffect(() => {
    if (!fetching && !isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, fetching, navigate]);

  useEffect(() => {
    const fetchBlogData = async () => {
      if (!id) return;
      try {
        const data = await blogService.getById(id);
        if (data) {
          setForm({
            title: data.title || "",
            author: data.author || "",
            category: data.category || "Update",
            content: data.content || "",
          });
        }
      } catch (error) {
        console.error("Failed to get data:", error);
      } finally {
        setFetching(false);
      }
    };
    fetchBlogData();
  }, [id]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await blogService.update(id!, {
        title: form.title,
        author: form.author,
        category: form.category,
        content: form.content,
      });
      alert("Update Success!");
      navigate("/blog");
    } catch (error) {
      alert("Update Failed!");
    } finally {
      setLoading(false);
    }
  };

  if (fetching)
    return <div className="text-white text-center py-20">Loading Data...</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <form
        onSubmit={handleSave}
        className="bg-slate-900 border border-slate-800 p-10 rounded-3xl space-y-6"
      >
        <h2 className="text-2xl font-black uppercase text-white mb-6">
          Edit <span className="text-purple-500">Post</span>
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
          placeholder="Developer Name"
          className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-white outline-none"
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
        </select>

        <textarea
          required
          placeholder="Content"
          className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-white outline-none h-64"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 font-black rounded-xl uppercase bg-purple-600 text-white hover:bg-white hover:text-black transition-all"
        >
          {loading ? "Saving..." : "Update Post"}
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
