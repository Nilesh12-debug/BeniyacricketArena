'use client';

import React, { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  video: {
    src: 'https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYuZ5R8ahEEZ4aQK56LizRdfBSqeDMsmUIrJN1',
    poster:
      'https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg',
    background:
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop',
    title: 'YOUR GAME. YOUR ARENA.',
    date: 'BENIYA BAGH · VARANASI',
    scrollToExpand: 'Scroll to expand arena experience',
    about: {
      overview:
        'Experience Varanasi premier floodlit cricket turf at Beniya Bagh. High enclosure netting, professional playing surface, and night floodlights.',
      conclusion:
        'Call or WhatsApp directly to check slot availability and lock in your match.',
    },
  },
  image: {
    src: '/images/night-cricket-turf.jpg',
    background: '/images/night-cricket-turf.jpg',
    title: 'PLAY AFTER DARK.',
    date: 'VARANASI NIGHT CRICKET',
    scrollToExpand: 'Scroll to expand',
    about: {
      overview:
        'Built for competitive evening matches and late-night derbies under high-lux floodlights in central Varanasi.',
      conclusion:
        'Contact Beniya Cricket Arena directly on WhatsApp to book your game.',
    },
  },
};

const MediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div className='max-w-4xl mx-auto text-center space-y-6'>
      <h3 className='text-3xl sm:text-4xl font-extrabold uppercase font-headline text-white'>
        BENIYA CRICKET ARENA
      </h3>
      <p className='text-lg text-[#8E8E93] font-light leading-relaxed'>
        {currentMedia.about.overview}
      </p>
      <div className='pt-4'>
        <a
          href="https://wa.me/919876543210?text=Hi%20Beniya%20Cricket%20Arena,%20I%20would%20like%20to%20know%20the%20turf%20availability%20and%20price%20for%20my%20game."
          target="_blank"
          rel="noopener noreferrer"
          className='inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C7FF00] text-[#080808] font-extrabold text-xs uppercase tracking-widest hover:bg-[#D4FF33] transition-all'
        >
          <span>WHATSAPP TO BOOK →</span>
        </a>
      </div>
    </div>
  );
};

export default function ScrollExpansionDemo() {
  const [mediaType, setMediaType] = useState<'video' | 'image'>('image');
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [mediaType]);

  return (
    <div className='min-h-screen bg-[#080808] relative'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
}
