'use client';

import React, {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type TouchEvent,
  type WheelEvent,
} from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  className?: string;
  children?: ReactNode;
}

export const ScrollExpandMedia = ({
  mediaType = 'image',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title = "YOUR GAME. YOUR ARENA.",
  date = "BENIYA BAGH · VARANASI",
  scrollToExpand = "SCROLL DOWN TO EXPAND ARENA ↓",
  textBlend = false,
  className,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        setShowContent(false);
        e.preventDefault();
        setScrollProgress((prev) => Math.max(0, prev - 0.15));
      } else if (!mediaFullyExpanded && window.scrollY <= 10) {
        if (e.deltaY > 0) {
          e.preventDefault();
          const delta = e.deltaY * 0.0015;
          setScrollProgress((prev) => {
            const next = Math.min(1, prev + delta);
            if (next >= 0.95) {
              setMediaFullyExpanded(true);
              setShowContent(true);
              return 1;
            }
            if (next >= 0.7) setShowContent(true);
            return next;
          });
        } else if (e.deltaY < 0 && scrollProgress > 0) {
          e.preventDefault();
          const delta = Math.abs(e.deltaY) * 0.0015;
          setScrollProgress((prev) => {
            const next = Math.max(0, prev - delta);
            if (next < 0.7) setShowContent(false);
            return next;
          });
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -25 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        setShowContent(false);
        setScrollProgress(0.5);
      } else if (!mediaFullyExpanded && window.scrollY <= 10) {
        if (deltaY > 0) {
          const factor = 0.006;
          const next = Math.min(1, scrollProgress + deltaY * factor);
          setScrollProgress(next);
          if (next >= 0.95) {
            setMediaFullyExpanded(true);
            setShowContent(true);
          } else if (next >= 0.7) {
            setShowContent(true);
          }
        } else if (deltaY < 0 && scrollProgress > 0) {
          const factor = 0.008;
          const next = Math.max(0, scrollProgress + deltaY * factor);
          setScrollProgress(next);
          if (next < 0.7) setShowContent(false);
        }
        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    window.addEventListener('wheel', handleWheel as unknown as EventListener, { passive: false });
    window.addEventListener('touchstart', handleTouchStart as unknown as EventListener, { passive: true });
    window.addEventListener('touchmove', handleTouchMove as unknown as EventListener, { passive: false });
    window.addEventListener('touchend', handleTouchEnd as unknown as EventListener);

    return () => {
      window.removeEventListener('wheel', handleWheel as unknown as EventListener);
      window.removeEventListener('touchstart', handleTouchStart as unknown as EventListener);
      window.removeEventListener('touchmove', handleTouchMove as unknown as EventListener);
      window.removeEventListener('touchend', handleTouchEnd as unknown as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 320 + scrollProgress * (isMobileState ? 650 : 1300);
  const mediaHeight = 380 + scrollProgress * (isMobileState ? 320 : 520);
  const textTranslateX = scrollProgress * (isMobileState ? 160 : 140);

  const words = title ? title.split(' ') : ['YOUR', 'GAME.', 'YOUR', 'ARENA.'];
  const firstPart = words.slice(0, 2).join(' ');
  const secondPart = words.slice(2).join(' ');

  return (
    <div
      ref={sectionRef}
      className={cn('relative transition-colors duration-700 ease-in-out overflow-x-hidden bg-[#080808]', className)}
    >
      <section className='relative flex flex-col items-center justify-start min-h-[100svh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100svh]'>
          
          {/* Background Ambient Layer */}
          <motion.div
            className='absolute inset-0 z-0 h-full w-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress * 0.75 }}
            transition={{ duration: 0.15 }}
          >
            <img
              src={bgImageSrc}
              alt='Atmospheric stadium background'
              className='w-screen h-screen object-cover object-center filter brightness-[0.32] contrast-[1.15]'
              loading="eager"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-[#080808]/80' />
          </motion.div>

          {/* Center Stage Container */}
          <div className='container mx-auto flex flex-col items-center justify-start relative z-10 w-full px-4 sm:px-6'>
            <div className='flex flex-col items-center justify-center w-full min-h-[100svh] relative py-12'>
              
              {/* Expanding Media Box */}
              <div
                className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl overflow-hidden border border-white/15'
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '96vw',
                  maxHeight: '88vh',
                  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.7)',
                  transition: 'width 0.15s ease-out, height 0.15s ease-out',
                }}
              >
                {mediaType === 'video' ? (
                  <div className='relative w-full h-full pointer-events-none'>
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload='auto'
                      className='w-full h-full object-cover'
                      controls={false}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-black/30' />
                  </div>
                ) : (
                  <div className='relative w-full h-full'>
                    <img
                      src={mediaSrc}
                      alt={title || 'Beniya Cricket Arena'}
                      className='w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1]'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-[#080808]/85 via-transparent to-black/30' />
                  </div>
                )}

                {/* Tag & Scroll instruction on media */}
                <div className='absolute bottom-6 inset-x-6 flex flex-col items-center text-center z-10 space-y-1'>
                  {date && (
                    <span
                      className='text-xs sm:text-sm font-mono font-bold text-[#C7FF00] uppercase tracking-[0.25em]'
                      style={{ transform: `translateX(-${textTranslateX * 0.4}vw)` }}
                    >
                      {date}
                    </span>
                  )}
                  {scrollToExpand && !showContent && (
                    <p
                      className='text-[11px] font-mono text-[#8E8E93] uppercase tracking-widest'
                      style={{ transform: `translateX(${textTranslateX * 0.4}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              {/* Huge Split Typography Headlines */}
              <div
                className={`flex items-center justify-center text-center gap-2 sm:gap-4 w-full relative z-10 flex-col select-none pointer-events-none ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >
                <motion.h1
                  className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase font-headline tracking-tighter text-[#F5F5F2]'
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstPart}
                </motion.h1>
                <motion.h1
                  className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase font-headline tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F2] to-[#C7FF00]'
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {secondPart}
                </motion.h1>
              </div>

              {/* Expanded Content Reveal (CTAs & Information) */}
              <motion.div
                className='relative z-20 flex flex-col items-center text-center max-w-2xl mx-auto px-4 mt-8'
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: showContent ? 1 : 0,
                  y: showContent ? 0 : 30,
                  pointerEvents: showContent ? 'auto' : 'none'
                }}
                transition={{ duration: 0.4 }}
              >
                {children}
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
