import React, { useState, useEffect } from 'react';
import { generateEcoTip } from '../services/geminiService';
import Button from './common/Button';
import Card from './common/Card';
import LeafIcon from './icons/LeafIcon';

const EcoTipGenerator: React.FC = () => {
    const [tip, setTip] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    const fetchTip = async () => {
        setLoading(true);
        const newTip = await generateEcoTip();
        setTip(newTip);
        setLoading(false);
    };

    useEffect(() => {
        fetchTip();
    }, []);

    return (
        <div className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Card className="max-w-3xl mx-auto p-8 text-center bg-green-50 border border-green-200">
                    <LeafIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                        Daily Eco Tip
                    </h2>
                    <div className="mt-6 text-lg text-gray-700 min-h-[6rem] flex items-center justify-center">
                        {loading ? (
                             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                        ) : (
                            <p>"{tip}"</p>
                        )}
                    </div>
                    <Button onClick={fetchTip} disabled={loading} className="mt-8">
                        {loading ? 'Generating...' : 'Get a New Tip'}
                    </Button>
                </Card>
            </div>
        </div>
    );
};

export default EcoTipGenerator;
