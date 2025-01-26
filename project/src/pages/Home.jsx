import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });

      gsap.from('.hero-image', {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
      });

      // Animate background
      gsap.to('.animated-bg', {
        backgroundPosition: '100% 50%',
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="animated-bg w-full h-full"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: '0% 50%',
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="hero-text text-5xl md:text-7xl font-bold mb-6">
            Transforming Urban Landscapes
          </h1>
          <p className="hero-text text-xl md:text-2xl mb-8">
            Creating impactful outdoor advertising experiences that capture attention and drive results
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hero-text bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Explore Our Work
          </motion.button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae',
              'https://images.unsplash.com/photo-1587614297882-0954399bf8e8',
              'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc'
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={`${image}?auto=format&fit=crop&q=80`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Project Title</h3>
                    <p className="text-gray-300">Location • 2024</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;