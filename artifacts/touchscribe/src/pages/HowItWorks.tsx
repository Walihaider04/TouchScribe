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
    tagline: "We Identify Where Time, Revenue, and Efficiency Are Being Lost",
    description:
      "We start by understanding how your practice actually operates — your specialty, your EHR, and your day-to-day workflow. This allows us to pinpoint exactly where documentation delays, billing gaps, and authorization issues are slowing you down.",
    details: [
      "Specialty & EHR Assessment",
      "Documentation, Revenue & Workflow Gap Analysis",
      "Custom Support Plan Design",
    ],
    outcome: "Outcome: A streamlined workflow that removes friction instead of adding more steps.",
  },
  {
    icon: Users,
    step: "02",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
    title: "Team Assignment + System Integration",
    tagline: "Dedicated Experts who Fit Into Your Workflow",
    description:
      "We assign trained specialists who plug directly into your existing systems and processes — without disrupting how your team works.",
    details: [],
    outcome: "Outcome: A fully aligned support team — without the cost, hiring effort, or operational disruption.",
  },
  {
    icon: Zap,
    step: "03",
    color: "bg-violet-50",
    iconColor: "text-violet-600",
    borderColor: "border-violet-200",
    title: "Execution Across All 4 Pillars",
    tagline: "Full Operational Support Working Together",
    description:
      "We handle documentation, EHR workflows, prior authorizations, and billing as one connected system — so nothing falls through the cracks.",
    details: [
      "AI-Powered Scribing + Human QA",
      "Structured EHR Documentation",
      "Prior Authorization & RFA Management",
      "Billing & Revenue Cycle Optimization",
    ],
    outcome: "Outcome: Fewer delays, fewer errors, and a workflow that runs as one cohesive system.",
  },
  {
    icon: BarChart2,
    step: "04",
    color: "bg-rose-50",
    iconColor: "text-rose-600",
    borderColor: "border-rose-200",
    title: "QA, Optimization & Scaling",
    tagline: "Continuous Improvement That Protects Revenue & Reduces Workload",
    description:
      "We don't stop at execution. We continuously track performance, improve accuracy, and refine workflows as your practice grows.",
    details: [
      "Ongoing Quality Assurance",
      "Compliance & Error Reduction Monitoring",
      "Revenue & Workflow Performance Tracking",
    ],
    outcome: "",
  },
];

