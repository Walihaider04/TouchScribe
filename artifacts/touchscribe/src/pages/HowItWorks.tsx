import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  Users,
  Zap,
  BarChart2,
  CheckCircle2,
  Mic,
  FileText,
  ShieldCheck,
  Receipt,
  Clock,
  Activity,
  HeartPulse,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const STEPS = [
  {
    icon: ClipboardList,
    step: "01",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    title: "Discovery & Workflow Setup",
    tagline: "We learn your practice inside out before touching anything.",
    description:
      "Our onboarding team conducts a structured discovery session with your practice. We map your current documentation workflows, identify where time and revenue are being lost, and design a fully custom implementation plan tailored to your specialty and EHR.",
    details: [
      "Specialty-specific workflow audit",
      "EHR system compatibility review",
      "Custom implementation plan created",
      "HIPAA Business Associate Agreement signed",
      "Go-live timeline confirmed (typically 48 hours)",
    ],
  },
  {
    icon: Users,
    step: "02",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
    title: "Team Assignment + System Integration",
    tagline: "The right people, in the right systems, with zero disruption.",
    description:
      "We assign a dedicated team of trained clinical specialists to your practice. They integrate securely into your EHR and communication tools — no new software to install, no workflow disruption. Your team barely notices the transition.",
    details: [
      "Dedicated specialists assigned to your practice",
      "Secure EHR access provisioned and tested",
      "Staff introduction and workflow alignment",
      "Real-time communication channels set up",
      "Pilot period begins with close monitoring",
    ],
  },
  {
    icon: Zap,
    step: "03",
    color: "bg-violet-50",
    iconColor: "text-violet-600",
    borderColor: "border-violet-200",
    title: "Execution Across All 4 Pillars",
    tagline: "Documentation, EHR, prior auth, and billing — handled together.",
    description:
      "This is where TouchScribe takes over. Our team handles all four pillars of clinical operations simultaneously: real-time virtual scribing, structured EHR documentation, prior authorization submissions, and medical billing. Everything runs in parallel so nothing falls through the cracks.",
    details: [
      "AI-assisted virtual scribing on every encounter",
      "Structured SOAP and specialty-specific notes",
      "Prior auth submissions within 24 hours",
      "Clean claim generation and submission",
      "Human QA review on every document",
    ],
  },
  {
    icon: BarChart2,
    step: "04",
    color: "bg-rose-50",
    iconColor: "text-rose-600",
    borderColor: "border-rose-200",
    title: "QA, Optimization & Scaling",
    tagline: "We don't set and forget — we continuously improve.",
    description:
      "TouchScribe runs monthly performance reviews with your team. We track documentation accuracy, turnaround times, denial rates, and provider satisfaction. As your practice grows, we scale with you — adding providers, locations, or services without a new implementation cycle.",
    details: [
      "Monthly KPI and performance review",
      "Denial rate tracking and appeals management",
      "Continuous scribe and billing team training",
      "Scalable to new providers or locations",
      "Dedicated account manager available anytime",
    ],
  },
];

const SERVICES = [
  {
    icon: Mic,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Virtual Medical Scribing (AI + Human QA)",
    how: "We combine the speed of AI with trained human oversight to deliver documentation that's accurate, complete, and ready in real time. Notes are completed during patient visits — not after hours. AI drafts the note, a human reviewer checks every entry for accuracy and compliance, and clean, structured records are delivered directly into your EHR. You finish your day with charts already done.",
  },
  {
    icon: FileText,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "EHR Documentation",
    how: "We handle your documentation in a way that aligns with your workflow — so your records stay accurate, complete, and easy to manage. Our team works inside your existing EHR (Epic, Cerner, Athenahealth, eClinicalWorks, NextGen, Allscripts, and more), producing structured consultation notes, discharge summaries, and medical reports tailored to your specialty. Less time in the EHR. Fewer corrections. Better first-pass accuracy.",
  },
  {
    icon: ShieldCheck,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "Prior Authorization & RFA",
    how: "We manage the full authorization lifecycle — so submissions are complete, compliant, and processed faster. Our team handles insurance verification, accurate submissions aligned with payer criteria, proactive follow-ups, and denial reduction. The result: faster approval turnaround, fewer resubmissions, smoother patient flow, and less administrative burden on your staff.",
  },
  {
    icon: Receipt,
    color: "bg-violet-50",
    iconColor: "text-violet-600",
    title: "Medical Billing & Revenue Cycle",
    how: "We manage your entire billing lifecycle to ensure claims are accurate, timely, and optimized for reimbursement. From charge capture and coding support to denial management, payment posting, and accounts receivable follow-up — we close the gaps where most practices quietly lose revenue. Fewer denials, faster cash flow, and full visibility into billing performance.",
  },
];

