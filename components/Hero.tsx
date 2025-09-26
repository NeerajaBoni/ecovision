import React from 'react';
import { View, User } from '../types';
import Button from './common/Button';

interface HeroProps {
  navigateTo: (view: View) => void;
  currentUser: User;
}

const Hero: React.FC<HeroProps> = ({ navigateTo, currentUser }) => {
  return (
    <div className="relative bg-green-50">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://picsum.photos/1600/900?nature,community"
          alt="Community working together in nature"
        />
        <div className="absolute inset-0 bg-green-900 opacity-60"></div>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-48 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
          <span className="block">Take Action for</span>
          <span className="block text-green-300">Our Planet</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-green-100">
          Create or join local environmental events. Make a tangible impact, together.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {currentUser.role === 'admin' ? (
             <Button variant="primary" onClick={() => navigateTo('createEvent')}>
                Create an Event
             </Button>
          ) : (
            <Button variant="primary" onClick={() => navigateTo('eventList')}>
                Find an Event
            </Button>
          )}
          <Button variant="outline" className="border-green-300 text-green-200 hover:bg-green-800/50" onClick={() => alert('Learn more page coming soon!')}>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
