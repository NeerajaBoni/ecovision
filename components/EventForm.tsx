import React, { useState } from 'react';
import { Event, EventCategory } from '../types';
import Button from './common/Button';
import Card from './common/Card';

interface EventFormProps {
    onSubmit: (data: any) => void;
    existingEvent?: Event;
}

const categories: EventCategory[] = ['Community Clean-Up', 'Tree Planting', 'Recycling Program', 'Conservation'];

const EventForm: React.FC<EventFormProps> = ({ onSubmit, existingEvent }) => {
    const [formData, setFormData] = useState({
        title: existingEvent?.title || '',
        description: existingEvent?.description || '',
        category: existingEvent?.category || categories[0],
        date: existingEvent?.date || '',
        time: existingEvent?.time || '',
        location: existingEvent?.location || '',
        volunteersNeeded: existingEvent?.volunteersNeeded || 10,
        pointsValue: existingEvent?.pointsValue || 2,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'volunteersNeeded' || name === 'pointsValue' ? parseInt(value) : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const submissionData = existingEvent ? { ...existingEvent, ...formData } : formData;
        onSubmit(submissionData);
    };

    return (
        <div className="py-16 sm:py-24 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Card className="max-w-3xl mx-auto p-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                        {existingEvent ? 'Edit Event' : 'Create a New Event'}
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Event Title</label>
                            <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"/>
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea name="description" id="description" value={formData.description} onChange={handleChange} rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"></textarea>
                        </div>
                         <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                            <select name="category" id="category" value={formData.category} onChange={handleChange} required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
                                {categories.map(cat => <option key={cat}>{cat}</option>)}
                            </select>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                                <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
                            </div>
                             <div>
                                <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
                                <input type="text" name="time" id="time" placeholder="e.g., 09:00 AM" value={formData.time} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                            <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="volunteersNeeded" className="block text-sm font-medium text-gray-700">Volunteers Needed</label>
                                <input type="number" name="volunteersNeeded" id="volunteersNeeded" value={formData.volunteersNeeded} onChange={handleChange} required min="1" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
                            </div>
                            <div>
                                <label htmlFor="pointsValue" className="block text-sm font-medium text-gray-700">Points Value</label>
                                <input type="number" name="pointsValue" id="pointsValue" value={formData.pointsValue} onChange={handleChange} required min="0" max="3" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
                            </div>
                        </div>
                        <Button type="submit" variant="primary" className="w-full">
                            {existingEvent ? 'Update Event' : 'Create Event'}
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default EventForm;