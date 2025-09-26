import React, { useState, useMemo } from 'react';
import { Event, EventCategory } from '../types';
import EventCard from './EventCard';

interface EventListProps {
    events: Event[];
    onSelectEvent: (event: Event) => void;
}

const categories: EventCategory[] = ['Community Clean-Up', 'Tree Planting', 'Recycling Program', 'Conservation'];

const EventList: React.FC<EventListProps> = ({ events, onSelectEvent }) => {
    const [filter, setFilter] = useState<EventCategory | 'All'>('All');

    const filteredEvents = useMemo(() => {
        if (filter === 'All') return events;
        return events.filter(event => event.category === filter);
    }, [events, filter]);

    return (
        <div className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Find an Event
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Browse upcoming events and find an opportunity to contribute in your area.
                    </p>
                </div>

                <div className="flex justify-center flex-wrap gap-2 mb-10">
                    <button onClick={() => setFilter('All')} className={`px-4 py-2 text-sm font-semibold rounded-full ${filter === 'All' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                        All
                    </button>
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 text-sm font-semibold rounded-full ${filter === cat ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                            {cat}
                        </button>
                    ))}
                </div>
                
                {filteredEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredEvents.map(event => (
                            <EventCard key={event.id} event={event} onSelectEvent={onSelectEvent} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">No events found for this category.</p>
                )}

            </div>
        </div>
    );
};

export default EventList;