const FAQ_SECTIONS = [
  {
    label: "Workflow & Implementation",
    faqs: [
      {
        q: "Will this disrupt my current workflow?",
        a: "No. TouchScribe is designed to fit into your existing workflow — not replace it. We adapt to your EHR, documentation style, and clinical processes to ensure a smooth transition with minimal disruption.",
      },
      {
        q: "How long does onboarding take?",
        a: "Most practices are up and running within a few days to a couple of weeks, depending on complexity. Our guided onboarding ensures everything is aligned from day one.",
      },
      {
        q: "Do I need to change my EHR system?",
        a: "No. We work within your existing EHR and adapt to your setup. Our approach is workflow-aligned — not system-dependent.",
      },
    ],
  },
  {
    label: "Accuracy & Quality",
    faqs: [
      {
        q: "How do you ensure documentation accuracy?",
        a: "Every output goes through a structured QA process, combining trained healthcare professionals with AI-assisted validation — ensuring consistency, completeness, and compliance.",
      },
      {
        q: "What if there are errors?",
        a: "We maintain continuous QA checks and feedback loops. If any issues arise, they are quickly corrected and used to further strengthen accuracy over time.",
      },
      {
        q: "Are your team members trained in US healthcare?",
        a: "Yes. Our team is trained in US healthcare documentation standards, clinical workflows, and compliance requirements across multiple specialties.",
      },
    ],
  },
  {
    label: "Data Security & Compliance",
    faqs: [
      {
        q: "Is patient data secure?",
        a: "Yes. We follow strict, HIPAA-aligned workflows and secure data handling protocols to protect patient information at all times.",
      },
      {
        q: "How do you handle sensitive healthcare data?",
        a: "All processes operate within secure, access-controlled environments with clearly defined data handling procedures.",
      },
      {
        q: "Do you sign compliance agreements (e.g., BAA)?",
        a: "Yes. We support standard compliance requirements, including Business Associate Agreements (BAA), when working with US healthcare providers.",
      },
    ],
  },
  {
    label: "Services & Flexibility",
    faqs: [
      {
        q: "What services can I start with?",
        a: "You can start with a single service — such as virtual scribing, EHR documentation, prior authorization (RFA), or medical billing — or combine services based on your needs.",
      },
      {
        q: "Can I scale services over time?",
        a: "Yes. Our model is designed to scale with your practice — whether you support a single provider or a multi-location setup.",
      },
      {
        q: "Do I have to commit to all services?",
        a: "No. You choose what fits your workflow. There is no requirement to bundle services unless it benefits your operations.",
      },
    ],
  },
  {
    label: "Cost & ROI",
    faqs: [
      {
        q: "How does this compare to hiring in-house staff?",
        a: "TouchScribe can significantly reduce operational costs while improving efficiency and output quality — without the overhead of hiring, training, and retention.",
      },
      {
        q: "Will this actually improve revenue?",
        a: "Yes. Cleaner documentation and structured workflows support more accurate billing, fewer claim issues, and faster reimbursement cycles.",
      },
      {
        q: "Is there a minimum commitment?",
        a: "No long-term contracts are required. You can start small and scale based on performance and results.",
      },
    ],
  },
  {
    label: "Performance & Results",
    faqs: [
      {
        q: "How quickly will I see results?",
        a: "Many practices begin to see improvements in documentation turnaround and workload reduction within the first few weeks.",
      },
      {
        q: "What kind of results can I expect?",
        a: "Typical outcomes include: reduced documentation time, improved workflow efficiency, faster billing cycles, and lower administrative burden.",
      },
      {
        q: "Do you offer a trial or pilot?",
        a: "Yes. You can start with a limited engagement, including a 7-day free trial, to evaluate performance before scaling further.",
      },
    ],
  },
  {
    label: "Final Decision",
    faqs: [
      {
        q: "What happens if it is not the right fit?",
        a: "You can adjust, scale down, or discontinue at any time — without long-term obligations. Our goal is to deliver measurable value, not lock you into rigid contracts.",
      },
      {
        q: "What is the next step to get started?",
        a: "Simply schedule a demo or request a custom workflow plan. We will assess your needs and show you exactly how TouchScribe fits into your practice.",
      },
    ],
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
              From Setup to Full Workflow Optimization — Built to Reduce Operational Burden
            </motion.h1>
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
                          <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>
                          {step.details.length > 0 && (
                            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                              {step.details.map((d) => (
                                <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                  {d}
                                </li>
                              ))}
                            </ul>
                          )}
                          {step.outcome && (
                            <p className="text-sm font-semibold text-slate-700 border-t border-slate-100 pt-4 mt-2">
                              {step.outcome}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Closing Quote + CTA */}
        <section className="py-16 px-4 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-5xl text-primary/20 font-serif leading-none mb-6">"</motion.div>
              <motion.blockquote variants={fadeInUp} className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-6">
                From the first consultation to full-scale support, TouchScribe works as an extension of your practice — not just another service provider.
              </motion.blockquote>
              <motion.p variants={fadeInUp} className="text-slate-500 text-base mb-8">
                See how TouchScribe can remove operational burden and improve revenue flow.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button
                  size="lg"
                  className="rounded-full h-14 px-10 text-base font-semibold shadow-lg shadow-primary/30"
                  onClick={() => navigate("/book-demo?type=demo")}
                >
                  Start with a free consultation.
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="text-center mb-14"
            >
              <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">FAQ</motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Common Questions. Clear Answers. No Surprises.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-500 text-lg">
                Everything you need to know before getting started with TouchScribe — so you can move forward with clarity and confidence.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
              className="space-y-10"
            >
              {FAQ_SECTIONS.map((section, si) => (
                <motion.div key={si} variants={fadeInUp}>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">
                    {section.label}
                  </h3>
                  <div className="space-y-4">
                    {section.faqs.map((faq, fi) => (
                      <Card key={fi} className="bg-white border border-slate-200 shadow-sm">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            {faq.q}
                          </h4>
                          <p className="text-slate-600 text-sm leading-relaxed pl-7">{faq.a}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
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
          </motion.div>
        </section>

      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} TouchScribe. All rights reserved.
      </footer>
    </div>
  );
}
