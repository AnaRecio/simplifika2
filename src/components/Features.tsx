import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: 'Modern Design',
    description: 'Clean and contemporary aesthetics that catch the eye',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Responsive',
    description: 'Perfectly adapted to any screen size or device',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Fast Loading',
    description: 'Optimized performance for the best user experience',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}