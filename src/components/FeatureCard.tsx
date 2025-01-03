import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

export default function FeatureCard({ title, description, image }: FeatureCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}