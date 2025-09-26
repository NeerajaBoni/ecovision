import React, { useState } from 'react';
import { Event, User } from '../types';
import Button from './common/Button';
import Card from './common/Card';

interface EventDetailsProps {
    event: Event;
    currentUser: User;
    onRegister: (eventId: number, credentials: { name: string; email: string }) => void;
    onBack: () => void;
}

const categoryStyles = {
    'Community Clean-Up': 'bg-blue-100 text-blue-800 border-blue-300',
    'Tree Planting': 'bg-green-100 text-green-800 border-green-300',
    'Recycling Program': 'bg-yellow-100 text-yellow-800 border-yellow-300',
    'Conservation': 'bg-purple-100 text-purple-800 border-purple-300',
};

const RegistrationModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (credentials: { name: string; email: string }) => void;
  currentUser: User;
  eventName: string;
}> = ({ isOpen, onClose, onSubmit, currentUser, eventName }) => {
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email });
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Register for {eventName}</h2>
        <p className="mb-6 text-gray-600">Please confirm your details to volunteer.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit">Confirm Registration</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const EventDetails: React.FC<EventDetailsProps> = ({ event, currentUser, onRegister, onBack }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const isRegistered = currentUser.registeredEventIds.includes(event.id);
    const isFull = event.volunteers.length >= event.volunteersNeeded;
    const spotsLeft = event.volunteersNeeded - event.volunteers.length;

    const handleRegistrationSubmit = (credentials: { name: string; email: string }) => {
        if (!isRegistered && !isFull) {
            onRegister(event.id, credentials);
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <RegistrationModal 
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSubmit={handleRegistrationSubmit}
              currentUser={currentUser}
              eventName={event.title}
            />
            <div className="py-16 sm:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <Button onClick={onBack} variant="outline" className="mb-8">
                            &larr; Back to Events
                        </Button>
                        <Card className="overflow-visible">
                            <img src={event.image} alt={event.title} className="w-full h-64 md:h-96 object-cover rounded-t-xl" />
                            <div className="p-8 md:p-12">
                                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                                    <div>
                                        <span className={`text-sm font-semibold px-3 py-1.5 rounded-full border ${categoryStyles[event.category]}`}>{event.category}</span>
                                        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">{event.title}</h1>
                                    </div>
                                    <div className="flex-shrink-0 bg-yellow-100 border border-yellow-200 rounded-lg px-4 py-2 text-center">
                                        <span className="font-bold text-yellow-800 text-2xl">{event.pointsValue}</span>
                                        <span className="block text-sm text-yellow-700">Points</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-600">
                                    <p className="flex items-center"><svg className="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> {event.date}</p>
                                    <p className="flex items-center"><svg className="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> {event.time}</p>
                                    <p className="flex items-center col-span-1 md:col-span-2"><svg className="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> {event.location}</p>
                                </div>

                                <div className="mt-8 border-t pt-8">
                                    <h2 className="text-xl font-bold text-gray-800">About this event</h2>
                                    <p className="mt-4 text-gray-700 leading-relaxed whitespace-pre-wrap">{event.description}</p>
                                </div>

                                <div className="mt-8 border-t pt-8">
                                    <h2 className="text-xl font-bold text-gray-800">Volunteers</h2>
                                    <div className="mt-4 flex items-center gap-4">
                                        <div className="w-full bg-gray-200 rounded-full h-4">
                                            <div className="bg-green-600 h-4 rounded-full" style={{ width: `${(event.volunteers.length / event.volunteersNeeded) * 100}%` }}></div>
                                        </div>
                                        <span className="font-semibold text-gray-700">{event.volunteers.length} / {event.volunteersNeeded}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-2">{spotsLeft > 0 ? `${spotsLeft} spots left` : 'Event is full'}</p>
                                </div>

                                <div className="mt-10 text-center">
                                    <Button
                                        onClick={() => setIsModalOpen(true)}
                                        disabled={isRegistered || isFull}
                                        className="w-full sm:w-auto text-lg"
                                    >
                                        {isRegistered ? "You're signed up!" : isFull ? 'Event is Full' : 'Sign Up to Volunteer'}
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventDetails;