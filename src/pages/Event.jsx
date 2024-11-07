import  { useState } from 'react';
import { Calendar, HeartHandshake, Monitor, BookOpen, Mountain, Gamepad } from 'lucide-react';
import { GrWorkshop } from "react-icons/gr";
import { IoGameControllerOutline } from "react-icons/io5";

import Navbar from '../components/event/Navbar';
import EventCard from '../components/event/EventCard';

const categories = [
  { id: 'all', label: 'All Events', icon: Calendar },
  { id: 'education', label: 'Education', icon: BookOpen },
  { id: 'charity', label: 'Charity', icon: HeartHandshake },
  { id: 'informatique', label: 'Informatique', icon: Monitor },
  { id: 'workshops', label: 'Workshops', icon: GrWorkshop },
  { id: 'hiking', label: 'Hiking', icon: Mountain },
  { id: 'games', label: 'Games', icon: IoGameControllerOutline },
];

const events = [
  {
    id: 1,
    title: 'BAC 2024 Révision',
    date: 'Mar 26',
    category: 'education',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    description: 'Join our intensive BAC revision sessions to prepare for your exams!'
  },
  {
    id: 2,
    title: 'Coding Workshop 2024',
    date: 'Apr 15',
    category: 'informatique',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    description: 'Learn the latest web development technologies in this hands-on workshop.'
  },
  {
    id: 3,
    title: 'Charity Run',
    date: 'May 02',
    category: 'charity',
    image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&q=80&w=800',
    description: 'Run for a cause! Join our annual charity marathon.'
  },
];

function Event() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
<Navbar 
  categories={categories}
  selectedCategory={selectedCategory}
  onSelectCategory={setSelectedCategory}
/>

      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Event;