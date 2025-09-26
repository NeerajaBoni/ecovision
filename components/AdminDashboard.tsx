import React from 'react';
import { User, Event } from '../types';
import Card from './common/Card';
import Button from './common/Button';

interface AdminDashboardProps {
    user: User;
    events: Event[];
    onEdit: (event: Event) => void;
    onDelete: (eventId: number) => void;
    onSelectEvent: (event: Event) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, events, onEdit, onDelete, onSelectEvent }) => {
    return (
        <div className="py-16 sm:py-24 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Admin Dashboard
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Manage your created events here, {user.name}.
                    </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Created Events</h3>
                {events.length > 0 ? (
                    <div className="space-y-6">
                        {events.map(event => (
                           <Card key={event.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="flex-grow cursor-pointer" onClick={() => onSelectEvent(event)}>
                                    <h4 className="font-bold text-xl text-gray-800">{event.title}</h4>
                                    <p className="text-gray-600 text-sm mt-1">{event.date} - {event.location}</p>
                                    <p className="text-sm text-gray-500 mt-2">{event.volunteers.length} / {event.volunteersNeeded} volunteers</p>
                                </div>
                                <div className="flex-shrink-0 flex items-center gap-3">
                                    <Button onClick={() => onEdit(event)} variant="outline" className="py-2 px-4">Edit</Button>
                                    <Button onClick={() => onDelete(event.id)} className="bg-red-600 hover:bg-red-700 py-2 px-4">Delete</Button>
                                </div>
                           </Card>
                        ))}
                    </div>
                ) : (
                    <div className="text-center bg-white p-8 rounded-lg shadow-md">
                        <p className="text-gray-600">You haven't created any events yet.</p>
                         <p className="mt-2 text-green-600 font-semibold">Ready to start one?</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
