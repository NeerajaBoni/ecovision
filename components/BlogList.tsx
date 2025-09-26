import React from 'react';
import { Article } from '../types';
import Card from './common/Card';

interface BlogListProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

const BlogList: React.FC<BlogListProps> = ({ articles, onSelectArticle }) => {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            EcoAction Blog & News
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Stay informed and inspired with our latest articles on environmental action and sustainability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <Card key={article.id} className="flex flex-col cursor-pointer transform hover:-translate-y-2 transition-transform duration-300" onClick={() => onSelectArticle(article)}>
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover"/>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-800">{article.title}</h3>
                <p className="mt-2 text-sm text-gray-500">By {article.author} on {new Date(article.date.replace(/-/g, '/')).toLocaleDateString()}</p>
                <p className="mt-4 text-gray-600 flex-grow">{article.summary}</p>
                <div className="mt-4 pt-4">
                   <span className="font-semibold text-green-600 hover:text-green-700">Read More &rarr;</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
