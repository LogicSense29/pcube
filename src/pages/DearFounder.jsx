import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, MapPin, Calendar, Users, Clock, ChevronDown } from 'lucide-react';

const GOOGLE_FORM_LINK = 'https://forms.gle/YOUR_FORM_LINK_HERE';

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  purple:   '#6000FF',
  dark:     '#200063',
  red:      '#FF0060',
  yellow:   '#FBFC00',
  blue:     '#002BFF',
  green:    '#11A453',
  cream:    '#FFEB8C',
  white:    '#FFFFFF',
  offWhite: '#F5F4F0',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Countdown ────────────────────────────────────────────────────────────────
function useCountdown(targetDate) {
  const calc = () => {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return time;
}

function CountBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center min-w-0">
      <div
        className="font-black tabular-nums leading-none"
        style={{
          fontSize: 'clamp(2rem, 5.5vw, 3.5rem)',
          color: C.yellow,
          fontFamily: 'Host Grotesk, sans-serif',
          letterSpacing: '-0.03em',
        }}
      >
        {String(value).padStart(2, '0')}
      </div>
      <div className="uppercase tracking-widest mt-2" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem' }}>
        {label}
      </div>
    </div>
  );
}

// ─── Marquee ──────────────────────────────────────────────────────────────────
const MARQUEE_ITEMS = [
  'Business Owners', 'Freelancers', 'Founders', 'Dreamers',
  'Builders', 'Connectors', 'Visionaries', 'Makers',
];

