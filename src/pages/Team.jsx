import React from 'react';

const teamMembers = [
  { name: 'Lyn Bryan', title: 'CEO', image: 'https://picsum.photos/200' },
  { name: 'Lauren Pybus', title: 'VP, Growth & Development', image: 'https://picsum.photos/200' },
  { name: 'Raelene Thomas', title: 'VP, Finance & Operations', image: 'https://picsum.photos/200' },
  { name: 'Mitchell Fawcett', title: 'VP, Strategy', image: 'https://picsum.photos/200' },
  { name: 'Jieun Segal', title: 'VP, Sales & Marketing', image: 'https://picsum.photos/200' },
  { name: 'Darren Maher', title: 'Creative Director', image: 'https://picsum.photos/200' },
  { name: 'Ben Van Exan', title: 'Snr Account Executive', image: 'https://picsum.photos/200' },
  { name: 'John Blown', title: 'Founding Partner', image: 'https://picsum.photos/200' },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200 shadow-sm"
                src={member.image}
                alt={member.name}
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
