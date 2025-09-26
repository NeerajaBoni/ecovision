import React from 'react';
import { Event } from '../types';
import Card from './common/Card';

interface EventCardProps {
    event: Event;
    onSelectEvent: (event: Event) => void;
}

const categoryStyles = {
    'Community Clean-Up': 'bg-blue-100 text-blue-800',
    'Tree Planting': 'bg-green-100 text-green-800',
    'Recycling Program': 'bg-yellow-100 text-yellow-800',
    'Conservation': 'bg-purple-100 text-purple-800',
};

const EventCard: React.FC<EventCardProps> = ({ event, onSelectEvent }) => {
    const spotsLeft = event.volunteersNeeded - event.volunteers.length;
    const progress = (event.volunteers.length / event.volunteersNeeded) * 100;

    return (
        <Card className="flex flex-col cursor-pointer transform hover:-translate-y-2 transition-transform duration-300" onClick={() => onSelectEvent(event)}>
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover"/>
            <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryStyles[event.category]}`}>{event.category}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-800">{event.title}</h3>
                <div className="mt-2 space-y-2 text-sm text-gray-600">
                    <p className="flex items-center"><svg className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> {event.date}</p>
                    <p className="flex items-center"><svg className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> {event.location}</p>
                </div>
                <div className="mt-auto pt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{spotsLeft > 0 ? `${spotsLeft} spots left` : 'Event is full'}</p>
                </div>
            </div>
        </Card>
    );
};

export default EventCard;
