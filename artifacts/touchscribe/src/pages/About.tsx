import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
  ArrowLeft,
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Users,
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
  { value: "30+", label: "Sub-specialties Served" },
  { value: "98.7%", label: "Documentation Accuracy" },
  { value: "20+", label: "Years of Experience" },
  { value: "70%", label: "Workload Reduction" },
];

const VALUES = [
  {
    icon: HeartPulse,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Our Mission",
    desc: "To reduce administrative burden for healthcare providers by delivering accurate, compliant, and intelligent clinical and revenue support — so physicians spend more time with patients and less time on documentation.",
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
    title: "Deep Expertise Beyond Outsourcing",
    desc: "We've worked across 30+ sub-specialties, supporting providers in fast-paced, high-precision clinical environments — from office visits and operative notes to QME work and academic documentation.",
  },
  {
    icon: Users,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "Human + AI, Not AI Alone",
    desc: "We combine the speed of AI with trained human oversight. Every note is reviewed for accuracy and compliance before it reaches your EHR — technology supports the process, humans ensure the outcome.",
  },
];

const TEAM_VALUES = [
  {
    icon: Award,
    title: "Accurate",
    desc: "Every note, claim, and submission is held to a 98%+ accuracy standard. We eliminate the small errors that quietly cost practices time and revenue.",
  },
  {
    icon: HeartPulse,
    title: "Compliant",
    desc: "All workflows operate under strict HIPAA compliance and payer-specific documentation standards — reducing audit risk and denial rates.",
  },
  {
    icon: ShieldCheck,
    title: "Scalable",
    desc: "Whether you're a solo provider or a multi-location group, TouchScribe scales with your practice — no new implementation cycles needed.",
  },
  {
    icon: BarChart2,
    title: "Built for US Healthcare",
    desc: "Deep familiarity with US billing codes, payer rules, and documentation standards — built specifically for how American practices operate.",
  },
];

const SERVICES_BRIEF = [
  { icon: Mic,        color: "bg-emerald-50", iconColor: "text-emerald-600", title: "Virtual Medical Scribing" },
  { icon: FileText,   color: "bg-blue-50",    iconColor: "text-blue-600",    title: "EHR Documentation" },
  { icon: ShieldCheck,color: "bg-amber-50",   iconColor: "text-amber-600",   title: "Prior Authorization" },
  { icon: BarChart2,  color: "bg-violet-50",  iconColor: "text-violet-600",  title: "Medical Billing & RCM" },
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
              Healthcare providers didn't enter this field to spend hours finishing charts, chasing approvals, or dealing with billing issues — yet that's where a significant portion of their time goes. With over 20 years of combined experience in US healthcare documentation and revenue workflows, we built TouchScribe to change that.
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

        {/* Origin story */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container mx-auto max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={staggerContainer}
              >
                <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                  Our Story
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-5">
                  Experience Built Inside Real Clinical Workflows
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-slate-600 leading-relaxed mb-4">
                  Over the past 20+ years, our team has worked alongside physicians, clinics, and healthcare organizations — supporting documentation, billing, and day-to-day operations in real clinical environments, not just in theory.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-slate-600 leading-relaxed mb-4">
                  We've supported Internal Medicine practices, Family Medicine clinics, Urgent Care centers, multi-provider specialty groups, and physicians affiliated with leading US hospitals. This is hands-on, real-world experience — delivered consistently at scale.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-slate-600 leading-relaxed">
                  If your workflow is slowing you down, it's time to fix what's behind it. TouchScribe brings the structure, expertise, and reliability your practice needs to move forward — without the overhead.
                </motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={staggerContainer}
                className="space-y-4"
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-20 px-4 bg-white">
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
                TouchScribe isn't a single service — it's a fully integrated extension of your practice. Together, these four pillars remove friction across your entire clinical and financial workflow.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {SERVICES_BRIEF.map((svc, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="h-full bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                    <CardContent className="p-8">
                      <div className={`w-14 h-14 mx-auto rounded-2xl ${svc.color} flex items-center justify-center mb-4`}>
                        <svc.icon className={`w-7 h-7 ${svc.iconColor}`} />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">{svc.title}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mt-8"
            >
              <button
                onClick={() => navigate("/how-it-works")}
                className="text-sm font-semibold text-primary hover:underline underline-offset-4 transition-colors"
              >
                See exactly how each service works →
              </button>
            </motion.div>
          </div>
        </section>

        {/* Our values */}
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
                Our Values
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900">
                Why Providers Choose TouchScribe
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-6"
            >
              {TEAM_VALUES.map((val, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="h-full bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-7 flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                        <val.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-2">{val.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{val.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-5xl text-primary/20 font-serif leading-none mb-6">"</motion.div>
              <motion.blockquote variants={fadeInUp} className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-8">
                TouchScribe significantly reduced our documentation load and improved turnaround time. The combination of human expertise and AI quality assurance made a noticeable difference in our day-to-day operations.
              </motion.blockquote>
              <motion.footer variants={fadeInUp} className="text-sm font-semibold text-slate-500">
                — Practice Administrator, US-based Multi-provider Practice
              </motion.footer>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
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
            <motion.p variants={fadeInUp} className="text-slate-400 text-lg mb-8 leading-relaxed">
              We don't just support your operations — we take responsibility for them. From your first patient note to final reimbursement, TouchScribe works behind the scenes so you can focus on patient care, reduce administrative burden, and improve financial performance.
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