const FAQS = [
  {
    q: "How long does onboarding take?",
    a: "Most practices are fully live within 48 hours of signing. Our team handles the EHR setup, team assignment, and workflow alignment so you don't have to do any of the heavy lifting.",
  },
  {
    q: "Do I need to install any software?",
    a: "No. TouchScribe works inside your existing EHR and uses your existing communication tools. There is nothing to download or configure on your end.",
  },
  {
    q: "How does real-time scribing work for telehealth?",
    a: "Our scribes can join any telehealth platform securely. They listen to the encounter, complete the note in your EHR, and have it ready for your review before the next patient.",
  },
  {
    q: "What EHR systems do you support?",
    a: "We support 50+ EHR platforms including Epic, Cerner, Athena, eClinicalWorks, NextGen, Greenway, and more. If you use it, we can work in it.",
  },
  {
    q: "Is my patient data secure?",
    a: "Yes. All operations are fully HIPAA compliant. We sign a Business Associate Agreement with every practice, use encrypted connections, and never store PHI outside of your approved systems.",
  },
  {
    q: "What if I want to cancel?",
    a: "There are no long-term contracts. You can scale up, scale down, or cancel with 30 days' notice. We earn your business every month.",
  },
];

export default function HowItWorks() {
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
              Our Process
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight"
            >
              From Setup to Full Workflow Optimization
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto"
            >
              TouchScribe doesn't just hand you a tool — we embed a dedicated team into your practice and run every part of your clinical documentation operation, end to end.
            </motion.p>
          </div>
        </div>

        {/* 4-step process */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="space-y-10"
            >
              {STEPS.map((step, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className={`border ${step.borderColor} shadow-sm hover:shadow-md transition-shadow duration-300`}>
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-[auto_1fr] gap-0">
                        {/* Step number + icon */}
                        <div className={`${step.color} p-8 flex flex-col items-center justify-start gap-4 md:w-40 rounded-t-xl md:rounded-l-xl md:rounded-tr-none`}>
                          <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                            <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                          </div>
                          <span className={`text-3xl font-black ${step.iconColor} opacity-40 leading-none`}>{step.step}</span>
                        </div>
                        {/* Content */}
                        <div className="p-8">
                          <h2 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h2>
                          <p className={`text-sm font-semibold mb-4 ${step.iconColor}`}>{step.tagline}</p>
                          <p className="text-slate-600 leading-relaxed mb-6">{step.description}</p>
                          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                            {step.details.map((d) => (
                              <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How each service works */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                The Four Pillars
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How Each Service Actually Works
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-500 text-lg">
                Behind every service is a trained team, a defined workflow, and a QA layer — not just software.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6"
            >
              {SERVICES.map((svc, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="h-full bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className={`w-12 h-12 rounded-2xl ${svc.color} flex items-center justify-center mb-5`}>
                        <svc.icon className={`w-6 h-6 ${svc.iconColor}`} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-3">{svc.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{svc.how}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline visual */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="text-center mb-14"
            >
              <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Timeline</motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900">
                What Your First 30 Days Look Like
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
              className="relative"
            >
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/10 md:left-1/2" />
              {[
                { day: "Day 1", icon: ClipboardList, title: "Discovery Call", desc: "We map your workflow, specialty, and EHR setup." },
                { day: "Day 2", icon: Users, title: "Team Assigned", desc: "Your dedicated specialist team is confirmed and briefed." },
                { day: "Day 2–3", icon: Activity, title: "System Integration", desc: "Secure EHR access is provisioned and tested end-to-end." },
                { day: "Day 3", icon: Zap, title: "Go Live", desc: "Your first encounters are scribed. Notes appear in your EHR same-day." },
                { day: "Week 2", icon: HeartPulse, title: "Check-In Review", desc: "We review accuracy, timing, and any workflow adjustments needed." },
                { day: "Day 30", icon: BarChart2, title: "First Performance Report", desc: "KPIs reviewed: documentation time saved, claim accuracy, PA turnaround." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`relative flex items-start gap-6 mb-10 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse md:text-right'} pl-14 md:pl-0`}
                >
                  {/* Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-10 h-10 rounded-full bg-white border-2 border-primary shadow-md flex items-center justify-center shrink-0 z-10">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  {/* Content */}
                  <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:ml-auto md:pl-10' : 'md:mr-auto md:pr-10'}`}>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{item.day}</span>
                    <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="text-center mb-14"
            >
              <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">FAQ</motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900">
                Common Questions
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {FAQS.map((faq, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="bg-white border border-slate-200 shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        {faq.q}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed pl-7">{faq.a}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 bg-slate-900 text-white text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="container mx-auto max-w-2xl"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Ready to see it in action?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 text-lg mb-8 leading-relaxed">
              Book a free 30-minute demo and we'll walk you through the full workflow — tailored to your specialty.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full h-14 px-10 text-base font-semibold shadow-lg shadow-primary/30"
                onClick={() => navigate("/book-demo?type=service")}
              >
                Book Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-10 text-base border-slate-600 text-white hover:bg-white/10 hover:border-white"
                onClick={() => navigate("/")}
              >
                Back to Home
              </Button>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-slate-500 text-sm mt-6">
              No obligation. No pressure. Live in 48 hours.
            </motion.p>
          </motion.div>
        </section>

      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} TouchScribe. All rights reserved.
      </footer>
    </div>
  );
}
