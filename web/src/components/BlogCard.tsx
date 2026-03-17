interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
}

const BlogCard = ({ title, excerpt, category, author, date }: BlogCardProps) => {
  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
          {category}
        </span>
        <div className="flex items-center text-slate-500">
          <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs">{date}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm line-clamp-3 mb-6 leading-relaxed">
        {excerpt}
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500" />
        <span className="text-sm font-medium text-slate-300">{author}</span>
      </div>
    </div>
  );
};

export default BlogCard;