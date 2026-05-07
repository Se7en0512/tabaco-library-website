'use client';

import { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

interface MarqueeItem {
  id: number;
  name: string;
  company: string;
  videoUrl: string;
  thumbnail: string;
  quote: string;
}

interface TestimonialMarqueeProps {
  items: MarqueeItem[];
  onVideoClick: (videoUrl: string) => void;
}

export default function TestimonialMarquee({ items, onVideoClick }: TestimonialMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId: number;
    let position = 0;
    const speed = 0.3; // Slower speed

    const animate = () => {
      position -= speed;
      if (position <= -marquee.scrollWidth / 2) {
        position = 0;
      }
      marquee.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden w-full bg-gradient-to-r from-slate-50 to-blue-50 py-12">
      {/* Gradient overlays for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-50 to-transparent z-10"></div>

      <div
        ref={marqueeRef}
        className="flex gap-6 px-8"
        style={{ width: '200%' }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 w-80 group cursor-pointer"
            onClick={() => onVideoClick(item.videoUrl)}
          >
            <div className="glass rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <img
                  src={item.thumbnail}
                  alt={`${item.name} video`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = `https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop`;
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                    <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  2:34
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--primary)] transition-colors duration-300 pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}