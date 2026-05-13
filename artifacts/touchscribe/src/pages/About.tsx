import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
  ArrowLeft,
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Globe,
  CheckCircle2,
  Mic,
  FileText,
  BarChart2,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const STATS = [
  { value: "20+", label: "Specialties Served" },
  { value: "98.7%", label: "Documentation Accuracy" },
  { value: "48 hrs", label: "Average Go-Live Time" },
  { value: "70%", label: "Workload Reduction" },
];

const EXPERIENCE_LIST = [
  "Internal Medicine Practices (US-based)",
  "Family Medicine Clinics",
  "Urgent Care Centers",
  "Multi-provider Specialty Groups",
  "Physicians affiliated with leading US hospitals",
];

const EXPERTISE_BULLETS = [
  "Office Visits & Follow-Up Notes",
  "Operative Notes & Discharge Summaries",
  "Letters of Recommendation & Clinical Reports",
  "Research Papers & Academic Documentation",
  "QME (Qualified Medical Evaluation) Work",
];

const VALUES = [
  {
    icon: HeartPulse,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Our Mission",
    desc: "Our mission is to reduce administrative burden for healthcare providers by delivering accurate, compliant, and intelligent clinical and revenue support. We help physicians spend more time with patients and less time on documentation — without compromising quality, compliance, or financial performance.",
  },
  {
    icon: Globe,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Our Vision",
    desc: "To become a leading global partner in AI-augmented healthcare operations, where documentation, billing, and authorization processes work seamlessly in the background — allowing providers to focus fully on patient care.",
  },
  {
    icon: ShieldCheck,
    color: "bg-violet-50",
    iconColor: "text-violet-600",
    title: "Deep Expertise That Goes Beyond Outsourcing",
    desc: "We've worked across 30+ sub-specialties, supporting providers in fast-paced, high-precision clinical environments.",
  },
];

const PILLARS = [
  {
    icon: Mic,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Virtual Medical Scribing + AI QA",
    desc: "Real-time documentation powered by AI speed and human precision",
  },
  {
    icon: FileText,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "EHR Documentation",
    desc: "Structured, compliant, and specialty-specific charting within your workflow",
  },
  {
    icon: ShieldCheck,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "Prior Authorization & RFA",
    desc: "Accurate, complete submissions that reduce delays and denials",
  },
  {
    icon: BarChart2,
    color: "bg-violet-50",
    iconColor: "text-violet-600",
    title: "Medical Billing & Revenue Cycle",
    desc: "Clean claims, faster reimbursements, and stronger cash flow control",
  },
];

const CHALLENGE_BULLETS = [
  "Burnout from end-of-day charting",
  "Revenue loss from denied or under-coded claims",
  "Delays caused by incomplete authorizations",
];

const SOLUTION_BULLETS = [
  "Accurate",
  "Compliant",
  "Scalable",
  "Built specifically for US healthcare workflows",
];

const PARTNER_BULLETS = [
  "Focus on patient care",
  "Reduce administrative burden",
  "Improve financial performance",
];

export default function About() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Stethoscope className="text-white w-5 h-5" />
            </div>
            <span className="font-semibold text-lg tracking-tight text-slate-900">TouchScribe</span>
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
            <Button className="rounded-full px-6" onClick={() => navigate("/book-demo?type=demo")}>
              Book a Free Demo
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">

        {/* Hero */}
        <div className="bg-gradient-to-br from-primary/5 via-blue-50/40 to-white border-b border-slate-100 py-16 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="text-sm font-semibold text-primary uppercase tracking-widest mb-3"
            >
              About Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight"
            >
              Built on Experience. Designed to Fix What's Slowing Healthcare Workflows Down.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Healthcare providers didn't enter this field to spend hours finishing charts, chasing approvals, or dealing with billing issues — yet that's where a significant portion of their time goes. TouchScribe was built to change that. With over 20 years of combined experience in US healthcare documentation and revenue workflows, we understand the real pressure behind every incomplete chart, denied claim, and delayed authorization.
            </motion.p>
          </div>
        </div>

        {/* Stats */}
        <section className="py-14 px-4 border-b border-slate-100 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {STATS.map(({ value, label }) => (
                <motion.div key={label} variants={fadeInUp} className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">{value}</div>
                  <div className="text-sm text-slate-500 font-medium">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Layer */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Our Experience
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-4">
                Experience Built Inside Real Clinical Workflows
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
                Over the past 20+ years, our team has worked alongside physicians, clinics, and healthcare organizations — supporting documentation, billing, and day-to-day operations in real clinical environments.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-3">
                {EXPERIENCE_LIST.map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>

        {/* Mission / Vision / Expertise */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {VALUES.map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">What We've Mastered Over the Years</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">
                    Our experience spans the full spectrum of clinical and administrative documentation:
                  </p>
                  <ul className="space-y-2 mb-3">
                    {EXPERTISE_BULLETS.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    This is hands-on, real-world experience — delivered consistently at scale.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Four Core Pillars */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="text-center mb-14"
            >
              <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                What We Do
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Built Around 4 Core Pillars
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-500 text-lg max-w-2xl mx-auto">
                TouchScribe isn't a single service — it's a fully integrated extension of your practice, built on four essential pillars:
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {PILLARS.map((svc, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="h-full bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                    <CardContent className="p-8">
                      <div className={`w-14 h-14 mx-auto rounded-2xl ${svc.color} flex items-center justify-center mb-4`}>
                        <svc.icon className={`w-7 h-7 ${svc.iconColor}`} />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">{svc.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{svc.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mt-8 text-slate-500 text-base"
            >
              Together, these pillars remove friction across your entire clinical and financial workflow.
            </motion.p>
          </div>
        </section>

        {/* Why Providers Choose TouchScribe */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Our Values
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Providers Choose TouchScribe
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-600 text-lg mb-6">
                Because we understand what's at stake. The challenges are real:
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-3 mb-8">
                {CHALLENGE_BULLETS.map((b) => (
                  <motion.li key={b} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{b}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p variants={fadeInUp} className="text-slate-600 text-lg mb-6">
                And we solve them with a system that is:
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-3">
                {SOLUTION_BULLETS.map((b) => (
                  <motion.li key={b} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{b}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>

        {/* Long-Term Partner CTA */}
        <section className="py-20 px-4 bg-slate-900 text-white text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="container mx-auto max-w-2xl"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              More Than a Service — A Long-Term Partner
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 text-lg mb-6 leading-relaxed">
              We don't just support your operations — we take responsibility for them. From your first patient note to final reimbursement, TouchScribe works behind the scenes so you can:
            </motion.p>
            <motion.ul variants={staggerContainer} className="space-y-2 mb-8 inline-flex flex-col items-start text-left">
              {PARTNER_BULLETS.map((b) => (
                <motion.li key={b} variants={fadeInUp} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-300">{b}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.p variants={fadeInUp} className="text-slate-400 text-base mb-8 leading-relaxed">
              If your workflow is slowing you down, it's time to fix what's behind it. TouchScribe brings the structure, expertise, and reliability your practice needs to move forward — without the overhead.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full h-14 px-10 text-base font-semibold shadow-lg shadow-primary/30"
                onClick={() => navigate("/book-demo?type=demo")}
              >
                Schedule a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-10 text-base border-slate-600 text-white hover:bg-white/10 hover:border-white"
                onClick={() => navigate("/how-it-works")}
              >
                See How It Works
              </Button>
            </motion.div>
          </motion.div>
        </section>

      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} TouchScribe. All rights reserved.
      </footer>
    </div>
  );
}
