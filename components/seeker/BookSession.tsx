import React, { useState } from 'react';
import { ChevronLeft, Star, Clock, CheckCircle2 } from 'lucide-react';
import Button from '../Button';

interface BookSessionProps {
  onNavigate: (view: string) => void;
}

const BookSession: React.FC<BookSessionProps> = ({ onNavigate }) => {
  const [step, setStep] = useState<'details' | 'mentors' | 'profile' | 'confirm'>('details');
  const [selectedMentor, setSelectedMentor] = useState<any>(null);

  const mentors = [
    {
      id: 1,
      name: "Sarah Jenkins",
      title: "Senior Software Engineer @ Google",
      tags: ["React", "Distributed Systems", "Cloud"],
      rating: 4.9,
      sessions: 124,
      price: 800,
      image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      id: 2,
      name: "David Kim",
      title: "PhD Candidate @ MIT",
      tags: ["AI/ML", "Python", "Data Science"],
      rating: 5.0,
      sessions: 89,
      price: 1000,
      image: "https://i.pravatar.cc/150?u=david"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      title: "Frontend Lead @ Airbnb",
      tags: ["UX/UI", "Frontend", "Accessibility"],
      rating: 4.8,
      sessions: 210,
      price: 900,
      image: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  const handleMentorSelect = (mentor: any) => {
    setSelectedMentor(mentor);
    setStep('profile');
  };

  const handleBook = () => {
    setStep('confirm');
    setTimeout(() => {
        onNavigate('home');
    }, 2000);
  };

  if (step === 'details') {
    return (
      <div className="max-w-2xl mx-auto animate-in fade-in duration-300">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Book a Session</h1>
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">For which project?</label>
             <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none bg-white">
                <option>Smart Attendance System</option>
                <option>E-commerce Microservices</option>
             </select>
          </div>
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">What do you need help with?</label>
             <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none bg-white">
                <option>Idea Validation</option>
                <option>Tech Stack Decision</option>
                <option>Code Review / Debugging</option>
                <option>Mock Presentation</option>
             </select>
          </div>
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">Urgency</label>
             <div className="flex gap-4">
               {['Low (This week)', 'Medium (In 2-3 days)', 'High (ASAP)'].map((urgency) => (
                 <label key={urgency} className="flex items-center p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 w-full">
                    <input type="radio" name="urgency" className="text-indigo-600 focus:ring-indigo-500" />
                    <span className="ml-2 text-sm text-slate-700">{urgency.split(' ')[0]}</span>
                 </label>
               ))}
             </div>
          </div>
          <div className="pt-4">
             <Button fullWidth onClick={() => setStep('mentors')}>Find Mentors</Button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'mentors') {
    return (
      <div className="max-w-4xl mx-auto animate-in fade-in duration-300">
        <button onClick={() => setStep('details')} className="flex items-center text-sm text-slate-500 hover:text-slate-900 mb-6">
           <ChevronLeft size={16} className="mr-1" /> Back to details
        </button>
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Recommended Mentors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {mentors.map((mentor) => (
             <div key={mentor.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer flex flex-col" onClick={() => handleMentorSelect(mentor)}>
                <div className="flex items-start justify-between mb-4">
                   <img src={mentor.image} alt={mentor.name} className="w-16 h-16 rounded-full object-cover" />
                   <div className="flex items-center bg-yellow-50 text-yellow-700 px-2 py-1 rounded text-xs font-bold">
                      <Star size={12} className="fill-yellow-500 text-yellow-500 mr-1" />
                      {mentor.rating}
                   </div>
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{mentor.name}</h3>
                <p className="text-sm text-slate-500 mb-4 h-10">{mentor.title}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                   {mentor.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] rounded uppercase font-semibold">{tag}</span>
                   ))}
                </div>
                <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                   <div className="text-sm font-semibold text-slate-900">₹{mentor.price}<span className="text-slate-400 font-normal">/session</span></div>
                   <button className="text-indigo-600 text-sm font-medium hover:underline">View Profile</button>
                </div>
             </div>
           ))}
        </div>
      </div>
    );
  }

  if (step === 'profile' && selectedMentor) {
     return (
        <div className="max-w-3xl mx-auto animate-in fade-in duration-300">
          <button onClick={() => setStep('mentors')} className="flex items-center text-sm text-slate-500 hover:text-slate-900 mb-6">
             <ChevronLeft size={16} className="mr-1" /> Back to list
          </button>
          
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
             <div className="bg-indigo-600 h-32"></div>
             <div className="px-8 pb-8">
                <div className="flex justify-between items-end -mt-12 mb-6">
                   <img src={selectedMentor.image} alt={selectedMentor.name} className="w-24 h-24 rounded-full border-4 border-white" />
                   <Button onClick={handleBook}>Book Session (₹{selectedMentor.price})</Button>
                </div>
                
                <h1 className="text-3xl font-bold text-slate-900 mb-1">{selectedMentor.name}</h1>
                <p className="text-slate-600 text-lg mb-6">{selectedMentor.title}</p>
                
                <div className="flex space-x-6 text-sm text-slate-500 mb-8 border-b border-slate-100 pb-8">
                   <div className="flex items-center"><Star size={16} className="mr-1 text-yellow-500" /> {selectedMentor.rating} Rating</div>
                   <div className="flex items-center"><CheckCircle2 size={16} className="mr-1 text-green-500" /> {selectedMentor.sessions} Sessions</div>
                   <div className="flex items-center"><Clock size={16} className="mr-1 text-blue-500" /> 45 min session</div>
                </div>

                <div className="space-y-6">
                   <section>
                      <h3 className="font-bold text-slate-900 mb-2">About me</h3>
                      <p className="text-slate-600 leading-relaxed">
                         I've spent the last 5 years building scalable distributed systems. 
                         I love helping students bridge the gap between academic theory and real-world engineering.
                         My sessions focus on architectural clarity and unblocking complex logic errors.
                      </p>
                   </section>
                   <section>
                      <h3 className="font-bold text-slate-900 mb-2">Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                         {selectedMentor.tags.concat(['System Design', 'Debugging', 'Career Advice']).map((tag: string) => (
                            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">{tag}</span>
                         ))}
                      </div>
                   </section>
                </div>
             </div>
          </div>
        </div>
     )
  }

  if (step === 'confirm') {
      return (
          <div className="h-full flex flex-col items-center justify-center animate-in zoom-in duration-300 py-20">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Session Requested!</h2>
              <p className="text-slate-500 text-center max-w-md">
                  Your request has been sent to {selectedMentor?.name}. <br/>
                  You'll be notified once they accept.
              </p>
          </div>
      )
  }

  return null;
};

export default BookSession;