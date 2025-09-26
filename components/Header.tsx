import React from 'react';
import { View, User } from '../types';
import LeafIcon from './icons/LeafIcon';

interface HeaderProps {
  navigateTo: (view: View) => void;
  currentUser: User;
}

const NavLink: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300"
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ navigateTo, currentUser }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigateTo('home')}
          >
            <LeafIcon className="h-8 w-8 text-green-600" />
            <span className="ml-3 text-2xl font-bold text-gray-800 tracking-tight">
              EcoAction
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink onClick={() => navigateTo('home')}>Home</NavLink>
            <NavLink onClick={() => navigateTo('eventList')}>Browse Events</NavLink>
            
            <NavLink onClick={() => navigateTo('createEvent')}>Create Event</NavLink>

            {currentUser.role === 'admin' && (
              <NavLink onClick={() => navigateTo('adminDashboard')}>Admin Dashboard</NavLink>
            )}

            {currentUser.role === 'user' && (
              <NavLink onClick={() => navigateTo('userDashboard')}>My Dashboard</NavLink>
            )}

            <NavLink onClick={() => navigateTo('blog')}>Blog</NavLink>
          </nav>
          <div className="hidden md:flex items-center bg-yellow-100 border border-yellow-200 rounded-full px-4 py-2">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-bold text-yellow-800 text-sm">{currentUser.points} Points</span>
          </div>
           <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;