import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  Stethoscope, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  FileText,
  Activity,
  HeartPulse,
  Lock,
  PlayCircle,
  TrendingDown,
  Zap,
  Receipt,
  ClipboardList,
  Users,
  BarChart2
} from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "../assets/images/hero.png";
import problemImg from "../assets/images/problem.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Stethoscope className="text-white w-5 h-5" />
            </div>
            <span className="font-semibold text-lg tracking-tight text-foreground">TouchScribe</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#problem" className="hover:text-primary transition-colors">The Problem</a>
            <a href="#services" className="hover:text-primary transition-colors">Platform</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
            <a href="#proof" className="hover:text-primary transition-colors">Results</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors hidden md:block">Log in</a>
            <Button className="rounded-full px-6">Start Free Trial</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          {/* Soft green/blue gradient background */}
          <div className="absolute inset-0 -z-10" style={{background: "linear-gradient(135deg, #f0fdf4 0%, #eff6ff 50%, #f0fdf4 100%)"}}></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] -z-10 rounded-full opacity-30 blur-3xl" style={{background: "radial-gradient(circle, #bbf7d0 0%, #bfdbfe 100%)"}}></div>
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-2xl"
              >
                <motion.div variants={fadeInUp}>
                  <Badge variant="outline" className="mb-6 px-3 py-1 rounded-full border-primary/20 text-primary bg-primary/5">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      {"HIPAA Compliant & EHR Ready"}
                    </span>
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6"
                >
                  Cut Physician Burnout.{" "}
                  <span className="text-primary">Reclaim Patient Time.</span>{" "}
                  <span className="text-secondary">AI + Experts</span>{" "}
                  Power Your Documentation and Revenue Growth.
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl"
                >
                  Eliminate documentation burden, save hours on charting, and improve accuracy—backed by AI-powered scribing, EHR optimization, billing, and compliance.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="rounded-full text-base h-14 px-8 shadow-lg shadow-primary/20 font-semibold"
                  >
                    Schedule a Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full text-base h-14 px-8 bg-white/80 hover:bg-white border-slate-200 text-slate-700 hover:text-primary group"
                  >
                    <PlayCircle className="mr-2 w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    Learn How It Works
                  </Button>
                </motion.div>

                <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500">
                  {[
                    { icon: <ShieldCheck className="w-4 h-4 text-primary" />, label: "HIPAA Certified" },
                    { icon: <CheckCircle2 className="w-4 h-4 text-primary" />, label: "No Long-Term Contracts" },
                    { icon: <Activity className="w-4 h-4 text-primary" />, label: "Live in 48 Hours" },
                  ].map(({ icon, label }) => (
                    <span key={label} className="flex items-center gap-1.5 font-medium">
                      {icon} {label}
                    </span>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right: Healthcare Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative lg:ml-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2.5rem] transform rotate-2 scale-105 -z-10 blur-2xl"></div>
                <img
                  src={heroImg}
                  alt="Physician using TouchScribe AI scribing"
                  className="rounded-[2rem] shadow-2xl object-cover w-full max-w-lg aspect-[4/5] lg:aspect-[3/4]"
                />

                {/* Floating badge: AI note */}
                <div className="absolute bottom-8 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-slate-100">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mic className="text-primary w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Generating SOAP note...</p>
                    <p className="text-xs text-slate-500 mt-0.5">Saved 22 min of charting today</p>
                  </div>
                </div>

                {/* Floating badge: accuracy */}
                <div className="absolute top-8 -right-4 bg-white rounded-xl shadow-lg px-4 py-2.5 border border-slate-100">
                  <p className="text-xs text-slate-500 font-medium">Accuracy Rate</p>
                  <p className="text-2xl font-bold text-primary">98.7%</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Trust Bar */}
        <section className="py-10 border-y border-slate-100 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
              {[
                { icon: <ShieldCheck className="w-5 h-5 text-primary" />, label: "HIPAA-Compliant Operations" },
                { icon: <CheckCircle2 className="w-5 h-5 text-primary" />, label: "99%+ Documentation Accuracy" },
                { icon: <Zap className="w-5 h-5 text-primary" />, label: "Real-Time EHR Integration" },
                { icon: <Clock className="w-5 h-5 text-primary" />, label: "24–48 Hour Turnaround" },
                { icon: <TrendingDown className="w-5 h-5 text-primary" />, label: "Cost Savings up to 70%" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-2 px-2">
                  <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <span className="text-sm font-medium text-slate-700 leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Problem Section */}
        <section id="problem" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Common Pain Points
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900">
                Does this sound familiar?
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6"
            >
              {[
                {
                  icon: FileText,
                  problem: "Are you overwhelmed by charting and errors in clinic notes?",
                  solution: "Our AI scribes and QA experts ensure accurate, compliant records and help restore your focus on patient care.",
                },
                {
                  icon: Activity,
                  problem: "Is your EHR slowing down clinical performance?",
                  solution: "We optimize your EHR workflows, fix inefficient configurations, and integrate seamlessly so your system works for you — not against you.",
                },
                {
                  icon: Clock,
                  problem: "Are prior authorization delays costing you time and revenue?",
                  solution: "Our team handles prior auth submissions end-to-end, reducing wait times and getting approvals faster so patient care is never held up.",
                },
                {
                  icon: TrendingDown,
                  problem: "Are claim denials and billing errors draining your revenue?",
                  solution: "Our certified billing specialists identify denial patterns, appeal claims, and close revenue leakage — recovering dollars you've already earned.",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="h-full border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white overflow-hidden">
                    <CardContent className="p-0">
                      {/* Problem row */}
                      <div className="px-7 pt-7 pb-5 border-b border-slate-100">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                            <item.icon className="w-5 h-5 text-red-500" />
                          </div>
                          <p className="text-base font-bold text-slate-900 leading-snug">
                            {item.problem}
                          </p>
                        </div>
                      </div>
                      {/* Solution row */}
                      <div className="px-7 py-5 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. Services Overview */}
        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Our Services
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Everything your practice needs, in one platform
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-slate-500">
                From documentation to billing, we handle the operational side so you can focus on what matters.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Mic,
                  color: "bg-emerald-50",
                  iconColor: "text-emerald-600",
                  title: "Virtual Medical Scribing",
                  desc: "Real-time EHR documentation support that reduces physician workload and improves patient care.",
                  highlights: ["Ambient AI listening", "SOAP note generation", "Multi-specialty support"],
                },
                {
                  icon: FileText,
                  color: "bg-blue-50",
                  iconColor: "text-blue-600",
                  title: "EHR Documentation",
                  desc: "Structured, accurate, and fully integrated clinical documentation.",
                  highlights: ["Epic, Cerner & 50+ EHRs", "QA-reviewed records", "Real-time sync"],
                },
                {
                  icon: Receipt,
                  color: "bg-violet-50",
                  iconColor: "text-violet-600",
                  title: "Medical Billing & Invoicing",
                  desc: "Streamlined billing and invoicing to reduce denials and improve revenue flow.",
                  highlights: ["Denial management", "Claims automation", "Revenue recovery"],
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="group">
                  <Card className="h-full border border-slate-200 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 bg-white">
                    <CardContent className="p-8 flex flex-col h-full">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                        <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                      </div>

                      {/* Title + desc */}
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed mb-6">{item.desc}</p>

                      {/* Feature list */}
                      <ul className="mt-auto space-y-2">
                        {item.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 5. Why Choose TouchScribe */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Why Choose Us
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900">
                Why Healthcare Providers Trust TouchScribe
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                {
                  icon: Mic,
                  accent: "text-emerald-600",
                  accentBg: "bg-emerald-50",
                  title: "AI Scribing + Human QA",
                  bullets: [
                    "AI listens in real-time during visits, generating complete SOAP notes instantly",
                    "Human QA specialists review every note for accuracy, completeness, and compliance",
                    "Finalized notes are synced directly to your EHR within hours — not days",
                  ],
                  outcome: "Physicians reclaim 2+ hours daily, reducing burnout and increasing patient throughput.",
                },
                {
                  icon: Zap,
                  accent: "text-blue-600",
                  accentBg: "bg-blue-50",
                  title: "EHR Expertise",
                  bullets: [
                    "Deep configuration and optimization of Epic, Cerner, Athena, and 50+ EHR platforms",
                    "Workflow customization tailored to your specialty, templates, and preferences",
                    "Ongoing support, training, and performance monitoring to keep your system running smoothly",
                  ],
                  outcome: "Reduced click burden, faster charting, and a system that actually works the way you do.",
                },
                {
                  icon: ShieldCheck,
                  accent: "text-violet-600",
                  accentBg: "bg-violet-50",
                  title: "Prior Authorization",
                  bullets: [
                    "End-to-end prior auth submissions handled by certified specialists — no more staff burden",
                    "Real-time status tracking and proactive payer follow-ups to prevent delays",
                    "Appeals support to reverse denials quickly and keep care on schedule",
                  ],
                  outcome: "Faster approvals, fewer care delays, and more time for your team to focus on patients.",
                },
                {
                  icon: Receipt,
                  accent: "text-rose-600",
                  accentBg: "bg-rose-50",
                  title: "Revenue Cycle Optimization",
                  bullets: [
                    "Certified coders and billers ensure clean, accurate claim submissions from day one",
                    "Systematic denial analysis with root-cause resolution to stop recurring leakage",
                    "Transparent reporting dashboards so you always know where your revenue stands",
                  ],
                  outcome: "Up to 70% reduction in claim denials and measurable improvement in net collections.",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="h-full bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-2xl ${item.accentBg} flex items-center justify-center shrink-0`}>
                          <item.icon className={`w-6 h-6 ${item.accent}`} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-3 mb-6">
                        {item.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-slate-600 text-sm leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Outcome */}
                      <div className="mt-auto pt-5 border-t border-slate-100">
                        <p className="text-sm text-slate-700">
                          <span className="font-semibold text-primary">Outcome: </span>
                          {item.outcome}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 6. How It Works */}
        <section id="how-it-works" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">

            {/* Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Our Process
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How TouchScribe Works
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-500 text-lg leading-relaxed">
                From setup to optimization — a simple, structured workflow that integrates into your practice.
              </motion.p>
            </motion.div>

            {/* Steps flow */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row items-stretch gap-0 max-w-6xl mx-auto"
            >
              {[
                {
                  step: "01",
                  icon: ClipboardList,
                  iconColor: "text-emerald-600",
                  iconBg: "bg-emerald-50",
                  borderAccent: "border-t-emerald-500",
                  stepColor: "text-emerald-600",
                  title: "Workflow Setup",
                  desc: "We analyze your specialty, EHR system, and workflow needs to design a customized plan.",
                },
                {
                  step: "02",
                  icon: Users,
                  iconColor: "text-blue-600",
                  iconBg: "bg-blue-50",
                  borderAccent: "border-t-blue-500",
                  stepColor: "text-blue-600",
                  title: "Team Assignment + Integration",
                  desc: "Our trained team integrates into your system with secure, HIPAA-compliant access.",
                },
                {
                  step: "03",
                  icon: Zap,
                  iconColor: "text-violet-600",
                  iconBg: "bg-violet-50",
                  borderAccent: "border-t-violet-500",
                  stepColor: "text-violet-600",
                  title: "Execution",
                  desc: "We handle documentation, authorizations, and billing with AI + human QA precision.",
                },
                {
                  step: "04",
                  icon: BarChart2,
                  iconColor: "text-rose-600",
                  iconBg: "bg-rose-50",
                  borderAccent: "border-t-rose-500",
                  stepColor: "text-rose-600",
                  title: "Optimization",
                  desc: "We continuously improve accuracy, reduce errors, and optimize your workflow performance.",
                },
              ].map((item, i, arr) => (
                <div key={i} className="flex flex-col md:flex-row items-stretch flex-1 min-w-0">

                  {/* Step card */}
                  <motion.div
                    variants={fadeInUp}
                    className={`group flex-1 bg-white rounded-2xl border border-slate-200 border-t-4 ${item.borderAccent} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-7 flex flex-col gap-5`}
                  >
                    {/* Step number + icon row */}
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold tracking-[0.2em] uppercase ${item.stepColor}`}>{item.step}</span>
                      <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                        <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                      </div>
                    </div>
                    {/* Text */}
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>

                  {/* Connector — hidden after last item */}
                  {i < arr.length - 1 && (
                    <div className="flex items-center justify-center md:mx-0 my-0">
                      {/* Desktop: horizontal arrow */}
                      <div className="hidden md:flex items-center px-2">
                        <div className="w-6 h-px bg-slate-300"></div>
                        <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 -ml-1" />
                      </div>
                      {/* Mobile: vertical line */}
                      <div className="md:hidden flex flex-col items-center py-1">
                        <div className="w-px h-6 bg-slate-300"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Footer tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-center text-slate-500 text-sm mt-12 italic"
            >
              TouchScribe works as an extension of your practice — not just a service provider.
            </motion.p>

          </div>
        </section>

        {/* 7. Proof / Results */}
        <section id="proof" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16 border-b border-slate-100 pb-16">
              {[
                { metric: "1.8 hrs", label: "Saved per shift" },
                { metric: "99.9%", label: "Medical accuracy" },
                { metric: "15+", label: "Extra patients per week" }
              ].map((stat, i) => (
                <div key={i} className="text-center px-4">
                  <div className="text-5xl font-bold text-secondary mb-2">{stat.metric}</div>
                  <div className="text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-slate-50 border-none">
                <CardContent className="p-8">
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                  </div>
                  <p className="text-lg text-slate-700 mb-6 italic">"I finally had dinner with my family on a Tuesday. TouchScribe is the most impactful technology I've adopted in 15 years of practice. It's accurate, fast, and understands exactly how I want my notes formatted."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-slate-900">Dr. Sarah Jenkins</h4>
                      <p className="text-sm text-slate-500">Internal Medicine, Mayo Clinic</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-50 border-none">
                <CardContent className="p-8">
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                  </div>
                  <p className="text-lg text-slate-700 mb-6 italic">"The ambient listening is incredible. Patients appreciate that I'm looking at them instead of my monitor. And my billing department is thrilled because the notes are more comprehensive than ever."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-slate-900">Dr. Marcus Chen</h4>
                      <p className="text-sm text-slate-500">Orthopedic Surgery</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 8. Trust / Credibility */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <Lock className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-bold text-slate-900">HIPAA Compliant</div>
                  <div className="text-xs text-slate-500">Enterprise-grade security</div>
                </div>
              </div>
              <div className="w-px h-12 bg-slate-200 hidden md:block"></div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-bold text-slate-900">SOC 2 Type II</div>
                  <div className="text-xs text-slate-500">Certified infrastructure</div>
                </div>
              </div>
              <div className="w-px h-12 bg-slate-200 hidden md:block"></div>
              <div className="flex items-center gap-3">
                <HeartPulse className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-bold text-slate-900">BAA Included</div>
                  <div className="text-xs text-slate-500">Standard for all plans</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9 & 10. Risk Reversal & Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10"></div>
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Take your evenings back.</h2>
            <p className="text-xl text-slate-600 mb-10">
              Join thousands of providers who have eliminated their documentation backlog. Try TouchScribe free for 14 days. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button size="lg" className="rounded-full text-lg h-16 px-10 shadow-xl shadow-primary/25">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg h-16 px-10 bg-white">
                Request Enterprise Demo
              </Button>
            </div>
            <p className="text-sm text-slate-500 font-medium">
              100% Satisfaction Guarantee. Cancel anytime.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Stethoscope className="text-primary w-6 h-6" />
                <span className="font-semibold text-xl text-white">TouchScribe</span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed">
                Empowering healthcare professionals to focus on patients, not paperwork.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">EHR Integrations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} TouchScribe Medical SaaS. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z" clipRule="evenodd" />
    </svg>
  );
}