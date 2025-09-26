import React, { useState } from 'react';
import { User, Event, View } from '../types';
import Card from './common/Card';
import Button from './common/Button';
import Badge from './Badge';
import TreeIcon from './icons/TreeIcon';
import RecycleIcon from './icons/RecycleIcon';
import CommunityIcon from './icons/CommunityIcon';
import WaterDropIcon from './icons/WaterDropIcon';

interface UserDashboardProps {
  user: User;
  allEvents: Event[];
  onSelectEvent: (event: Event) => void;
  navigateTo: (view: 'eventList') => void;
  onProofUpload: (eventId: number, report: string, photo: File) => void;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ user, allEvents, onSelectEvent, navigateTo, onProofUpload }) => {
  const now = new Date();
  
  const upcomingEvents = allEvents.filter(event =>
    user.registeredEventIds.includes(event.id) && new Date(event.date) >= now
  );

  const completedEvents = allEvents.filter(event =>
    user.registeredEventIds.includes(event.id) && new Date(event.date) < now
  );

  const EventRow: React.FC<{event: Event}> = ({ event }) => (
    <Card 
      onClick={() => onSelectEvent(event)} 
      className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 cursor-pointer hover:bg-gray-50"
    >
      <div className="flex-grow">
        <h4 className="font-bold text-lg text-gray-800">{event.title}</h4>
        <p className="text-gray-600 text-sm mt-1">{event.date} - {event.location}</p>
      </div>
      <div className="flex-shrink-0">
        <span className="text-green-600 font-semibold">&rarr; View Details</span>
      </div>
    </Card>
  );

  const CompletedEventRow: React.FC<{event: Event}> = ({ event }) => {
    const [showForm, setShowForm] = useState(false);
    const [report, setReport] = useState('');
    const [photo, setPhoto] = useState<File | null>(null);

    const isProofSubmitted = user.proofSubmittedEventIds.includes(event.id);

    const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (report && photo) {
        onProofUpload(event.id, report, photo);
        setShowForm(false);
      } else {
        alert('Please write a report and select a photo.');
      }
    };

    return (
      <Card className="p-4 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-grow cursor-pointer" onClick={() => onSelectEvent(event)}>
            <h4 className="font-bold text-lg text-gray-800">{event.title}</h4>
            <p className="text-gray-600 text-sm mt-1">{event.date} - {event.location}</p>
          </div>
          <div className="flex-shrink-0">
            {isProofSubmitted ? (
              <span className="font-semibold text-green-600 px-4 py-2 bg-green-100 rounded-full">Proof Submitted</span>
            ) : (
              <Button onClick={() => setShowForm(!showForm)} variant="secondary">
                {showForm ? 'Cancel' : 'Upload Proof & Report'}
              </Button>
            )}
          </div>
        </div>
        {showForm && !isProofSubmitted && (
          <form onSubmit={handleFormSubmit} className="mt-4 border-t pt-4 space-y-4">
            <div>
              <label htmlFor={`report-${event.id}`} className="block text-sm font-medium text-gray-700">Brief Report</label>
              <textarea
                id={`report-${event.id}`}
                rows={3}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Describe your participation and the impact made."
                value={report}
                onChange={(e) => setReport(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor={`photo-${event.id}`} className="block text-sm font-medium text-gray-700">Upload Photo Proof</label>
              <p className="text-xs text-gray-500 mb-2">On mobile, this will open your camera directly.</p>
              <input
                type="file"
                id={`photo-${event.id}`}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                accept="image/*"
                capture="environment"
                onChange={(e) => e.target.files && setPhoto(e.target.files[0])}
                required
              />
            </div>
            <div className="text-right">
              <Button type="submit">Submit Proof</Button>
            </div>
          </form>
        )}
      </Card>
    );
  };

  return (
    <div className="py-16 sm:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Welcome, {user.name}!
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Here's a summary of your eco-actions and impact.
          </p>
          <div className="mt-6 inline-flex items-center bg-yellow-100 border border-yellow-200 rounded-full px-6 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-bold text-yellow-800 text-xl">{user.points} Points</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Upcoming Events</h3>
            {upcomingEvents.length > 0 ? (
              <div className="space-y-4">
                {upcomingEvents.map(event => <EventRow key={event.id} event={event} />)}
              </div>
            ) : (
              <div className="text-center bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-600">You're not signed up for any upcoming events.</p>
                <Button onClick={() => navigateTo('eventList')} className="mt-4">Find an Event</Button>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Badges</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Badge name="First Step" description="Completed your first event." icon={<CommunityIcon className="h-6 w-6"/>} />
              <Badge name="Tree Planter" description="Helped plant new trees." icon={<TreeIcon className="h-6 w-6"/>} />
              <Badge name="Eco-Warrior" description="Earned over 100 points." icon={<WaterDropIcon className="h-6 w-6"/>} />
              <Badge name="Recycling Champion" description="Participated in a recycling drive." icon={<RecycleIcon className="h-6 w-6"/>} />
            </div>
          </div>
        </div>

        <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Completed Events</h3>
             {completedEvents.length > 0 ? (
              <div className="space-y-4">
                {completedEvents.map(event => <CompletedEventRow key={event.id} event={event} />)}
              </div>
            ) : (
              <div className="text-center bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-600">You haven't completed any events yet. Join one to start making an impact!</p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;