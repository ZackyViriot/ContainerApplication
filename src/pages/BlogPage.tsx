import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { blogPosts } from '../data/blogPosts';
import { formatDate } from '../utils/formatters';

export const BlogPage: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog & Resources
          </h1>
          <p className="text-xl text-gray-700">
            Tips, guides, and industry insights to help you with your waste management needs
          </p>
        </div>
      </Section>

      {/* Blog Posts Grid */}
      <Section background="white" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col" padding="none" hover>
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(post.date)}
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <Button variant="outline" className="w-full">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="slate" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Have Questions?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Our team is here to help you choose the right dumpster for your project.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
};
