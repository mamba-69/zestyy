"use client";

import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Home Chef",
      location: "Mumbai",
      quote:
        "ZestyRed ketchup has become a staple in my kitchen. The rich tomato flavor enhances every dish I prepare, from simple sandwiches to elaborate curries. My family can definitely taste the difference!",
      imagePlaceholder: "Priya Sharma",
    },
    {
      id: 2,
      name: "Chef Rajesh Kumar",
      role: "Executive Chef",
      location: "Delhi",
      quote:
        "As a professional chef, I&apos;m very particular about the ingredients I use. ZestyRed ketchup stands out with its authentic tomato flavor and perfect consistency. It&apos;s now the only ketchup we use in our restaurant.",
      imagePlaceholder: "Chef Rajesh",
    },
    {
      id: 3,
      name: "Anita Desai",
      role: "Mother of Three",
      location: "Bangalore",
      quote:
        "My kids are very picky eaters, but they love ZestyRed ketchup! I feel good knowing they&apos;re getting a quality product without artificial preservatives. The squeeze pouch is so convenient for lunchboxes too.",
      imagePlaceholder: "Anita Desai",
    },
    {
      id: 4,
      name: "Vikram Patel",
      role: "Restaurant Owner",
      location: "Ahmedabad",
      quote:
        "We&apos;ve been using ZestyRed bulk packs in our restaurant chain for over a year now. The consistent quality and competitive pricing have made it our preferred choice. Our customers often compliment the taste!",
      imagePlaceholder: "Vikram Patel",
    },
    {
      id: 5,
      name: "Meera Reddy",
      role: "Food Blogger",
      location: "Chennai",
      quote:
        "I&apos;ve tested dozens of ketchup brands for my blog, and ZestyRed truly stands out. The balance of sweetness and tanginess is perfect, and I love that I can taste the real tomatoes. Highly recommended!",
      imagePlaceholder: "Meera Reddy",
    },
    {
      id: 6,
      name: "Sunil Mehta",
      role: "Grocery Store Owner",
      location: "Pune",
      quote:
        "ZestyRed is one of our best-selling ketchup brands. Customers specifically ask for it by name, and we&apos;ve seen consistent growth in sales month after month. The company is also great to work with for retailers.",
      imagePlaceholder: "Sunil Mehta",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-display">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our customers have to
            say about ZestyRed ketchup.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                      <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden flex-shrink-0 flex items-center justify-center">
                        {/* Placeholder for testimonial image */}
                        <span className="text-gray-600 text-sm">
                          {testimonial.imagePlaceholder}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-black font-semibold">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600">
                          {testimonial.role}, {testimonial.location}
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-gray-600 italic">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors hidden md:block"
            onClick={() => {
              setActiveIndex(
                (current) =>
                  (current - 1 + testimonials.length) % testimonials.length
              );
              setAutoplay(false);
            }}
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors hidden md:block"
            onClick={() => {
              setActiveIndex((current) => (current + 1) % testimonials.length);
              setAutoplay(false);
            }}
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl text-black font-semibold mb-4 font-display">
            Ready to experience the ZestyRed difference?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made ZestyRed their
            preferred ketchup brand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/products" className="btn-primary">
              Explore Products
            </a>
            <a href="/contact" className="btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
