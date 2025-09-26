import React from 'react';
import { Article } from '../types';
import Card from './common/Card';
import Button from './common/Button';

interface ArticleDetailsProps {
    article: Article;
    onBack: () => void;
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ article, onBack }) => {
    return (
        <div className="py-16 sm:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <Button onClick={onBack} variant="outline" className="mb-8">
                        &larr; Back to Blog
                    </Button>
                    <Card className="overflow-visible">
                         <img src={article.image} alt={article.title} className="w-full h-64 md:h-96 object-cover rounded-t-xl" />
                         <div className="p-8 md:p-12">
                             <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">{article.title}</h1>
                             <p className="mt-4 text-gray-500">
                                 By <span className="font-semibold text-gray-700">{article.author}</span> | Published on {new Date(article.date.replace(/-/g, '/')).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                             </p>
                             <div className="mt-8 prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                                 {article.content}
                             </div>
                         </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetails;
