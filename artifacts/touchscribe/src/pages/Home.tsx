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
  TrendingUp,
  Zap,
  Receipt,
  ClipboardList,
  Users,
  BarChart2,
  Building2,
  Video,
  Briefcase,
  Award,
  Layers,
  Globe,
  LifeBuoy
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
            <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
            <a href="#proof" className="hover:text-primary transition-colors">Results</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors hidden md:block">Log in</a>
            <Button className="rounded-full px-6">Book a Demo</Button>
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
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ml-[0px] mr-[0px] mt-[0px] mb-[0px] pl-[30px] pr-[30px]">
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
                  className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-4"
                >
                  Less burnout.<br /><span className="text-primary">Give time back to your patients.</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-slate-600 mb-4 max-w-xl text-[26px] font-semibold"
                >
                  Accurate documentation and stronger revenue — handled by experts who work alongside your team.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="rounded-full text-base h-14 px-8 shadow-lg shadow-primary/20 font-semibold"
                  >
                    Book a Free Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full text-base h-14 px-8 bg-white/80 hover:bg-white border-slate-200 text-slate-700 hover:text-primary group"
                  >
                    <PlayCircle className="mr-2 w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    See How It Works
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
                  className="rounded-[2rem] shadow-2xl object-cover w-full max-w-lg aspect-[4/5] lg:aspect-[3/4] mt-[0px] mb-[0px] pl-[0px] pr-[0px] ml-[70px] mr-[70px]"
                />

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
                Problem → Solution
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900">Where Practices Lose Time & Revenue  And How We Fix It</motion.h2>
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
                  problem: "Charting taking too much time—and still leading to errors?",
                  solutionTitle: "AI-Assisted Virtual Scribing + Human QA",
                  desc: "Accurate, compliant notes completed in real time, so physicians can stay focused on patients—not paperwork.",
                },
                {
                  icon: Activity,
                  problem: "Your EHR slowing your team down instead of helping them?",
                  solutionTitle: "Structured EHR Documentation Optimization",
                  desc: "Cleaner workflows that reduce clicks, save time, and bring consistency across every record.",
                },
                {
                  icon: Clock,
                  problem: "Prior authorizations delaying care and disrupting operations?",
                  solutionTitle: "Prior Authorization (RFA) Management",
                  desc: "Complete, compliant submissions that speed up approvals and reduce back-and-forth.",
                },
                {
                  icon: TrendingDown,
                  problem: "Revenue slipping through the cracks due to billing errors or denials?",
                  solutionTitle: "Medical Billing & Revenue Cycle Management",
                  desc: "End-to-end billing support that reduces denials and keeps your cash flow predictable.",
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
                        <div>
                          <p className="text-sm font-bold text-primary mb-1.5 leading-snug">
                            {item.solutionTitle}
                          </p>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
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
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: Mic,
                  color: "bg-emerald-50",
                  iconColor: "text-emerald-600",
                  title: "Virtual Medical Scribing",
                  desc: "Real-time charting with AI support and human QA to reduce physician workload.",
                  highlights: ["Ambient AI listening", "SOAP note generation", "Multi-specialty support"],
                },
                {
                  icon: FileText,
                  color: "bg-blue-50",
                  iconColor: "text-blue-600",
                  title: "EHR Documentation",
                  desc: "Structured, accurate documentation aligned with your workflow.",
                  highlights: ["Epic, Cerner & 50+ EHRs", "QA-reviewed records", "Real-time sync"],
                },
                {
                  icon: ShieldCheck,
                  color: "bg-amber-50",
                  iconColor: "text-amber-600",
                  title: "Prior Authorization",
                  desc: "Complete, compliant submissions that improve approval speed.",
                  highlights: ["End-to-end submissions", "Real-time tracking", "Appeals support"],
                },
                {
                  icon: Receipt,
                  color: "bg-violet-50",
                  iconColor: "text-violet-600",
                  title: "Medical Billing & Revenue Cycle",
                  desc: "Clean claims, reduced denials, and predictable cash flow.",
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
                    "Real-time AI-assisted scribing",
                    "Human QA for accuracy and context",
                    "Reduced after-hours charting",
                  ],
                  outcome: "Faster documentation, fewer errors, more patient time",
                },
                {
                  icon: FileText,
                  accent: "text-blue-600",
                  accentBg: "bg-blue-50",
                  title: "EHR Documentation Expertise",
                  bullets: [
                    "Experience across major EHR platforms",
                    "Specialty-aligned standards",
                    "Clean, structured records",
                  ],
                  outcome: "Consistent, audit-ready documentation",
                },
                {
                  icon: ShieldCheck,
                  accent: "text-violet-600",
                  accentBg: "bg-violet-50",
                  title: "Prior Authorization / RFA",
                  bullets: [
                    "Accurate medical necessity documentation",
                    "End-to-end authorization handling",
                    "Reduced denials",
                  ],
                  outcome: "Faster approvals, smoother workflows",
                },
                {
                  icon: Receipt,
                  accent: "text-rose-600",
                  accentBg: "bg-rose-50",
                  title: "Medical Billing / Revenue Cycle",
                  bullets: [
                    "Clean coding and claim submission",
                    "Denial management",
                    "Revenue optimization",
                  ],
                  outcome: "Faster reimbursements and stable cash flow",
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

            {/* Bottom Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 max-w-5xl mx-auto"
            >
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 py-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                {[
                  "HIPAA-Compliant",
                  "Scalable",
                  "Multi-specialty",
                  "50–70% workload reduction",
                ].map((label) => (
                  <div key={label} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. How It Works */}
        <section id="how-it-works" className="py-20 bg-white overflow-hidden ml-[70px] mr-[70px] mt-[0px] mb-[0px] pl-[0px] pr-[0px] pt-[40px] pb-[40px]">
          <div className="container mx-auto px-4">

            {/* Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Our Process
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How TouchScribe Works
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-500 text-lg leading-relaxed">
                From Setup to Full Workflow Optimization — Built to Reduce Operational Burden
              </motion.p>
            </motion.div>

            {/* ── Desktop: Wave timeline ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="hidden md:flex justify-around items-stretch"
              style={{ height: '420px' }}
            >
              {[
                { icon: ClipboardList, step: "01", title: "Workflow Setup",              desc: "We identify where time, revenue, and efficiency are being lost and design a custom plan.",                     isTop: true  },
                { icon: Users,         step: "02", title: "Team Assignment + Integration", desc: "Trained specialists integrate into your systems without disruption.",                                               isTop: false },
                { icon: Zap,           step: "03", title: "Execution",                    desc: "We handle documentation, EHR workflows, prior authorizations, and billing together.",                               isTop: true  },
                { icon: BarChart2,     step: "04", title: "Optimization",                 desc: "We continuously improve accuracy, compliance, and performance.",                                                    isTop: false },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`flex flex-col items-center w-1/4 ${item.isTop ? 'justify-end pb-16' : 'justify-start pt-16'}`}
                >
                  {/* Label above node (steps 1 & 3) */}
                  {item.isTop && (
                    <div className="text-center px-3 mb-5">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{item.step}</span>
                      <h3 className="text-sm font-bold text-slate-900 mt-1.5 mb-1 leading-snug">{item.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  )}

                  {/* Node */}
                  <div className="group relative w-16 h-16 rounded-full bg-white border-2 border-primary/40 shadow-lg shadow-primary/10 flex items-center justify-center hover:border-primary hover:shadow-primary/30 hover:scale-110 transition-all duration-300 cursor-default shrink-0">
                    <div className="absolute inset-0 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300" />
                    <item.icon className="w-6 h-6 text-primary relative z-10" />
                  </div>

                  {/* Label below node (steps 2 & 4) */}
                  {!item.isTop && (
                    <div className="text-center px-3 mt-5">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{item.step}</span>
                      <h3 className="text-sm font-bold text-slate-900 mt-1.5 mb-1 leading-snug">{item.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* ── Mobile: vertical timeline ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="md:hidden relative pl-14"
            >
              <div className="absolute left-5 top-2 bottom-2 w-px border-l-2 border-dashed border-primary/30" />
              {[
                { icon: ClipboardList, step: "01", title: "Workflow Setup",               desc: "We identify where time, revenue, and efficiency are being lost and design a custom plan." },
                { icon: Users,         step: "02", title: "Team Assignment + Integration", desc: "Trained specialists integrate into your systems without disruption." },
                { icon: Zap,           step: "03", title: "Execution",                    desc: "We handle documentation, EHR workflows, prior authorizations, and billing together." },
                { icon: BarChart2,     step: "04", title: "Optimization",                 desc: "We continuously improve accuracy, compliance, and performance." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative flex items-start gap-5 mb-10 last:mb-0">
                  <div className="absolute -left-9 top-0 w-11 h-11 rounded-full bg-white border-2 border-primary/50 shadow-md flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{item.step}</span>
                    <h3 className="text-base font-bold text-slate-900 mt-1 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-center text-slate-400 text-sm italic tracking-wide pl-[1px] pr-[1px] pt-[0px] pb-[0px] mb-[0px] mt-[90px]"
            >
              From the first consultation to full-scale support, TouchScribe works as an extension of your practice — not just another service provider.
            </motion.p>

          </div>
        </section>

        {/* 7. Proof / Results */}
        <section id="proof" className="py-24 bg-slate-50">
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
                Proven Results
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Real Clinical Impact. Measurable Outcomes.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-500 text-lg leading-relaxed">
                Measurable improvements across documentation, throughput, and revenue — backed by data from practices we serve.
              </motion.p>
            </motion.div>

            {/* Metrics grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {[
                {
                  icon: Clock,
                  metric: "50–70%",
                  label: "Reduction in Documentation Time",
                  desc: "Hours of charting reclaimed every week.",
                  accent: "text-emerald-600",
                  accentBg: "bg-emerald-50",
                },
                {
                  icon: Users,
                  metric: "20–30%",
                  label: "Increased Patient Throughput",
                  desc: "More appointments without longer hours.",
                  accent: "text-blue-600",
                  accentBg: "bg-blue-50",
                },
                {
                  icon: Receipt,
                  metric: "2× Faster",
                  label: "Reimbursements",
                  desc: "Cleaner claims and quicker payer turnaround.",
                  accent: "text-violet-600",
                  accentBg: "bg-violet-50",
                },
                {
                  icon: TrendingDown,
                  metric: "−65%",
                  label: "Reduced Admin Burden",
                  desc: "Less paperwork, more focus on patients.",
                  accent: "text-rose-600",
                  accentBg: "bg-rose-50",
                },
              ].map((m, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="h-full bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-7">
                      <div className={`w-11 h-11 rounded-xl ${m.accentBg} flex items-center justify-center mb-5`}>
                        <m.icon className={`w-5 h-5 ${m.accent}`} />
                      </div>
                      <div className={`text-4xl md:text-5xl font-extrabold ${m.accent} mb-2 tracking-tight`}>
                        {m.metric}
                      </div>
                      <div className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">{m.label}</div>
                      <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Case study — Before vs After */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <Card className="bg-white border border-slate-200 shadow-md overflow-hidden">
                <CardContent className="p-8 md:p-12">

                  {/* Case study label */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Case Study</span>
                    <span className="h-px flex-1 bg-slate-200" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    US-based Internal Medicine Practice
                  </h3>
                  <p className="text-slate-500 mb-10 max-w-2xl">
                    Before: Providers spending 3–4 hours daily on documentation. After: Reduced to under 1.5 hours.
                  </p>

                  {/* Before vs After comparison */}
                  <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-8">

                    {/* Before */}
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">Before</span>
                      <div className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-2 tracking-tight">3.2 hrs</div>
                      <div className="text-sm text-slate-500">spent on documentation per day</div>
                      {/* Bar */}
                      <div className="mt-6 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-400 rounded-full" style={{ width: '100%' }} />
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex md:flex-col items-center justify-center text-primary">
                      <ArrowRight className="w-8 h-8 md:rotate-0 rotate-90" />
                    </div>

                    {/* After */}
                    <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-7 text-center relative">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">After</span>
                      <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2 tracking-tight">1.0 hr</div>
                      <div className="text-sm text-slate-600">spent on documentation per day</div>
                      {/* Bar */}
                      <div className="mt-6 h-2 bg-primary/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '31%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Footer summary */}
                  <div className="mt-10 pt-8 border-t border-slate-100">
                    <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
                      {["Improved provider efficiency", "Faster chart completion", "Reduced burnout"].map((o) => (
                        <div key={o} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          {o}
                        </div>
                      ))}
                    </div>
                    <blockquote className="border-l-4 border-primary/30 pl-5 italic text-slate-600 text-sm leading-relaxed">
                      "TouchScribe significantly reduced our documentation load and improved turnaround time. The combination of human expertise and AI QA made a noticeable difference."
                      <footer className="mt-2 not-italic font-semibold text-slate-500 text-xs">— Practice Administrator, US-based Practice</footer>
                    </blockquote>
                  </div>

                </CardContent>
              </Card>
            </motion.div>

          </div>
        </section>

        {/* 7b. Industries */}
        <section className="py-24 bg-white border-t border-slate-100">
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
                Who We Serve
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Experience Built Inside Real Clinical Workflows
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-500 text-lg leading-relaxed">
                We've built our workflows from the ground up inside real clinical environments — so we understand your specialty's needs.
              </motion.p>
            </motion.div>

            {/* Industries grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12"
            >
              {[
                {
                  icon: Stethoscope,
                  title: "Internal Medicine",
                  desc: "Streamline complex documentation and reduce charting burden for internists.",
                  accent: "text-emerald-600",
                  accentBg: "bg-emerald-50",
                },
                {
                  icon: HeartPulse,
                  title: "Family Medicine",
                  desc: "High-volume, multi-concern visits handled with accuracy and speed.",
                  accent: "text-blue-600",
                  accentBg: "bg-blue-50",
                },
                {
                  icon: Zap,
                  title: "Urgent Care",
                  desc: "Fast, accurate documentation for urgent care's fast-paced environment.",
                  accent: "text-violet-600",
                  accentBg: "bg-violet-50",
                },
                {
                  icon: Building2,
                  title: "Multi-provider Groups",
                  desc: "Scalable support across multiple providers, locations, and specialties.",
                  accent: "text-rose-600",
                  accentBg: "bg-rose-50",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="h-full bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-7">
                      <div className={`w-12 h-12 rounded-2xl ${item.accentBg} flex items-center justify-center mb-5`}>
                        <item.icon className={`w-6 h-6 ${item.accent}`} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Button size="lg" className="rounded-full text-base h-14 px-8 shadow-lg shadow-primary/20 group">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

          </div>
        </section>

        {/* 8. Trust / Credibility */}
        <section className="py-24 bg-slate-50">
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
                Built on Trust
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Built for Healthcare. Designed for Trust.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-500 text-lg leading-relaxed">
                From data security to clinical accuracy, every part of TouchScribe is built to meet the standards healthcare demands.
              </motion.p>
            </motion.div>

            {/* Trust grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {[
                {
                  icon: ShieldCheck,
                  title: "HIPAA-Aligned Workflows",
                  desc: "Every workflow, from intake to delivery, is designed to meet HIPAA standards end-to-end.",
                  accent: "text-emerald-600",
                  accentBg: "bg-emerald-50",
                },
                {
                  icon: Lock,
                  title: "Secure Data Handling",
                  desc: "Encrypted in transit and at rest, with strict access controls and full audit logging.",
                  accent: "text-blue-600",
                  accentBg: "bg-blue-50",
                },
                {
                  icon: Users,
                  title: "Trained Specialists",
                  desc: "Certified medical scribes, coders, and QA reviewers — vetted, trained, and US-based oversight.",
                  accent: "text-violet-600",
                  accentBg: "bg-violet-50",
                },
                {
                  icon: CheckCircle2,
                  title: "AI + Human QA",
                  desc: "Every note passes AI checks plus human review before reaching your EHR — zero shortcuts.",
                  accent: "text-rose-600",
                  accentBg: "bg-rose-50",
                },
                {
                  icon: FileText,
                  title: "EHR Compatibility",
                  desc: "Native integrations with Epic, Cerner, Athena, eClinicalWorks, and 50+ other platforms.",
                  accent: "text-amber-600",
                  accentBg: "bg-amber-50",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="group h-full bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-7 flex items-start gap-5">
                      <div className={`w-12 h-12 rounded-2xl ${item.accentBg} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                        <item.icon className={`w-6 h-6 ${item.accent}`} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{item.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* 9. Risk Reversal */}
        <section className="py-24 bg-white border-t border-slate-100">
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
                Our Commitment
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Zero Risk. Full Flexibility.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-500 text-lg leading-relaxed">
                We earn your business every month. No lock-ins, no surprises — just results you can measure.
              </motion.p>
            </motion.div>

            {/* 4-up grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {[
                {
                  icon: FileText,
                  title: "No Long-Term Contracts",
                  desc: "Month-to-month engagements. Stay because it works — not because you're stuck.",
                },
                {
                  icon: Users,
                  title: "Flexible Engagement Models",
                  desc: "Scale up or down based on patient volume, specialty needs, or seasonal demand.",
                },
                {
                  icon: ClipboardList,
                  title: "Guided Onboarding",
                  desc: "Dedicated success team gets you live in 48 hours with hands-on training and support.",
                },
                {
                  icon: TrendingUp,
                  title: "Performance-Driven Approach",
                  desc: "Transparent KPIs and monthly reviews. We measure what matters, then improve it.",
                },
                {
                  icon: Activity,
                  title: "7-Day Free Pilot Trial",
                  desc: "Try TouchScribe risk-free for 7 days. See real results before you commit.",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="h-full bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-7 text-center">
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* 10. Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10"></div>
          {/* Decorative gradient blobs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="container mx-auto px-4 text-center max-w-3xl relative"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              Get Started Today
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight"
            >
              Ready to Reduce Burnout and Improve Efficiency?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-600 mb-10 leading-relaxed">
              See how TouchScribe fits into your workflow—before making any commitment.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <Button size="lg" className="rounded-full text-base md:text-lg h-14 md:h-16 px-8 md:px-10 shadow-xl shadow-primary/25 group">
                Book a Free Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base md:text-lg h-14 md:h-16 px-8 md:px-10 bg-white border-slate-300 hover:border-primary hover:text-primary">
                Get a Custom Workflow Plan
              </Button>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-sm text-slate-500 font-medium">
              No obligation. No pressure. Just a clear understanding of what works best for your practice.
            </motion.p>
          </motion.div>
        </section>
      </main>
      {/* 11. Footer CTA Strip — quick trust */}
      <section className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 max-w-5xl mx-auto"
          >
            {[
              { icon: Award, title: "20+", subtitle: "Experience" },
              { icon: Layers, title: "20+", subtitle: "Specialties" },
              { icon: Globe, title: "US Healthcare", subtitle: "Expertise" },
              { icon: LifeBuoy, title: "End-to-End", subtitle: "Support" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-center justify-center gap-4 text-center md:text-left"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/15 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-base md:text-lg font-bold text-white leading-tight">{item.title}</div>
                  <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wide">{item.subtitle}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
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