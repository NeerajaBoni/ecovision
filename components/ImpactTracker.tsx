import React from 'react';
import { ImpactStats } from '../types';
import { Leaf, Users, Trash2 } from 'lucide-react'; // Placeholder, will use SVG icons

const StatCard: React.FC<{ icon: React.ReactNode, value: number, label: string }> = ({ icon, value, label }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
        <div className="bg-green-100 p-3 rounded-full">
            {icon}
        </div>
        <div>
            <p className="text-3xl font-bold text-gray-800">{value.toLocaleString()}</p>
            <p className="text-gray-600">{label}</p>
        </div>
    </div>
);


const ImpactTracker: React.FC<{ stats: ImpactStats }> = ({ stats }) => {
    return (
        <div className="bg-green-50 py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Our Collective Impact
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Together, our small actions create massive change. Here's what our community has achieved.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <StatCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
                        value={stats.eventsCreated}
                        label="Events Created"
                    />
                     <StatCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>}
                        value={stats.totalVolunteers}
                        label="Total Volunteers"
                    />
                    <StatCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22V10m0-4a4 4 0 110-8 4 4 0 010 8zM12 10a4 4 0 110 8 4 4 0 010-8z" /></svg>}
                        value={stats.treesPlanted}
                        label="Trees Planted"
                    />
                    <StatCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>}
                        value={stats.wasteCollectedKg}
                        label="Waste Collected (kg)"
                    />
                </div>
            </div>
        </div>
    );
};

export default ImpactTracker;