function MarqueeStrip({ reverse = false }) {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden select-none">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8 text-sm font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.35)' }}>
            {item}
            <span style={{ color: C.yellow, fontSize: '0.5rem' }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(32, 0, 99, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <img src="/pcube-new-logo.png" alt="Pcube Studio" className="h-8 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
        <a
          href={GOOGLE_FORM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ background: C.yellow, color: C.dark }}
        >
          Secure Your Spot <ArrowUpRight size={14} />
        </a>
      </div>
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, 140]);
  const targetDate = '2026-12-12T10:00:00';
  const time = useCountdown(targetDate);

  // Shared timing: everything gates off this sequence
  // Beat 1 → label:   0.2s
  // Beat 2 → h1:      0.9s stagger start
  // Beat 3 → rest:    1.5s+

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: C.dark }}
    >
      {/* ── Background radial blooms ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 55% at 15% 60%, rgba(96,0,255,0.28) 0%, transparent 70%),
            radial-gradient(ellipse 45% 40% at 85% 15%, rgba(0,43,255,0.18) 0%, transparent 65%),
            radial-gradient(ellipse 35% 30% at 65% 85%, rgba(255,0,96,0.14) 0%, transparent 60%)
          `,
        }}
      />

      {/* ── Noise grain ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Fine grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Parallax color bar — right edge ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute right-0 top-0 h-[130%] w-[3px] pointer-events-none hidden lg:block"
      >
        <div className="h-full" style={{ background: `linear-gradient(to bottom, ${C.yellow}, ${C.red}, ${C.purple}, transparent)` }} />
      </motion.div>

      {/* ── Large ghost text — background depth layer ── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.0 }}
      >
        <span
          className="font-black whitespace-nowrap"
          style={{
            fontSize: 'clamp(8rem, 22vw, 22rem)',
            letterSpacing: '-0.05em',
            fontFamily: 'Host Grotesk, sans-serif',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.04)',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          FOUNDERS
        </span>
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full px-6 pt-28 pb-10">

        {/* BEAT 1 — Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] px-4 py-2 rounded-full"
            style={{
              background: 'rgba(251,252,0,0.1)',
              color: C.yellow,
              border: '1px solid rgba(251,252,0,0.2)',
            }}
          >
            {/* <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.yellow }} /> */}
            Pcube Studio Presents
          </span>
        </motion.div>

        {/* BEAT 2 — Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2, delayChildren: 0.75 } } }}
          className="font-black leading-none mb-8"
          style={{
            fontFamily: 'Host Grotesk, sans-serif',
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            letterSpacing: '-0.03em',
          }}
        >
          {[
            { word: 'Dear', color: C.white },
            { word: 'Founders', color: C.yellow },
          ].map(({ word, color }) => (
            <motion.span
              key={word}
              variants={{
                hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
              style={{ display: 'block', color }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* BEAT 3 — Everything else */}
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 1.5 } } }}
        >
          {/* Subtext */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
            }}
            className="text-lg mb-8 max-w-md leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Most people leave events with business cards.<br />
            <span style={{ color: C.white, fontWeight: 600 }}>This one is different.</span>
          </motion.p>

          {/* Meta chips */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
            }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {[
              { icon: Calendar, label: 'Dec 12, 2026', sub: 'Event Date' },
              { icon: Users,    label: 'Up to 200',   sub: 'Attendees' },
              { icon: Clock,    label: 'One Day',      sub: 'Full Event' },
            ].map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)' }}
              >
                <Icon size={14} style={{ color: C.yellow }} />
                <div className="text-left">
                  <div className="text-sm font-semibold text-white leading-tight">{label}</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.38)' }}>{sub}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
            }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ background: C.yellow, color: C.dark, fontSize: '0.95rem' }}
            >
              Register Now
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1"
                style={{ background: C.dark }}
              >
                <ArrowUpRight size={14} style={{ color: C.yellow }} />
              </span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/10"
              style={{ color: C.white, border: '1px solid rgba(255,255,255,0.18)', fontSize: '0.95rem' }}
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Countdown — raw editorial numbers ── */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="rounded-2xl px-8 py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Label */}
          <p className="text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Counting down
          </p>

          {/* Numbers */}
          <div className="flex items-center gap-4 md:gap-8 flex-1 justify-center">
            <CountBlock value={time.days}    label="Days" />
            <span className="text-2xl font-black opacity-20 pb-4" style={{ color: C.yellow }}>:</span>
            <CountBlock value={time.hours}   label="Hrs" />
            <span className="text-2xl font-black opacity-20 pb-4" style={{ color: C.yellow }}>:</span>
            <CountBlock value={time.minutes} label="Min" />
            <span className="text-2xl font-black opacity-20 pb-4" style={{ color: C.yellow }}>:</span>
            <CountBlock value={time.seconds} label="Sec" />
          </div>

          {/* Inline CTA */}
          <a
            href={GOOGLE_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl transition-all hover:opacity-90 whitespace-nowrap flex-shrink-0"
            style={{ background: C.purple, color: C.white, fontSize: '0.875rem' }}
          >
            Grab Your Spot <ArrowUpRight size={13} />
          </a>
        </div>
      </motion.div>

      {/* ── Marquee at bottom — untouched ── */}
      <div className="relative z-10 py-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <MarqueeStrip />
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        className="absolute bottom-20 right-8 z-10 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.6 }}
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.2)', writingMode: 'vertical-rl' }}>scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={16} style={{ color: 'rgba(255,255,255,0.2)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── ABOUT SECTION ────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="py-28" style={{ background: C.offWhite }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left visual */}
          <FadeUp>
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden aspect-[4/5]"
                style={{ background: C.dark }}
              >
                {/* Large typographic element */}
                <div className="absolute inset-0 flex flex-col justify-end p-10">
                  <div
                    className="font-black leading-none mb-4"
                    style={{ fontSize: 'clamp(5rem, 15vw, 9rem)', color: 'rgba(96,0,255,0.15)', letterSpacing: '-0.04em', fontFamily: 'Host Grotesk, sans-serif' }}
                  >
                    200
                  </div>
                  <p className="text-2xl font-bold text-white leading-snug">
                    People.<br />
                    One Room.<br />
                    <span style={{ color: C.yellow }}>Endless Possibilities.</span>
                  </p>
                  <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Come as a stranger. Leave with a team.
                  </p>
                </div>
                {/* Color bar accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                  {[C.purple, C.red, C.yellow, C.blue, C.green].map((c) => (
                    <div key={c} className="flex-1" style={{ background: c }} />
                  ))}
                </div>
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl flex flex-col items-center justify-center shadow-2xl"
                style={{ background: C.yellow, color: C.dark }}
              >
                <div className="font-black text-3xl leading-none" style={{ letterSpacing: '-0.03em' }}>1</div>
                <div className="text-xs font-bold uppercase tracking-wider">Day Only</div>
              </div>
            </div>
          </FadeUp>

          {/* Right copy */}
          <div>
            <FadeUp delay={0.05}>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6" style={{ color: C.purple }}>
                What Is This
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                className="font-black mb-6 leading-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: C.dark, letterSpacing: '-0.02em', fontFamily: 'Host Grotesk, sans-serif' }}
              >
                Not a conference.<br />Not a workshop.<br />
                <span style={{ color: C.purple }}>A real room.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#4a4a5a' }}>
                Dear Founder is a one-day mixer built for the people who are actively building — or ready to. Business owners, freelancers, founders and dreamers gather in one room to meet, share ideas and leave with connections that actually help.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-lg leading-relaxed mb-10" style={{ color: '#4a4a5a' }}>
                No panels you'll forget by Monday. No keynotes that go nowhere. Just genuine conversations with people at the same table as you.
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <a
                href={GOOGLE_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ background: C.dark, color: C.yellow }}
              >
                I'm In — Register <ArrowUpRight size={15} />
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── WHO IS IT FOR ────────────────────────────────────────────────────────────
const AUDIENCE = [
  { index: '01', accent: C.yellow,  title: 'Business Owners', desc: 'Running a business and looking to grow your network, find collaborators or just be around people who get it.' },
  { index: '02', accent: C.red,     title: 'Freelancers',     desc: 'Working independently and want real connections that open doors — not just LinkedIn adds.' },
  { index: '03', accent: C.purple,  title: 'Founders',        desc: 'You\'re building something and need the kind of room where your next hire, investor or partner might already be sitting.' },
  { index: '04', accent: C.blue,    title: 'Dreamers',        desc: 'You haven\'t launched yet but the idea won\'t leave you alone. This room will help you decide your next move.' },
];

