import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { PlayerStats, Team } from '../types';

interface StatsProps {
  teams: Team[];
  topScorers: PlayerStats[];
}

const Stats: React.FC<StatsProps> = ({ teams, topScorers }) => {
  const sortedTeams = [...teams].sort((a, b) => b.points - a.points);
  const data = sortedTeams.map(t => ({ name: t.name, points: t.points, color: t.logoColor }));

  return (
    <div className="w-full bg-zinc-900/50 rounded-xl border border-white/5 p-6 backdrop-blur-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* League Table Preview */}
        <div>
          <h3 className="text-xl font-display font-bold text-white mb-6 border-l-4 border-cesar-gold pl-3">
            GRUPU TURNĪRA TABULA
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-400 uppercase bg-white/5">
                <tr>
                  <th className="px-4 py-3 rounded-tl-lg">#</th>
                  <th className="px-4 py-3">Komanda</th>
                  <th className="px-4 py-3 text-center">S</th>
                  <th className="px-4 py-3 text-center">U</th>
                  <th className="px-4 py-3 text-center">Z</th>
                  <th className="px-4 py-3 text-right rounded-tr-lg">Pkt</th>
                </tr>
              </thead>
              <tbody>
                {sortedTeams.map((team, index) => (
                  <tr key={team.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-500">{index + 1}</td>
                    <td className="px-4 py-3 font-bold text-white flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: team.logoColor }}></div>
                      {team.name}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-400">{team.played}</td>
                    <td className="px-4 py-3 text-center text-green-500">{team.won}</td>
                    <td className="px-4 py-3 text-center text-red-500">{team.lost}</td>
                    <td className="px-4 py-3 text-right font-bold text-cesar-gold">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Scorers Chart */}
        <div>
           <h3 className="text-xl font-display font-bold text-white mb-6 border-l-4 border-cesar-green pl-3">
            REZULTATĪVĀKIE SPĒLĒTĀJI
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topScorers} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={100} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                  cursor={{fill: 'transparent'}}
                />
                <Bar dataKey="goals" radius={[0, 4, 4, 0]}>
                  {topScorers.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#FFD700' : '#009B4D'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-2">
             {topScorers.slice(0, 3).map((player, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                   <div className="flex items-center gap-3">
                      <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${i===0 ? 'bg-cesar-gold text-black' : 'bg-gray-700 text-white'}`}>
                        {i+1}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{player.name}</div>
                        <div className="text-xs text-gray-500">{player.team}</div>
                      </div>
                   </div>
                   <div className="text-lg font-display font-bold text-cesar-green">{player.goals} <span className="text-xs text-gray-500 font-sans font-normal">vārti</span></div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;