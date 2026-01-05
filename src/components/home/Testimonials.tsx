import React from 'react';
import { Quote } from 'lucide-react';
import { Section } from '../shared/Section';
import { Card } from '../shared/Card';

const testimonials = [
  {
    name: 'Architectural Habitat of San Antonio, Inc.',
    role: 'Commercial Construction',
    content: "We've been using their services for over 5 years now. The team is always responsive, delivers on time, and helps us choose the right container sizes for our projects. Their attention to detail and customer service is unmatched.",
    rating: 5,
  },
  {
    name: 'Re-Bath of San Antonio',
    role: 'Home Renovation',
    content: 'As a bathroom remodeling company, we need reliable waste disposal partners. Their same-day delivery and quick swap-out service keeps our projects on schedule. Highly recommend for any contractor in the San Antonio area.',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <Section background="white" padding="xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          What Our Customers Say
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Don't just take our word for it - hear from our satisfied clients
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} hover padding="lg">
            <div className="mb-6">
              <Quote className="h-12 w-12 text-emerald-500" />
            </div>
            <p className="text-slate-700 mb-8 leading-relaxed text-lg italic">"{testimonial.content}"</p>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-base">{testimonial.name}</h4>
                <p className="text-sm text-slate-500 font-medium">{testimonial.role}</p>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-emerald-500 text-xl">★</span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