function WhoSection() {
  return (
    <section className="py-28" style={{ background: C.dark }}>
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(251,252,0,0.6)' }}>
              Who's In The Room
            </span>
            <h2
              className="font-black"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: C.white, letterSpacing: '-0.03em', fontFamily: 'Host Grotesk, sans-serif' }}
            >
              You belong here if you're
              <span style={{ color: C.yellow }}> building.</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AUDIENCE.map((a, i) => (
            <FadeUp key={a.title} delay={i * 0.08}>
              <div
                className="group rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="font-black text-sm mb-5 tabular-nums"
                  style={{ color: a.accent, fontFamily: 'Host Grotesk, sans-serif', letterSpacing: '0.05em' }}
                >
                  {a.index}
                </div>
                <h3 className="font-bold text-lg mb-3 text-white">{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{a.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WHAT TO EXPECT ───────────────────────────────────────────────────────────
const EXPECT = [
  { number: '01', title: 'Real Connections', desc: 'Walk in knowing no one, leave knowing people who can actually move your needle. Structured moments to meet and unstructured time to go deep.' },
  { number: '02', title: 'Shared Ideas', desc: 'The table talk here is different. Everyone in the room is building something — the conversations reflect that.' },
  { number: '03', title: 'Energy That Lasts', desc: 'Come fired up. Leave even more so. The kind of energy you carry into the week ahead.' },
];

function ExpectSection() {
  return (
    <section className="py-28" style={{ background: C.offWhite }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <FadeUp>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6" style={{ color: C.purple }}>
                What To Expect
              </span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2
                className="font-black mb-12 leading-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: C.dark, letterSpacing: '-0.02em', fontFamily: 'Host Grotesk, sans-serif' }}
              >
                Meet. Share.<br />
                <span style={{ color: C.purple }}>Leave with connections that actually help.</span>
              </h2>
            </FadeUp>
            <div className="space-y-8">
              {EXPECT.map((item, i) => (
                <FadeUp key={item.number} delay={0.1 + i * 0.08}>
                  <div className="flex gap-6 group">
                    <div
                      className="font-black text-sm pt-1 flex-shrink-0"
                      style={{ color: C.purple, fontFamily: 'Host Grotesk, sans-serif' }}
                    >
                      {item.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2" style={{ color: C.dark }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#5a5a6a' }}>{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Founders', value: '200+', bg: C.purple, text: C.white },
                { label: 'One Day', value: '1', bg: C.yellow, text: C.dark },
                { label: 'Ideas Shared', value: '∞', bg: C.dark, text: C.white },
                { label: 'Zero Fluff', value: '0', bg: C.red, text: C.white },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-7 aspect-square flex flex-col justify-between"
                  style={{ background: s.bg }}
                >
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60" style={{ color: s.text }}>
                    {s.label}
                  </span>
                  <span
                    className="font-black leading-none"
                    style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: s.text, letterSpacing: '-0.04em', fontFamily: 'Host Grotesk, sans-serif' }}
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─── CTA SECTION ──────────────────────────────────────────────────────────────
function CtaSection() {
  return (
    <section className="py-28" style={{ background: C.purple }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeUp>
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest" style={{ background: 'rgba(251,252,0,0.15)', color: C.yellow }}>
              Spots Are Limited
            </span>
          </div>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h2
            className="font-black mb-6 leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: C.white, letterSpacing: '-0.03em', fontFamily: 'Host Grotesk, sans-serif' }}
          >
            Your next big<br />
            <span style={{ color: C.yellow }}>connection is here.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.14}>
          <p className="text-lg mb-12 mx-auto max-w-xl" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
            Fill in the form and secure your place at Dear Founder. We'll send you everything you need to know closer to the date.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-bold px-10 py-5 rounded-full text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xl"
              style={{ background: C.yellow, color: C.dark }}
            >
              Register Now
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1"
                style={{ background: C.dark }}
              >
                <ArrowUpRight size={15} style={{ color: C.yellow }} />
              </span>
            </a>
          </div>
          <p className="mt-5 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Free to fill in. We'll confirm your spot.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-12" style={{ background: C.dark }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <img src="/pcube-new-logo.png" alt="Pcube Studio" className="h-8 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
          <div className="flex items-center gap-6">
            <a href="https://thepcubestudio.xyz" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>
              thepcubestudio.xyz
            </a>
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:opacity-90"
              style={{ background: C.yellow, color: C.dark }}
            >
              Register
            </a>
          </div>
        </div>

        {/* Color bar */}
        <div className="flex h-0.5 mt-8 rounded-full overflow-hidden opacity-40">
          {[C.purple, C.red, C.yellow, C.blue, C.green, C.cream].map((c) => (
            <div key={c} className="flex-1" style={{ background: c }} />
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Pcube Studio. Dear Founder Event.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Power · Precision · Purpose
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────
export default function DearFounder() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>
      <Nav />
      <Hero />
      <AboutSection />
      <WhoSection />
      <ExpectSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
