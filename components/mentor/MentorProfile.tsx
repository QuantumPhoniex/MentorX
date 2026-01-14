import React from 'react';
import Button from '../Button';

const MentorProfile: React.FC = () => {
  return (
    <div className="max-w-3xl animate-in fade-in duration-300">
       <h1 className="text-2xl font-bold text-slate-900 mb-6">Mentor Profile</h1>

       <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-8">
          
          <div className="flex items-start gap-6 border-b border-slate-100 pb-8">
             <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-2xl font-bold">
                SJ
             </div>
             <div className="flex-1">
                <Button variant="outline" size="sm" className="mb-4">Change Photo</Button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Display Name</label>
                      <input type="text" defaultValue="Sarah Jenkins" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none" />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Job Title / Role</label>
                      <input type="text" defaultValue="Senior Software Engineer" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none" />
                   </div>
                </div>
             </div>
          </div>

          <div>
             <h3 className="text-lg font-bold text-slate-900 mb-4">Expertise & Skills</h3>
             <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Tags (Comma separated)</label>
                <input type="text" defaultValue="React, Distributed Systems, Cloud Architecture, Python, Career Advice" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none mb-2" />
                <p className="text-xs text-slate-500">These tags help match you with relevant student projects.</p>
             </div>
          </div>

          <div>
             <h3 className="text-lg font-bold text-slate-900 mb-4">Session Settings</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Price per Session (₹)</label>
                   <input type="number" defaultValue="800" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Weekly Availability (Hours)</label>
                   <select className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none bg-white">
                      <option>0-5 hours</option>
                      <option selected>5-10 hours</option>
                      <option>10-20 hours</option>
                   </select>
                </div>
             </div>
          </div>

          <div className="pt-4 flex justify-end">
             <Button>Save Changes</Button>
          </div>

       </div>
    </div>
  );
};

export default MentorProfile;