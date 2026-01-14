import React from 'react';
import { IndianRupee, TrendingUp, Users } from 'lucide-react';

const EarningsStats: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-300">
       <h1 className="text-2xl font-bold text-slate-900 mb-6">Earnings & Stats</h1>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
             <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500 text-sm font-medium uppercase tracking-wide">Total Earnings</span>
                <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                   <IndianRupee size={16} />
                </div>
             </div>
             <div className="text-3xl font-bold text-slate-900">₹1,25,000</div>
             <div className="text-xs text-green-600 mt-2 font-medium flex items-center">
                <TrendingUp size={12} className="mr-1" /> +12% from last month
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
             <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500 text-sm font-medium uppercase tracking-wide">Sessions</span>
                <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                   <Users size={16} />
                </div>
             </div>
             <div className="text-3xl font-bold text-slate-900">124</div>
             <div className="text-xs text-slate-400 mt-2">Lifetime total</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
             <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500 text-sm font-medium uppercase tracking-wide">This Month</span>
                <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
                   <IndianRupee size={16} />
                </div>
             </div>
             <div className="text-3xl font-bold text-slate-900">₹15,000</div>
             <div className="text-xs text-slate-400 mt-2">15 sessions completed</div>
          </div>
       </div>

       <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Recent Transactions</h3>
          <div className="space-y-4">
             {[
                { date: "Oct 14, 2025", amount: "+₹800", desc: "Session with John Doe", status: "Processed" },
                { date: "Oct 12, 2025", amount: "+₹800", desc: "Session with Sarah Williams", status: "Processed" },
                { date: "Oct 10, 2025", amount: "+₹800", desc: "Session with Michael Chen", status: "Processed" },
                { date: "Oct 01, 2025", amount: "-₹10,000", desc: "Monthly Payout", status: "Paid" },
             ].map((tx, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0">
                   <div>
                      <div className="font-medium text-slate-900">{tx.desc}</div>
                      <div className="text-xs text-slate-500">{tx.date}</div>
                   </div>
                   <div className="text-right">
                      <div className={`font-bold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-slate-900'}`}>{tx.amount}</div>
                      <div className="text-xs text-slate-400">{tx.status}</div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default EarningsStats;