import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import {
  Database,
  Server,
  Layout,
  Sparkles,
  Code2,
  Braces,
  Rocket,
} from 'lucide-react';

const TechCard = ({ icon: Icon, title, description, badge }) => (
  <div className="glass-card p-6 flex flex-col items-center text-center group hover:border-primary/40 transition-colors">
    <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/10 transition-transform">
      <Icon className="text-textMuted group-hover:text-primary transition-colors" size={32} />
    </div>
    <h3 className="text-lg font-bold text-text mb-2 flex items-center justify-center gap-2 flex-wrap">
      {title}
      {badge ? (
        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/20 text-primary uppercase">
          {badge}
        </span>
      ) : null}
    </h3>
    <p className="text-sm text-textMuted">{description}</p>
  </div>
);

const TimelineStep = ({ step, title, description, isLast }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.45 }}
    className="relative flex gap-8 pb-12"
  >
    {!isLast ? (
      <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
    ) : null}

    <div className="relative z-10 shrink-0">
      <div className="w-12 h-12 rounded-full bg-surface border-4 border-background flex items-center justify-center font-black text-textMuted shadow-[0_0_15px_rgba(59,130,246,0.25)]">
        {step}
      </div>
    </div>

    <div className="glass-card p-6 flex-1 pt-4">
      <h3 className="text-xl font-bold text-text mb-2">{title}</h3>
      <p className="text-textMuted leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <section className="text-center space-y-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-3xl mb-4"
          >
            <Sparkles className="text-primary w-10 h-10" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-text tracking-tight">PinAtlas</h1>
          <p className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto">
            PIN Code Intelligence for India — fast search, rich geography context, and export-ready data
            for analysts and operators.
          </p>
        </section>

        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-text flex items-center gap-2">
              <Code2 className="text-primary" /> Built With
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechCard
              icon={Layout}
              title="React 18"
              badge="Vite"
              description="Component-driven UI with fast HMR and optimized production builds."
            />
            <TechCard
              icon={Braces}
              title="Tailwind CSS v3"
              description="Utility-first styling with responsive layout tokens and dark mode."
            />
            <TechCard
              icon={Server}
              title="Node.js"
              badge="Express"
              description="REST API with security middleware, rate limiting, and streaming exports."
            />
            <TechCard
              icon={Database}
              title="MongoDB"
              badge="Atlas"
              description="Indexed collections with compound and text indexes for fast queries."
            />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-text flex items-center gap-2">
              <Rocket className="text-primary" /> Build Timeline
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <TimelineStep
              step="1"
              title="Database design + seeding"
              description="Modeled the pincode schema, added compound and text indexes, and built a chunked CSV import pipeline."
            />
            <TimelineStep
              step="2"
              title="Backend APIs + MVC architecture"
              description="Implemented controllers, services, routes, async wrappers, and a centralized error handler with consistent envelopes."
            />
            <TimelineStep
              step="3"
              title="Frontend UI + Tailwind"
              description="Built pages, navigation, filters, tables, and a theme system with polished responsive layouts."
            />
            <TimelineStep
              step="4"
              title="Charts + Animations"
              description="Added Recharts visualizations and Framer Motion transitions for a production-grade feel."
            />
            <TimelineStep
              step="5"
              title="Testing + Polish"
              description="Hardened empty and loading states, debounced search, accessibility touches, and export flows."
              isLast
            />
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
