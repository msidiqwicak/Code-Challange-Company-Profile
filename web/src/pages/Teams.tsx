import { useEffect, useState } from 'react';
import { userService, type TeamMember } from '../../../api/userService';

const Teams = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const loadTeams = async () => {
      const data = await userService.getTeams();
      setMembers(data);
    };
    loadTeams();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black uppercase tracking-tight">Our <span className="text-purple-500">Elite</span> Crew</h2>
        <p className="text-slate-400 mt-4">Meet the creators of NipiVerse Studios masterpieces</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all">
            <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-500/30 p-1" />
            <h3 className="font-bold text-white text-lg">{member.name}</h3>
            <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-3">{member.role}</p>
            <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;