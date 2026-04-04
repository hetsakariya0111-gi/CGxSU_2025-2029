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
  Zap,
  Shield,
  LineChart,
  Github,
} from 'lucide-react';
import { Card } from '../components/ui/Card';

const GITHUB_HREF = 'https://github.com';

const TechCard = React.memo(function TechCardInner({ icon: Icon, title, description, badge }) {
  return (
    <Card className="p-6 flex flex-col items-center text-center group hover:border-primary/35 transition-colors duration-200">
      <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center mb-4 border border-border group-hover:scale-[1.03] group-hover:border-primary/30 transition-transform duration-200 ease-out will-change-transform">
        <Icon className="text-textMuted group-hover:text-primary transition-colors duration-200" size={32} />
      </div>
      <h3 className="text-lg font-bold text-text mb-2 flex items-center justify-center gap-2 flex-wrap tracking-tight">
        {title}
        {badge ? (
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/15 text-primary uppercase tracking-wide">
            {badge}
          </span>
        ) : null}
      </h3>
      <p className="text-sm text-textMuted leading-relaxed">{description}</p>
    </Card>
  );
});

const WhyCard = React.memo(function WhyCardInner({ icon: Icon, title, body }) {
  return (
    <Card className="p-6 h-full border border-border/80">
      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="text-primary" size={22} aria-hidden />
      </div>
      <h3 className="text-lg font-bold text-text mb-2 tracking-tight">{title}</h3>
      <p className="text-sm text-textMuted leading-relaxed">{body}</p>
    </Card>
  );
});

const TimelineStep = ({ step, title, description, isLast }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-72px' }}
    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    className="relative flex gap-8 pb-12"
  >
    {!isLast ? (
      <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-primary/60 to-transparent" aria-hidden />
    ) : null}

    <div className="relative z-10 shrink-0">
      <div className="w-12 h-12 rounded-full bg-surface border-2 border-border flex items-center justify-center font-black text-textMuted text-sm shadow-[0_0_20px_rgba(99,102,241,0.2)]">
        {step}
      </div>
    </div>

    <Card className="p-6 flex-1 pt-4 border border-border/70">
      <h3 className="text-xl font-bold text-text mb-2 tracking-tight">{title}</h3>
      <p className="text-textMuted leading-relaxed text-sm">{description}</p>
    </Card>
  </motion.div>
);

const About = () => {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <section className="text-center space-y-6">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-3xl mb-2 border border-primary/20"
          >
            <Sparkles className="text-primary w-10 h-10" aria-hidden />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-text tracking-tight">PinAtlas Pro</h1>
          <p className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto leading-relaxed">
            Portfolio-grade PIN code intelligence — performance-minded UI, strict API contracts, and
            production patterns you can defend in a senior interview.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text mb-8 tracking-tight flex items-center gap-2">
            <Zap className="text-primary" size={26} aria-hidden />
            Why PinAtlas?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <WhyCard
              icon={LineChart}
              title="Insight-ready data"
              body="Aggregations, distribution charts, and CSV export — built for analysts who care about correctness and speed."
            />
            <WhyCard
              icon={Shield}
              title="Hardened API surface"
              body="Rate limits, helmet, compression, structured errors, and MVC separation on the server."
            />
            <WhyCard
              icon={Layout}
              title="UI that scales"
              body="Lazy routes, TanStack Query caching, virtualization for large tables, and a token-driven design system."
            />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-text flex items-center gap-2 tracking-tight">
              <Code2 className="text-primary" aria-hidden />
              Tech stack
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechCard
              icon={Layout}
              title="React 18"
              badge="Vite"
              description="Code-split routes, Suspense boundaries, and client-first data fetching with TanStack Query."
            />
            <TechCard
              icon={Braces}
              title="Tailwind + tokens"
              description="CSS variables for theming, glass surfaces, and motion capped at smooth 60fps-friendly transitions."
            />
            <TechCard
              icon={Server}
              title="Node.js"
              badge="Express"
              description="REST controllers and services, MongoDB indexes, streaming CSV export, and defensive middleware."
            />
            <TechCard
              icon={Database}
              title="MongoDB"
              badge="Atlas"
              description="Compound and text indexes for geography filters and full-text style search."
            />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-text flex items-center gap-2 tracking-tight">
              <Rocket className="text-primary" aria-hidden />
              Build timeline
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <TimelineStep
              step="1"
              title="Schema + ingestion"
              description="Designed the pincode model, indexes, and a resilient CSV seeding pipeline."
            />
            <TimelineStep
              step="2"
              title="API layer"
              description="Controllers, services, async wrappers, and centralized error envelopes with correct HTTP codes."
            />
            <TimelineStep
              step="3"
              title="Product UI"
              description="Explorer with virtualization, dashboard analytics, theming, and accessible interactions."
            />
            <TimelineStep
              step="4"
              title="Performance pass"
              description="React Query, request cancellation, debounced search, manual chunking, and empty/error states everywhere."
              isLast
            />
          </div>
        </section>

        <section>
          <Card className="p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-primary/25 bg-primary/[0.04]">
            <div>
              <h2 className="text-xl font-bold text-text tracking-tight mb-2">Built by</h2>
              <p className="text-sm text-textMuted max-w-md leading-relaxed">
                Replace this card with your name, links, and live demo. The repo is structured so reviewers can
                navigate backend and frontend quickly.
              </p>
            </div>
            <a
              href={GITHUB_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-text text-background font-semibold text-sm hover:opacity-90 transition-opacity duration-200 shrink-0"
              aria-label="View source on GitHub"
            >
              <Github size={20} aria-hidden />
              GitHub
            </a>
          </Card>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
