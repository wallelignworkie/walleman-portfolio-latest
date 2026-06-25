import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code2,
  Server,
  Database,
  Cloud,
  GitBranch,
  Sparkles,
  Calendar,
  Users,
  Zap,
  ShoppingBag,
  PackageSearch,
  Wallet,
  ListChecks,
  CreditCard,
  Briefcase,
  Quote,
  Send,
  Check,
  ChevronDown,
  ChevronUp,
  X,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Copy,
} from "lucide-react";
import projEcommerce from "@/assets/proj-ecommerce.jpg";
import projTracking from "@/assets/proj-tracking.jpg";
import projShareholder from "@/assets/proj-shareholder.jpg";
import projTasks from "@/assets/proj-tasks.jpg";
import projPayment from "@/assets/proj-payment.jpg";
import projJobs from "@/assets/proj-jobs.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wallelign Workie — Senior Software Engineer" },
      {
        name: "description",
        content:
          "Wallelign Workie — Software Engineer with 5+ years building scalable full-stack web applications with React, Next.js, Node.js, Nest.js, and Laravel.",
      },
      { property: "og:title", content: "Wallelign Workie — Senior Software Engineer" },
      {
        property: "og:description",
        content:
          "Full-stack engineer specializing in React, Node.js, microservices, and AWS. Available for senior software engineering roles.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

const STACK = [
  { label: "TypeScript", icon: Code2 },
  { label: "React", icon: Code2 },
  { label: "Next.js", icon: Code2 },
  { label: "Node.js", icon: Server },
  { label: "Nest.js", icon: Server },
  { label: "Express", icon: Server },
  { label: "Laravel", icon: Server },
  { label: "PostgreSQL", icon: Database },
  { label: "MySQL", icon: Database },
  { label: "MongoDB", icon: Database },
  { label: "Redis", icon: Database },
  { label: "AWS", icon: Cloud },
  { label: "Docker", icon: Cloud },
  { label: "CI/CD", icon: GitBranch },
];

type Project = {
  title: string;
  blurb: string;
  metrics: string[];
  stack: string[];
  icon: typeof ShoppingBag;
  // Drop a screenshot URL here later (e.g. "/projects/ecommerce.png").
  // If null, a branded gradient preview is rendered automatically.
  image?: string | null;
  accent: string;
};

const PROJECTS: Project[] = [
  {
    title: "E-Commerce Platform",
    blurb:
      "Secure full-stack commerce with personalized recommendations, reviews, and Stripe-style checkout.",
    metrics: ["+30% checkout efficiency", "−35% page load", "10+ shipped features"],
    stack: ["React", "Node.js", "MySQL", "REST"],
    icon: ShoppingBag,
    image: projEcommerce,
    accent: "from-violet-500/40 to-indigo-500/10",
  },
  {
    title: "Package Tracking System",
    blurb:
      "Real-time logistics platform with live tracking events and scalable ingestion for 5,000+ users.",
    metrics: ["−40% delivery delays", "40% faster pipeline", "5k+ users"],
    stack: ["Next.js", "Nest.js", "PostgreSQL"],
    icon: PackageSearch,
    image: projTracking,
    accent: "from-fuchsia-500/40 to-purple-500/10",
  },
  {
    title: "Shareholder Management",
    blurb:
      "Enterprise platform for shareholder records, transactions, and secure reporting at scale.",
    metrics: ["1,200+ users", "+25% data accuracy", "−30% data errors"],
    stack: ["Laravel", "MySQL", "REST"],
    icon: Wallet,
    image: projShareholder,
    accent: "from-blue-500/40 to-indigo-500/10",
  },
  {
    title: "Task Management App",
    blurb:
      "Real-time collaborative productivity workspace with workflow tracking and team analytics.",
    metrics: ["+20% team productivity", "Realtime sync", "Workflow analytics"],
    stack: ["React", "Node.js", "MongoDB"],
    icon: ListChecks,
    image: projTasks,
    accent: "from-cyan-500/40 to-blue-500/10",
  },
  {
    title: "Payment Gateway Integration",
    blurb:
      "Unified payments layer with multi-provider support, webhook reconciliation, and fraud signals.",
    metrics: ["99.98% success rate", "5+ providers", "PCI-aware design"],
    stack: ["Nest.js", "PostgreSQL", "Redis", "Stripe"],
    icon: CreditCard,
    image: projPayment,
    accent: "from-emerald-500/40 to-teal-500/10",
  },
  {
    title: "Job Matching Platform",
    blurb:
      "AI-assisted job board pairing candidates and roles using skill graphs and recruiter analytics.",
    metrics: ["3k+ matches/mo", "+45% recruiter response", "Smart ranking"],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    icon: Briefcase,
    image: projJobs,
    accent: "from-amber-500/40 to-rose-500/10",
  },
];

const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Excellerent Solutions",
    period: "Nov 2024 — Present",
    points: [
      "Scaled full-stack apps to 10,000+ MAU on React + Node.js.",
      "+40% backend performance via query, cache, and API redesign.",
      "Architected microservices boundaries for long-term maintainability.",
    ],
  },
  {
    role: "Technical Lead — Software Engineer",
    company: "TBC Technologies",
    period: "Jan 2024 — Nov 2024",
    points: [
      "Led 6-engineer team across architecture and delivery.",
      "Shipped 3 major releases on time; +30% team productivity.",
      "−35% defects through reviews, testing, and quality standards.",
    ],
  },
  {
    role: "Full-Stack Software Engineer",
    company: "Kegeberew Technologies",
    period: "Feb 2023 — Dec 2023",
    points: [
      "+50% engagement on React + Laravel platforms.",
      "Integrated 3+ third-party services; −20% manual work.",
      "−30% query response time via DB tuning.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Hikel Technologies Institute",
    period: "Jan 2022 — Feb 2023",
    points: [
      "Built and maintained apps on Next.js + Nest.js.",
      "+25% system reliability through proactive debugging.",
    ],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Wallelign owned our backend rewrite end-to-end. APIs got noticeably faster and the team finally had a clean foundation to build on.",
    name: "Engineering Manager",
    role: "Excellerent Solutions",
    initials: "EM",
  },
  {
    quote:
      "A rare engineer who can lead, mentor, and still ship the hardest tickets. Our release cadence doubled while he led the team.",
    name: "Product Lead",
    role: "TBC Technologies",
    initials: "PL",
  },
  {
    quote:
      "Sharp on architecture, calm under pressure, and writes code other engineers actually enjoy reading. Highly recommended.",
    name: "CTO",
    role: "Kegeberew Technologies",
    initials: "CT",
  },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="orb pointer-events-none absolute -top-32 -right-20 h-[420px] w-[420px]"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.22 280), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="orb pointer-events-none absolute top-[40%] -left-32 h-[480px] w-[480px]"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.2 270), transparent 70%)",
          animationDelay: "-4s",
        }}
      />

      <Nav />

      <main className="relative mx-auto max-w-7xl px-5 pb-32 pt-10 sm:px-8">
        <Hero />
        <BentoGrid />
        <ProjectsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            W
          </span>
          <span className="hidden sm:inline">Wallelign Workie</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#work" className="transition hover:text-foreground">
            Work
          </a>
          <a href="#experience" className="transition hover:text-foreground">
            Experience
          </a>
          <a href="#testimonials" className="transition hover:text-foreground">
            Testimonials
          </a>
          <a href="#stack" className="transition hover:text-foreground">
            Stack
          </a>
          <a href="#contact" className="transition hover:text-foreground">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90"
        >
          Let's talk <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="grid-bg relative overflow-hidden rounded-3xl border border-border bg-surface/30 px-6 py-16 sm:px-12 sm:py-24"
    >
      <div className="relative z-10 max-w-4xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for senior full-stack roles
        </div>
        <h1 className="text-5xl font-semibold leading-[0.95] sm:text-7xl md:text-8xl">
          <span className="text-gradient">Engineering</span>
          <br />
          systems that scale.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          I'm <span className="text-foreground">Wallelign Workie</span> — a software engineer with{" "}
          <span className="text-foreground">5+ years</span> shipping scalable, high-performance web
          apps across React, Next.js, Node.js, Nest.js, and Laravel.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90"
          >
            View selected work <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-medium transition hover:border-primary/60"
          >
            Get in touch
          </a>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            ["5+", "Years building"],
            ["10k+", "MAU served"],
            ["+40%", "Avg perf gains"],
            ["6", "Engineers led"],
          ].map(([k, v]) => (
            <div key={v}>
              <dt className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                {k}
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function BentoGrid() {
  return (
    <section
      id="stack"
      className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-[auto_auto]"
    >
      <article className="bento-card col-span-1 p-7 md:col-span-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5" /> About
        </div>
        <h2 className="mt-3 font-display text-2xl font-semibold leading-tight">
          Full-stack engineer focused on RESTful APIs, microservices, and system design.
        </h2>
        <p className="mt-4 text-muted-foreground">
          I lead Agile teams to ship reliable software on AWS — from architecture and API design to
          frontend craft. I care about performance, clean boundaries, and code that other engineers
          can grow.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs">
          {["Microservices", "System Design", "REST APIs", "AWS", "Agile / Scrum"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-surface/60 px-3 py-1 text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </article>

      <article className="bento-card col-span-1 p-7 md:col-span-3">
        <div className="flex h-full flex-col justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> Based in
            </div>
            <h3 className="mt-3 font-display text-3xl font-semibold">Addis Ababa, Ethiopia</h3>
            <p className="mt-2 text-muted-foreground">
              Working remotely with teams worldwide · UTC+3
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Stat icon={Users} label="Team led" value="6 engineers" />
            <Stat icon={Zap} label="Backend uplift" value="+40% perf" />
            <Stat icon={Calendar} label="Release cycles" value="−25% time" />
            <Stat icon={Code2} label="Defects" value="−35%" />
          </div>
        </div>
      </article>

      <article className="bento-card col-span-1 p-7 md:col-span-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
          <Server className="h-3.5 w-3.5" /> Stack
        </div>
        <h3 className="mt-3 font-display text-2xl font-semibold">The tools I reach for</h3>
        <div className="mt-6 flex flex-wrap gap-2">
          {STACK.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-3 py-2 font-mono text-xs text-foreground/90 transition hover:border-primary/60"
            >
              <Icon className="h-3.5 w-3.5 text-primary" />
              {label}
            </span>
          ))}
        </div>
      </article>

      <article className="bento-card col-span-1 flex flex-col justify-between p-7 md:col-span-2">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <Mail className="h-3.5 w-3.5" /> Hire me
          </div>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">
            Have a product that needs to scale?
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            I'm taking on senior full-stack and tech lead opportunities.
          </p>
        </div>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center justify-between rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90"
        >
          Start a conversation
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </article>
    </section>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Users; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface/40 p-3">
      <Icon className="h-4 w-4 text-primary" />
      <div className="mt-2 font-display text-lg font-semibold leading-none">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function ProjectPreview({ project, onOpen }: { project: Project; onOpen?: () => void }) {
  const Icon = project.icon;
  const hasImage = Boolean(project.image);
  return (
    <button
      type="button"
      onClick={onOpen}
      disabled={!hasImage}
      aria-label={hasImage ? `Open ${project.title} screenshot` : undefined}
      className="relative block aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-surface/40 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:cursor-default"
    >
      {hasImage ? (
        <>
          <img
            src={project.image as string}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
            width={1280}
            height={800}
          />
          <span className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground/80 backdrop-blur opacity-0 transition group-hover:opacity-100">
            Click to enlarge
          </span>
        </>
      ) : (
        <div
          className={`grid-bg relative flex h-full w-full items-center justify-center bg-gradient-to-br ${project.accent}`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          <div className="relative flex flex-col items-center gap-3 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-2xl border border-border bg-surface/70 text-primary backdrop-blur">
              <Icon className="h-8 w-8" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Preview · screenshot coming soon
            </span>
          </div>
        </div>
      )}
    </button>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen?: () => void }) {
  return (
    <article className="bento-card group flex flex-col p-6">
      <ProjectPreview project={project} onOpen={onOpen} />
      <div className="mt-5 flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
      <p className="mt-2 text-muted-foreground">{project.blurb}</p>

      <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {project.metrics.map((m) => (
          <li
            key={m}
            className="rounded-lg border border-border bg-surface/50 px-3 py-2 text-xs text-foreground/90"
          >
            {m}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}

function ProjectLightbox({
  projects,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  projects: Project[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onPrev, onNext]);

  const project = projects[index];
  if (!project || !project.image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} screenshot`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-border bg-surface/80 text-foreground transition hover:border-primary/60"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-border bg-surface/80 text-foreground transition hover:border-primary/60 sm:left-6"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-border bg-surface/80 text-foreground transition hover:border-primary/60 sm:right-6"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <figure className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={project.image as string}
          alt={`${project.title} screenshot`}
          className="mx-auto max-h-[80vh] w-auto max-w-full rounded-xl border border-border shadow-2xl"
        />
        <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
          <div>
            <p className="font-display text-lg font-semibold">{project.title}</p>
            <p className="text-muted-foreground">{project.blurb}</p>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {index + 1} / {projects.length}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const visible = expanded ? PROJECTS : PROJECTS.slice(0, 4);
  const galleryProjects = PROJECTS.filter((p) => p.image);

  const openLightbox = useCallback(
    (project: Project) => {
      const idx = galleryProjects.findIndex((p) => p.title === project.title);
      if (idx >= 0) setLightboxIndex(idx);
    },
    [galleryProjects],
  );

  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % galleryProjects.length)),
    [galleryProjects.length],
  );
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : (i - 1 + galleryProjects.length) % galleryProjects.length,
      ),
    [galleryProjects.length],
  );

  return (
    <section id="work" className="mt-24">
      <SectionHeader eyebrow="Selected work" title="Projects that shipped impact" />
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {visible.map((p) => (
          <ProjectCard key={p.title} project={p} onOpen={() => openLightbox(p)} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-medium transition hover:border-primary/60"
          aria-expanded={expanded}
        >
          {expanded ? (
            <>
              View less <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              View more projects <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      {lightboxIndex !== null && (
        <ProjectLightbox
          projects={galleryProjects}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="mt-24">
      <SectionHeader eyebrow="Experience" title="Five years of building and leading" />
      <ol className="mt-10 relative space-y-4 border-l border-border pl-6">
        {EXPERIENCE.map((e) => (
          <li key={e.company} className="relative">
            <span className="absolute -left-[31px] top-2 grid h-4 w-4 place-items-center rounded-full bg-primary shadow-glow" />
            <div className="bento-card p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                  <p className="text-sm text-primary">{e.company}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 bento-card flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Education</p>
          <p className="mt-1 font-display text-lg font-semibold">
            B.Sc. Software Engineering — Wollo University
          </p>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
          <span>2017 — 2022</span>
          <span className="rounded-full border border-border px-3 py-1 text-foreground">
            GPA 3.74 / 4.0
          </span>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="mt-24">
      <SectionHeader eyebrow="Testimonials" title="What teammates say" />
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <article key={t.name + t.role} className="bento-card flex flex-col p-7">
            <Quote className="h-7 w-7 text-primary" />
            <p className="mt-4 flex-1 text-foreground/90 leading-relaxed">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 font-display text-sm font-semibold text-primary">
                {t.initials}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

type FormErrors = { name?: string; email?: string; message?: string };

const WEB3FORMS_ACCESS_KEY = "ecfa5745-ffce-431d-969e-5c021bddfe67";
const CONTACT_EMAIL = "walleworkieas@gmail.com";
const CONTACT_PHONE = "+251 961 197 370";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name) e.name = "Please enter your name.";
    else if (name.length > 100) e.name = "Name must be under 100 characters.";
    if (!email) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email address.";
    else if (email.length > 255) e.email = "Email must be under 255 characters.";
    if (!message) e.message = "Please add a short message.";
    else if (message.length < 10) e.message = "Message should be at least 10 characters.";
    else if (message.length > 1000) e.message = "Message must be under 1000 characters.";
    return e;
  };

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setStatus("sending");
    setErrorMsg(null);
    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", form.name.trim());
      formData.append("email", form.email.trim());
      formData.append("message", form.message.trim());
      formData.append("subject", `Portfolio inquiry from ${form.name.trim()}`);
      formData.append("from_name", "Portfolio Contact Form");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        throw new Error(data?.message || "Failed to send message. Please try again later.");
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  const field =
    "w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/70 focus:ring-2 focus:ring-primary/30";

  const disabled = status === "sending";

  return (
    <form onSubmit={onSubmit} noValidate className="bento-card grid gap-4 p-7 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            maxLength={100}
            disabled={disabled}
            name="name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`${field} mt-2`}
            placeholder="Your name"
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            maxLength={255}
            disabled={disabled}
            name="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`${field} mt-2`}
            placeholder="you@company.com"
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          maxLength={1000}
          disabled={disabled}
          name="message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${field} mt-2 resize-none`}
          placeholder="Tell me about the role, team, or project…"
        />
        <div className="mt-1 flex items-center justify-between">
          {errors.message ? <p className="text-xs text-destructive">{errors.message}</p> : <span />}
          <span className="font-mono text-[11px] text-muted-foreground">
            {form.message.length}/1000
          </span>
        </div>
      </div>

      {status === "error" && errorMsg && (
        <p className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">
          {errorMsg}
        </p>
      )}
      {status === "sent" && (
        <p className="rounded-lg border border-primary/40 bg-primary/10 px-3 py-2 text-xs text-foreground">
          Thanks — your message was delivered to my inbox. I'll reply shortly.
        </p>
      )}

      <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          Sends straight to my inbox via Web3Forms. I usually reply within 24h.
        </p>
        <button
          type="submit"
          disabled={disabled}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : status === "sent" ? (
            <>
              <Check className="h-4 w-4" /> Sent — thank you
            </>
          ) : (
            <>
              Send message <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function ContactSection() {
  const [copiedContact, setCopiedContact] = useState<"email" | "phone" | null>(null);

  const copyContact = async (type: "email" | "phone", value: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedContact(type);
    window.setTimeout(() => setCopiedContact(null), 1800);
  };

  return (
    <section id="contact" className="mt-24">
      <div className="bento-card grid-bg relative overflow-hidden p-8 sm:p-12">
        <div className="relative z-10 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Let's build something
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              <span className="text-gradient">Ready when you are.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Open to senior full-stack engineering and technical lead roles. Drop a message and
              I'll get back within 24 hours.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm transition hover:border-primary/60">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex min-w-0 flex-1 items-center gap-3"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span className="select-text break-all">{CONTACT_EMAIL}</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyContact("email", CONTACT_EMAIL)}
                  aria-label="Copy email address"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary/60 hover:text-foreground"
                >
                  {copiedContact === "email" ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm transition hover:border-primary/60">
                <a href="tel:+251961197370" className="flex min-w-0 flex-1 items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span className="select-text">{CONTACT_PHONE}</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyContact("phone", CONTACT_PHONE)}
                  aria-label="Copy phone number"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary/60 hover:text-foreground"
                >
                  {copiedContact === "phone" ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" /> Addis Ababa, Ethiopia · UTC+3
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <a
                href="https://linkedin.com/in/wallelignworkie/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 transition hover:border-primary/60 hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/wallelignworkie"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 transition hover:border-primary/60 hover:text-foreground"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{eyebrow}</p>
        <h2 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">{title}</h2>
      </div>
      <div className="hidden h-px flex-1 bg-border sm:mx-8 sm:block" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} Wallelign Workie. Crafted with care.</p>
        <p className="font-mono">Built with React · TanStack · Tailwind</p>
      </div>
    </footer>
  );
}
