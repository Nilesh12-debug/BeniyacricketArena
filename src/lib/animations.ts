import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Beniya Cricket Arena - GSAP Animations Module
 * Adheres strictly to official GSAP best practices:
 * - Uses gsap.matchMedia() for responsive & prefers-reduced-motion
 * - Uses transform aliases (x, y, scale, rotation, autoAlpha)
 * - Coordinated entrance timelines and ScrollTrigger batches
 * - Interactive counters and 3D card tilt micro-interactions
 */

export function initAnimations(): () => void {
  if (typeof window === 'undefined') return () => {};

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Set project-wide defaults
  gsap.defaults({
    duration: 0.6,
    ease: 'power2.out',
  });

  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: '(min-width: 1024px)',
      isTabletOrMobile: '(max-width: 1023px)',
      reduceMotion: '(prefers-reduced-motion: reduce)',
    },
    (context) => {
      const { reduceMotion, isDesktop } = context.conditions as {
        reduceMotion: boolean;
        isDesktop: boolean;
        isTabletOrMobile: boolean;
      };

      if (reduceMotion) {
        // If user prefers reduced motion, reveal everything immediately with 0 duration
        gsap.set(
          [
            '.gsap-reveal',
            '.gsap-card',
            '.hero-animate-eyebrow',
            '.hero-animate-h1',
            '.hero-animate-desc',
            '.hero-animate-cta',
            '.hero-animate-specs',
            '.hero-scroll-cue',
          ],
          { autoAlpha: 1, y: 0, scale: 1 }
        );
        return;
      }

      // ==========================================
      // 1. TOP SCROLL PROGRESS BAR (ScrollTrigger)
      // ==========================================
      const progressBar = document.getElementById('scroll-progress-bar');
      if (progressBar) {
        gsap.to(progressBar, {
          width: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.15,
          },
        });
      }

      // ==========================================
      // 2. HERO ENTRANCE ORCHESTRATION (Timeline)
      // ==========================================
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Set initial states
        gsap.set('.hero-animate-eyebrow', { autoAlpha: 0, y: 22, scale: 0.94 });
        gsap.set('.hero-animate-h1', { autoAlpha: 0, y: 35 });
        gsap.set('.hero-animate-desc', { autoAlpha: 0, y: 24 });
        gsap.set('.hero-animate-cta', { autoAlpha: 0, y: 20 });
        gsap.set('.hero-animate-specs', { autoAlpha: 0, y: 18 });
        gsap.set('.hero-scroll-cue', { autoAlpha: 0, y: -12 });

        heroTl
          .to('.hero-animate-eyebrow', {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: 'back.out(1.6)',
          }, 0.1)
          .to('.hero-animate-h1', {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          }, 0.25)
          .to('.hero-animate-desc', {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
          }, 0.45)
          .to('.hero-animate-cta', {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: 'power2.out',
          }, 0.6)
          .to('.hero-animate-specs', {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          }, 0.75)
          .to('.hero-scroll-cue', {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          }, 0.9);

        // Hero Parallax on background image
        const heroBg = heroSection.querySelector('.hero-bg-img');
        if (heroBg) {
          gsap.to(heroBg, {
            yPercent: 14,
            scale: 1.06,
            ease: 'none',
            scrollTrigger: {
              trigger: heroSection,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      }

      // ==========================================
      // 3. SECTION HEADERS & GENERAL REVEALS (Batch)
      // ==========================================
      gsap.set('.gsap-reveal', { autoAlpha: 0, y: 32 });

      ScrollTrigger.batch('.gsap-reveal', {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        },
      });

      // ==========================================
      // 4. GRID CARDS STAGGERED REVEALS (Batch)
      // ==========================================
      gsap.set('.gsap-card', { autoAlpha: 0, y: 28, scale: 0.97 });

      ScrollTrigger.batch('.gsap-card', {
        start: 'top 90%',
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.1,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        },
      });

      // ==========================================
      // 5. ANIMATED NUMERIC COUNTERS
      // ==========================================
      const counterElements = document.querySelectorAll<HTMLElement>('.gsap-counter');
      counterElements.forEach((el) => {
        const targetVal = parseFloat(el.getAttribute('data-count-to') || '0');
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);

        if (!targetVal) return;

        const counterObj = { val: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          once: true,
          onEnter: () => {
            gsap.to(counterObj, {
              val: targetVal,
              duration: 1.6,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = `${prefix}${counterObj.val.toFixed(decimals)}${suffix}`;
              },
            });
          },
        });
      });

      // ==========================================
      // 6. 3D TILT MICRO-INTERACTION (Desktop Only)
      // ==========================================
      if (isDesktop) {
        const tiltCards = document.querySelectorAll<HTMLElement>('.gsap-tilt');
        tiltCards.forEach((card) => {
          const xTo = gsap.quickTo(card, 'rotationY', { duration: 0.35, ease: 'power2.out' });
          const yTo = gsap.quickTo(card, 'rotationX', { duration: 0.35, ease: 'power2.out' });
          const scaleTo = gsap.quickTo(card, 'scale', { duration: 0.35, ease: 'power2.out' });

          const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
            const rotateY = ((x - centerX) / centerX) * 6;

            xTo(rotateY);
            yTo(rotateX);
            scaleTo(1.02);
          };

          const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
            scaleTo(1);
          };

          card.addEventListener('mousemove', handleMouseMove);
          card.addEventListener('mouseleave', handleMouseLeave);
        });
      }

      // ==========================================
      // 7. PLAY AFTER DARK GLOW AMBIENCE PARALLAX
      // ==========================================
      const darkSection = document.querySelector('.texture-dark-net');
      if (darkSection) {
        const glowLights = darkSection.querySelectorAll('.ambient-glow');
        glowLights.forEach((glow, idx) => {
          gsap.to(glow, {
            y: idx % 2 === 0 ? -40 : 40,
            scale: 1.15,
            opacity: 0.28,
            ease: 'none',
            scrollTrigger: {
              trigger: darkSection,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          });
        });
      }

      // Refresh ScrollTrigger after initial mount calculation
      ScrollTrigger.refresh();
    }
  );

  return () => {
    mm.revert();
  };
}
