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
  { value: "20+", label: "Specialties Served" },
  { value: "98.7%", label: "Documentation Accuracy" },
  { value: "48 hrs", label: "Average Go-Live Time" },
  { value: "70%", label: "Workload Reduction" },
];

const VALUES = [
  {
    icon: HeartPulse,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Built by healthcare professionals",
    desc: "Our founding team includes physicians, clinical coders, and practice managers who understood the problem before building the solution.",
  },
  {
    icon: ShieldCheck,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "HIPAA-first from day one",
    desc: "Every workflow, system, and team member operates under strict HIPAA compliance. We sign a BAA with every practice we work with.",
  },
  {
    icon: Users,
    color: "bg-violet-50",
    iconColor: "text-violet-600",
    title: "Human + AI, not AI alone",
    desc: "We believe AI is a force multiplier, not a replacement. Every note is reviewed by a trained human before it reaches your EHR.",
  },
  {
    icon: Globe,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "US healthcare expertise",
    desc: "Deep familiarity with US billing codes, payer rules, and documentation standards across primary care and specialty practices.",
  },
];

const TEAM_VALUES = [
  {
    icon: Award,
    title: "Excellence in every note",
    desc: "We hold ourselves to a 98%+ accuracy standard on every document that leaves our team — no exceptions.",
  },
  {
    icon: HeartPulse,
    title: "Clinician wellbeing matters",
    desc: "Physician burnout is a crisis. We measure our success by how much time we give back to care teams.",
  },
  {
    icon: ShieldCheck,
    title: "Trust through transparency",
    desc: "Monthly KPI reviews, open communication, and no lock-in contracts — because we earn your business every month.",
  },
  {
    icon: BarChart2,
    title: "Continuous improvement",
    desc: "We review every account monthly and retrain our teams constantly so performance only goes in one direction.",
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
              We built TouchScribe to give clinicians their time back.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Founded by healthcare professionals who lived the problem — and built a solution that actually works inside real clinical environments.
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
                  Born out of frustration. Built for impact.
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-slate-600 leading-relaxed mb-4">
                  TouchScribe was founded by healthcare professionals who experienced firsthand how administrative burden was eroding the patient-provider relationship. Physicians were spending more time on documentation than on the people in front of them — leading to burnout, errors, and declining care quality.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-slate-600 leading-relaxed mb-4">
                  We combined AI-assisted scribing with dedicated human specialists to build a service that actually works inside real clinical environments — not just in demos. Every workflow we design starts with the question: does this give time back to the clinician?
                </motion.p>
                <motion.p variants={fadeInUp} className="text-slate-600 leading-relaxed">
                  Today, we support practices across 20+ specialties, handling documentation, EHR workflows, prior authorizations, and billing so care teams can do what they trained to do — care for patients.
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
                Four services. One integrated team.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-500 text-lg max-w-2xl mx-auto">
                We don't just offer tools — we embed a trained team into your practice to run every aspect of clinical documentation.
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
                What guides everything we do
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
              Want to see TouchScribe in action?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 text-lg mb-8 leading-relaxed">
              Book a free 30-minute demo tailored to your specialty and EHR.
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
